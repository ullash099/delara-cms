<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Laravel\Fortify\Fortify;
use Illuminate\Routing\Pipeline;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;
use App\Providers\RouteServiceProvider;
use Illuminate\Contracts\Auth\StatefulGuard;
use Laravel\Fortify\Contracts\LogoutResponse;
use Laravel\Fortify\Http\Requests\LoginRequest;
use Laravel\Fortify\Http\Responses\LoginResponse;
use Laravel\Fortify\Actions\AttemptToAuthenticate;
use Laravel\Fortify\Actions\PrepareAuthenticatedSession;
use Laravel\Fortify\Http\Requests\TwoFactorLoginRequest;
use Laravel\Fortify\Http\Responses\TwoFactorLoginResponse;
use Laravel\Fortify\Actions\RedirectIfTwoFactorAuthenticatable;
use Laravel\Fortify\Http\Responses\FailedTwoFactorLoginResponse;

class AuthenticatedSessionController extends Controller
{
    protected $guard;
    public function __construct(StatefulGuard $guard)
    {
        $this->guard = $guard;
    }
    
    public function create()
    {
        if (Auth::user()) {
            if (in_array(Auth::user()->role_id,[1,2])) {
                return redirect(RouteServiceProvider::HOME);
            }
            return redirect(RouteServiceProvider::ADMIN);
        }
        $data = [
            //'header'    =>  $this->website->Header(),
            //'footer'    =>  $this->website->Footer(),
        ];
        return view('auth.login')->with($data);
    }

    public function forgotPassword()
    {
        $data = [
            'header'    =>  $this->website->Header(),
            'footer'    =>  $this->website->Footer(),
        ];
        return view('auth.forgot-password')->with($data);
    }

    public function store(LoginRequest $request)
    {
        return $this->loginPipeline($request)->then(function ($request) {
            $user = Auth::user();
            $user->createToken($user->email);
            session()->put('permissions', json_decode($user->role->permissions));
            session()->put('locale', $user->default_lan);
            if (in_array($user->role_id,[3,4])) {
                Config::set('fortify.home', RouteServiceProvider::HOME);
            } else {
                Config::set('fortify.home', RouteServiceProvider::ADMIN);
            }
            return app(LoginResponse::class);
        });
    }

    protected function loginPipeline(LoginRequest $request)
    {
        if (Fortify::$authenticateThroughCallback) {
            return (new Pipeline(app()))->send($request)->through(array_filter(
                call_user_func(Fortify::$authenticateThroughCallback, $request)
            ));
        }

        if (is_array(config('fortify.pipelines.login'))) {
            return (new Pipeline(app()))->send($request)->through(array_filter(
                config('fortify.pipelines.login')
            ));
        }

        return (new Pipeline(app()))->send($request)->through(array_filter([
            config('fortify.limiters.login') ? null : EnsureLoginIsNotThrottled::class,
            RedirectIfTwoFactorAuthenticatable::class,
            AttemptToAuthenticate::class,
            PrepareAuthenticatedSession::class,
        ]));
    }

    public function TwoFactorAuthenticatedStore(TwoFactorLoginRequest $request)
    {
        $user = $request->challengedUser();

        if ($code = $request->validRecoveryCode()) {
            $user->replaceRecoveryCode($code);
        } elseif (!$request->hasValidCode()) {
            return app(FailedTwoFactorLoginResponse::class);
        }

        $this->guard->login($user, $request->remember());

        return app(TwoFactorLoginResponse::class);
    }

    public function destroy(Request $request): LogoutResponse
    {
        Auth::user()->tokens->each(function($token, $key) {
            $token->delete();
        });
        $this->guard->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return app(LogoutResponse::class);
    }
}
