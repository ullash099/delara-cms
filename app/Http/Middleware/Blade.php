<?php

namespace App\Http\Middleware;

use App\Models\Menu;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Providers\RouteServiceProvider;

class Blade
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next, ...$guards)
    {
        $guards = empty($guards) ? [null] : $guards;

        foreach ($guards as $guard) {
            if (Auth::guard($guard)->check()) {
                if (in_array(Auth::user()->role_id,[1,2])) {
                    return redirect(RouteServiceProvider::HOME);
                }
                $menus = Menu::whereNull('parent')
                ->where('type','admin')
                ->with('childs')->get();
                view()->share('menus', $menus);
            }
        }

        return $next($request);
    }
}
