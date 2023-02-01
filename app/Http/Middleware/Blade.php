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
                $user = Auth::user();
                if (in_array($user->role_id,[1,2])) {
                    return redirect(RouteServiceProvider::HOME);
                }

                $permissions = json_decode($user->role->permissions);
                
                $whereNotIn = [1,2,3,4,5,6];
                $whereIn = array_diff($permissions,$whereNotIn);
                
                $menus = Menu::whereNull('parent')
                ->where(function ($q) use ($whereNotIn,$whereIn)
                {
                    $q->where([
                        ['type','=','admin']
                    ])
                    ->whereIn('id',$whereIn)
                    ->whereNotIn('id',$whereNotIn);
                })
                ->with('childs')->get();
                
                view()->share('menus', $menus);
            }
        }

        return $next($request);
    }
}
