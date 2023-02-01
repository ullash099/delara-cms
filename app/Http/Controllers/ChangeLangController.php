<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ChangeLangController extends Controller
{
    public function index($lang='en')
    {
        session()->put('locale', $lang);
        if (Auth::user()) {
            $id = Auth::user()->id;
            $info = User::find($id);
            try {
                $info->default_lan  = $lang;
                $info->save();
            } catch (\Throwable $th) {
                throw $th;
            }
        }
        return redirect()->back();
    }
}
