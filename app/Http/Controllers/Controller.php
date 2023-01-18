<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function have_permission($id)
    {
        if (empty(session('permissions'))) {
            session()->put('permissions', Auth::user()->role->permissions);
        }
        if ($id == 0) return true;

        //$permissions = json_decode(session('permissions')); #for production
        $permissions = json_decode(Auth::user()->role->permissions); #for development

        if (in_array($id, $permissions)) {
            return true;
        } else {
            return false;
        }
    }

    public function get_permissions()
    {
        return [
            'can_handel_all_branch' =>  $this->have_permission(1),
            'can_save'              =>  $this->have_permission(2),
            'can_block'             =>  $this->have_permission(3),
            'can_delete'            =>  $this->have_permission(4),
            'can_publish'           =>  $this->have_permission(5),
        ];
    }
}
