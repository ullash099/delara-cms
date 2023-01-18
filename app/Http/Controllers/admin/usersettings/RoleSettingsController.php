<?php

namespace App\Http\Controllers\admin\usersettings;

use Exception;
use App\Models\Menu;
use App\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class RoleSettingsController extends Controller
{
    public function __construct()
    {
    }

    public function index()
    {
        $src = $_GET['src'] ?? null;
        if (!empty($src)) {
            $datatable = Role::withTrashed()->whereNotIn('id', [3])
                ->where(function ($q) use ($src) {
                    $q->where('name', 'like', '%' . $src . '%')
                        ->orWhere('name_l', 'like', '%' . $src . '%');
                })
                ->with('users')->paginate(25);
        } else {
            $datatable = Role::withTrashed()->whereNotIn('id', [3])
                ->with('users')->paginate(25);
        }

        return response()->json([
            'page'      =>  $this->translate(),
            'datatable' =>  $datatable,
        ]);
    }

    public function menus()
    {
        $id = $_GET['id'] ?? null;        
        $menus = Menu::where(function ($q)
            {
                $q->where('type','=','all')
                ->orWhere('type','=','website')
                ->orWhere('type','=','admin');
            })->whereNull('parent')->with('childs')->get();

        $permissions = [];
        $record = [];

        if (!empty($id)) {
            $role = Role::where('id', $id)->first();
            $record = [
                'name'      =>  $role->name,
                'name_l'    =>  $role->name_l,
            ];
            if (!empty($role->permissions)) {
                $permissions = json_decode($role->permissions);
            }
            if(in_array($role->id,[1,2])){
                if ($role->type == 1) {
                    $menus = Menu::where(function ($q)
                    {
                        $q->where('type','=','all')
                        ->orWhere('type','=','buyer');
                    })->whereNull('parent')->with('childs')->get();
                } else {
                    $menus = Menu::where(function ($q)
                    {
                        $q->where('type','=','all')
                        ->orWhere('type','=','seller');
                    })->whereNull('parent')->with('childs')->get();
                }
            }
        }

        $totalMenu = 0;
        $totalSelectedMenu = 0;
        $data = [];
        foreach ($menus as $menu) {
            $childs = [];
            foreach ($menu->childs as $child) {
                array_push($childs, (object)[
                    'id'            =>  $child->id,
                    'name'          =>  $child->name,
                    'name_l'        =>  $child->name_l,
                    'note'          =>  $child->note,
                    'note_l'        =>  $child->note_l,
                    'childs'        =>  [],
                    'is_checked'    =>  in_array($child->id, $permissions ?? [])
                ]);
                if (in_array($child->id, $permissions)) {
                    $totalSelectedMenu++;
                }
                $totalMenu++;
            }
            array_push($data, (object)[
                'id'            =>  $menu->id,
                'name'          =>  $menu->name,
                'name_l'        =>  $menu->name_l,
                'childs'        =>  $childs,
                'is_checked'    =>  in_array($menu->id, $permissions ?? [])
            ]);
            if (in_array($menu->id, $permissions)) {
                $totalSelectedMenu++;
            }
            $totalMenu++;
        }

        $page = [
            'card_title'        =>  __('msg.role_info'),
            'btn_back'          =>  __('msg.back'),
            'lbl_name'          =>  __('msg.name'),
            'lbl_name_l'        =>  __('msg.name_l'),
            'lbl_permission'    =>  __('msg.set_permit'),
            'btn_save'          =>  empty($record) ? __('msg.save') : __('msg.update'),
            'btn_saving'        =>  empty($record) ? __('msg.saving') : __('msg.updateing'),
        ];

        return response()->json([
            'total_menu'            =>  $totalMenu,
            'total_selected_menu'   =>  $totalSelectedMenu,
            'record'                =>  $record,
            'page'                  =>  $page,
            'menus'                 =>  $data,
        ]);
    }

    public function isValidRole(Request $request)
    {
        if(!isset($request->permissions)){
            return Validator::make($request->all(), [
                'permissions'       =>  'required|exists:menus,id'
            ]);
        }

        return Validator::make($request->all(), [
            'name'              =>  'required|max:250|unique:roles,name,'. $request->id,
            'name_l'            =>  'nullable|max:250|unique:roles,name_l,'. $request->id,
            'permissions.*'     =>  'required|exists:menus,id',
        ]);
    }

    public function store(Request $request)
    {
        $isValid = $this->isValidRole($request);
        if ($isValid->fails()) {
            return response()->json(['errors' => $isValid->errors()->all()]);
        }
        
        $permissions = [];
        foreach ($request->permissions as $key => $value) {
            array_push($permissions,(int)$value);
        }
        $user = Auth::user()->id;
        $data = [
            'name'          =>  $request->name,
            'name_l'        =>  $request->name_l,
            'permissions'   =>  json_encode($permissions),
            'created_by'    =>  $user
        ];

        DB::beginTransaction();
        try {
            if ($request->id != 0){
                Role::where('id',$request->id)->update($data);
                SetLog('Updated role info. (' . $request->name . ')');
            }else{
                Role::create($data);
                SetLog('Add A New role. (' . $request->name . ')');
            }
            DB::commit();
            return response()->json(['success'=> __('msg.successfully_done')]);
        } catch (Exception $e) {
            DB::rollback();
            return response()->json(['errors' => [__('msg.problem_try_again'),$e]]);
        }
    }

    public function block(Request $request)
    {
        $user = Auth::user()->id;
        $info = Role::find($request->id);
        $info->deleted_by   = $user;

        DB::beginTransaction();
        try {
            $info->save();
            $info->delete();
            DB::commit();
            SetLog('Block a Role. (' . $info->name . ')');
            return response()->json(['success'=> __('msg.successfully_done')]);
        } catch (Exception $e) {
            DB::rollback();
            return response()->json(['errors' => [__('msg.problem_try_again')]]);
        }
    }

    public function unblock(Request $request)
    {
        $user = Auth::user()->id;
        $info = Role::withTrashed()->find($request->id);
        $info->updated_by   = $user;
        $info->deleted_by   = null;

        DB::beginTransaction();
        try {
            $info->save();
            $info->restore();
            DB::commit();
            SetLog('Unblock a Role. (' . $info->name . ')');
            return response()->json(['success'=> __('msg.successfully_done')]);
        } catch (Exception $e) {
            DB::rollback();
            return response()->json(['errors' => [__('msg.problem_try_again')]]);
        }
    }

    public function translate()
    {
        $data = [
            'card_title'        =>  __('msg.user_role_list'),
            'btn_add_new'       =>  __('msg.add_new'),
            'btn_edit'          =>  __('msg.edit'),
            'btn_action'        =>  __('msg.action'),
            'btn_block'         =>  __('msg.block'),
            'btn_unblock'       =>  __('msg.unblock'),

            'swal_title'        =>  __('msg.r_u_sure'),
            'swal_unblock_text' =>  __('msg.unblock_later'),
            'swal_block_text'   =>  __('msg.block_later'),
            'swal_block_yes'    =>  __('msg.yes_block'),
            'swal_unblock_yes'  =>  __('msg.yes_unblock'),
            'swal_no'           =>  __('msg.no'),
            
            'theads'        =>  [
                (object)[
                    'txt'   =>  __('msg.name'),
                    'style' =>  ['width'=>'30%'],
                ],
                (object)[
                    'txt'   =>  __('msg.assigned_u'),
                    'style' =>  ['width'=>'60%'],
                    'class' =>  'text-center'
                ],
                (object)[
                    'txt'   =>  __('msg.action'),
                    'style' =>  ['width'=>'10%'],
                    'class' =>  'text-end pe-3'
                ]
            ]
        ];
        return array_merge($this->get_permissions(),$data);
    }
}
