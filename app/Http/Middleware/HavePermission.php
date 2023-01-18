<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HavePermission
{
    
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle($request, Closure $next,$permits,$route)
    {
        $permissions = json_decode(Auth::user()->role->permissions);
        $permit = explode('|',$permits);
        foreach ($permit as $key => $value) {
            if (in_array($value, $permissions)) {
                return $next($request);
            } else {
                if ($route == 'api') {
                    return response()->json(['deny' => __('msg.deny')]);
                }
            }
        }
        return redirect()->back()->with(['errors' => [__('msg.deny')]]);
    }
}
