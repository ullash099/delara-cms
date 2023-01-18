<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Providers\RouteServiceProvider;

class WebsiteController extends Controller
{
    public function index()
    {
        if (Auth::user()) {
            if (!in_array(Auth::user()->role_id,[1,2])) {
                return redirect(RouteServiceProvider::ADMIN);
            }
        }
        $data = [];
        return view('layouts.welcome')->with($data);
    }
    
    public function admin()
    {
        if (Auth::user()) {
            if (in_array(Auth::user()->role_id,[1,2])) {
                return redirect(RouteServiceProvider::HOME);
            }
        }
        $data = [];
        return view('layouts.admin')->with($data);
    }
}
