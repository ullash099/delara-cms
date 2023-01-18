<?php

namespace App\Http\Controllers\admin\usersettings;

use Exception;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserSettingsController extends Controller
{
    public function __construct() 
    {
    }

    public function index()
    {
        $src = $_GET['src'] ?? null;
        if (!empty($src)) {
            $datatable = User::whereNotIn('role_id', [3])
                ->where(function ($q) use ($src) {
                    $q->where('name', 'like', '%' . $src . '%')
                        ->orWhere('email', 'like', '%' . $src . '%');
                })
                ->with('role')->paginate(25);
        } else {
            $datatable = User::whereNotIn('role_id', [3])->with('role')->paginate(25);
        }
        return response()->json([
            'page'      =>  $this->translate(),
            'roles'     =>  Role::whereNotIn('id',[3])->get(),
            'datatable' =>  $datatable,
        ]);
    }

    public function isValidUser(Request $request)
    {
        return Validator::make($request->all(), [
            'name'      =>  'required|max:250',
            'email'     =>  'required|unique:users,email,'.$request->id,
            'role_type' =>  'required|exists:roles,id',
            'password'  =>  (!empty($request->password)) ? 'required|confirmed|min:8|max:190' : 'nullable'
        ]);
    }

    public function save(Request $request)
    {
        $isValid = $this->isValidUser($request);
        if ($isValid->fails()) {
            return response()->json(['errors' => $isValid->errors()->all()]);
        }

        $user = Auth::user()->id;
        $id = $request->id;

        if ($id != 0) {
            $data = [
                'name'          =>  $request->name,
                'email'         =>  $request->email,
                'role_id'       =>  $request->role_type,
            ];
            if (!empty($request->password)) {
                $data['password'] = Hash::make($request->password);
            }

            DB::beginTransaction();
            try {
                User::where('id',$id)->update($data);
                DB::commit();
                SetLog("Update user information {$request->name} with {$request->email}");
                return response()->json(['success'=> __('msg.successfully_done')]);
            } catch (Exception $e) {
                DB::rollback();
                return response()->json(['errors' => [__('msg.problem_try_again')]]);
            }
        }

        $data = [
            'name'          =>  $request->name,
            'email'         =>  $request->email,
            'role_id'       =>  $request->role_type,
            'password'      =>  Hash::make($request->password),
            'created_by'    =>  $user
        ];

        DB::beginTransaction();
        try {
            $user = User::create($data);
            //$user->sendEmailVerificationNotification();
            //event(new Registered($user)); need to check
            DB::commit();
            SetLog("New User Create {$request->name} with {$request->email}");
            return response()->json(['success'=> __('msg.successfully_done')]);
        } catch (Exception $e) {
            DB::rollback();
            return response()->json(['errors' => [__('msg.problem_try_again')]]);
        }
    }

    public function manuallyConfirmEmail(Request $request)
    {
        $user = Auth::user();

        $username = $user->name;
        $updated_by = $user->id;

        $info = User::find($request->id);
        $info->email_verified_at    = now();
        $info->updated_by           = $updated_by;

        DB::beginTransaction();
        try {
            $info->save();
            DB::commit();
            SetLog("Manually Email Confirmed By {$username} for {$info->name}=>{$info->email}");
            return response()->json(['success'=> __('msg.successfully_done')]);
        } catch (Exception $e) {
            DB::rollback();
            return response()->json(['errors' => [__('msg.problem_try_again')]]);
        }
    }

    public function block(Request $request)
    {
        $user = Auth::user()->id;

        $info = User::find($request->id);
        $info->block        = true;
        $info->updated_by   = $user;

        DB::beginTransaction();
        try {
            $info->save();
            DB::commit();
            SetLog('Blocked an user. (' . $info->name . ')');
            return response()->json(['success'=> __('msg.successfully_done')]);
        } catch (Exception $e) {
            DB::rollback();
            return response()->json(['errors' => [__('msg.problem_try_again')]]);
        }
    }

    public function unblock(Request $request)
    {
        $user = Auth::user()->id;

        $info = User::find($request->id);
        $info->block        = false;
        $info->updated_by   = $user;

        DB::beginTransaction();
        try {
            $info->save();
            DB::commit();
            SetLog('unblocked an user. (' . $info->name . ')');
            return response()->json(['success'=> __('msg.successfully_done')]);
        } catch (Exception $e) {
            DB::rollback();
            return response()->json(['errors' => [__('msg.problem_try_again')]]);
        }
    }

    public function translate()
    {
        $data = [
            'can_save'                  =>  $this->have_permission(2),
            'can_block'                 =>  $this->have_permission(3),
            'card_title'                =>  __('msg.user_list'),
            'modal_title'               =>  __('msg.user_info'),

            'lbl_name'                  =>  __('msg.name'),
            'lbl_email'                 =>  __('msg.email'),
            'lbl_employee'              =>  __('msg.employee'),
            'lbl_branch'                =>  __('msg.branch'),
            'lbl_role'                  =>  __('msg.role_type'),
            'lbl_password'              =>  __('msg.password'),
            'lbl_password_confirm'      =>  __('msg.password_confirmation'),

            'badge_email_verified'      =>  __('msg.email_verified'),
            'badge_email_not_verified'  =>  __('msg.email_not_verified'),

            'badge_active'              =>  __('msg.active'),
            'badge_blocked'             =>  __('msg.blocked'),

            'btn_add_new'               =>  __('msg.add_new'),
            'btn_edit'                  =>  __('msg.edit'),
            'btn_manually_confirm_email'=>  __('msg.manually_confirm_email'),
            'btn_action'                =>  __('msg.action'),
            'btn_block'                 =>  __('msg.block'),
            'btn_unblock'               =>  __('msg.unblock'),
            'btn_save'                  =>  __('msg.save'),
            'btn_saving'                =>  __('msg.saving'),

            'swal_title'                =>  __('msg.r_u_sure'),
            'swal_unblock_text'         =>  __('msg.unblock_later'),
            'swal_block_text'           =>  __('msg.block_later'),
            'swal_yes'                  =>  __('msg.yes'),
            'swal_block_yes'            =>  __('msg.yes_block'),
            'swal_unblock_yes'          =>  __('msg.yes_unblock'),
            'swal_no'                   =>  __('msg.no'),
            
            'theads'                    =>  [
                (object)[
                    'txt'           =>  __('msg.name'),
                    'style'         =>  ['width'=>'35%'],
                ],
                (object)[
                    'txt'           =>  __('msg.email'),
                    'style'         =>  ['width'=> '35%']
                ],
                (object)[
                    'txt'           =>  __('msg.status'),
                    'style'         =>  ['width'=> '20%'],
                    'class'         =>  'text-center'
                ],
                (object)[
                    'txt'           =>  __('msg.action'),
                    'style'         =>  ['width'=>'10%'],
                    'class'         =>  'text-end pe-3'
                ]
            ]
        ];
        return array_merge($this->get_permissions(),$data);
    }
}
