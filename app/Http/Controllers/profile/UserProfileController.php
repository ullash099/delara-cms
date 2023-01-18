<?php

namespace App\Http\Controllers\profile;

use Exception;
use Carbon\Carbon;
use App\Models\Menu;
use App\Models\Role;
use App\Models\User;
use Jenssegers\Agent\Agent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class UserProfileController extends Controller
{
    public function __construct()
    {
    }

    public function index()
    {
        $user = Auth::user();
        
        $role = Role::find($user->role_id);

        $permissions = json_decode($role->permissions);

        $whereNotIn = [1, 2, 3, 4, 5];

        $menuInfo = Menu::whereIn('id', $permissions)
        ->whereNotIn('id', $whereNotIn)
        ->whereNull('parent')->with('childs')->get();

        $menus = [];
        foreach ($menuInfo as $info) {
            $childs = [];
            foreach ($info->childs as $child) {
                if (in_array($child->id, $permissions)) {
                    array_push($childs, (object)[
                        'name'      =>  ConvertToLang($child),
                        'web'       =>  $child->web,
                        'web_icon'  =>  $child->web_icon,
                        'app'       =>  $child->app,
                        'app_icon'  =>  $child->app_icon,
                    ]);
                }
            }
            array_push($menus, (object)[
                'name'      =>  ConvertToLang($info),
                'childs'    =>  $childs,
                'web'       =>  $info->web,
                'web_icon'  =>  $info->web_icon,
                'app'       =>  $info->app,
                'app_icon'  =>  $info->app_icon,
            ]);
        }

        $data = [
            'menus'         =>  $menus,
            'name'          =>  ucwords($user->name),
            'email'         =>  $user->email,
            'profile_photo' =>  $user->profile_photo_url,
            'role'          =>  ConvertToLang($user->role),
            'permissions'   =>  $permissions,
        ];
        return response()->json($data);
    }

    public function token()
    {
        $user = Auth::user();
        if (count($user->tokens) >= 1) {
            $info = DB::table('personal_access_tokens')->select('token')
            ->where('name',$user->email)->first();
            return response()->json(['_token' => $info->token]);
        }
        return response()->json(["message", "Authentication Required!"], 401);
    }

    public function isValidProfileInfo(Request $request)
    {
        $user = Auth::user()->id;
        return Validator::make($request->all(), [
            'name'  => 'required|max:250',
            'email' => 'required|max:250|email|unique:users,email,' . $user
        ]);
    }
    
    public function isValidPhoto(Request $request)
    {
        return Validator::make($request->all(), [
            'file'   => 'required|image|max:1024|mimes:jpg,jpeg,png'
        ]);
    }

    public function updateProfile(Request $request)
    {
        $isValid = $this->isValidProfileInfo($request);
        if ($isValid->fails()) {
            return response()->json(['errors' => $isValid->errors()->all()]);
        }
        if ($request->hasFile('file')) {
            $validator = $this->isValidPhoto($request);
            if ($validator->fails()) {
                return response()->json(['errors' => $validator->errors()->all()]);
            }
        }
        
        $id = Auth::user()->id;
        $oldAvatar =  Auth::user()->profile_photo_path;
        $data = [
            'name'      =>  $request->name,
            'email'     =>  $request->email,
        ];
        if ($request->file('file')) {
            if (!empty($oldAvatar)) {
                Storage::disk('public')->delete($oldAvatar);
            }
            $path = $request->file('file')->storePublicly('avatars', 'public');
            $data['profile_photo_path'] = $path;
        }
        DB::beginTransaction();
        try {
            User::where('id', $id)->update($data);
            DB::commit();
            return response()->json(['success'=> __('msg.successfully_done')]);
        } catch (Exception $e) {
            DB::rollback();
            return response()->json(['errors' => [__('msg.problem_try_again')]]);
        }
    }

    public function isPasswordMatches(Request $request)
    {
        $user = Auth::user();
        return Validator::make($request->all(), [
            'password'  =>  'required|confirmed|min:8|max:250'
        ])->after(function ($validator) use ($user, $request) {
            if (!Hash::check($request->current_password, $user->password)) {
                return $validator->errors()->add('current_password', __('The provided password does not match your current password.'));
            }
        });
    }

    public function updatePassword(Request $request)
    {
        $isValid = $this->isPasswordMatches($request);
        if ($isValid->fails()) {
            return response()->json(['errors' => $isValid->errors()->all()]);
        }
        
        $id = Auth::user()->id;
        $data = [
            'password' => Hash::make($request->password),
        ];
        DB::beginTransaction();
        try {
            User::where('id', $id)->update($data);
            DB::commit();
            return response()->json(['success'=> __('msg.successfully_done')]);
        } catch (Exception $e) {
            DB::rollback();
            return response()->json(['errors' => [__('msg.problem_try_again')]]);
        }
    }

    public function BrowserSessions(Request $request)
    {
        $sessions = collect(
            DB::connection(config('session.connection'))->table(config('session.table', 'sessions'))
                ->where('user_id', $request->user()->getAuthIdentifier())
                ->orderBy('last_activity', 'desc')
                ->get()
        )->map(function ($session) use ($request) {
            $agent = $this->createAgent($session);

            return (object) [
                'agent' => [
                    'is_desktop' => $agent->isDesktop(),
                    'is_mobile' => $agent->isPhone(),
                    'platform' => $agent->platform(),
                    'browser' => $agent->browser(),
                ],
                'ip_address' => $session->ip_address,
                'is_current_device' => $session->id === $request->session()->getId(),
                'last_active' => Carbon::createFromTimestamp($session->last_activity)->diffForHumans(),
            ];
        });

        return response()->json([
            'sessions'  =>  $sessions,
        ]);
    }

    protected function createAgent($session)
    {
        return tap(new Agent, function ($agent) use ($session) {
            $agent->setUserAgent($session->user_agent);
        });
    }

    public function StartUpData()
    {
        return response()->json([
            'page'  =>  [
                'card_title_1'                  =>  __('msg.update_profile_info'),
                'card_title_2'                  =>  __('msg.update_password_info'),
                'card_title_3'                  =>  __('msg.two_factor'),
                'card_title_4'                  =>  __('msg.browser_sessions'),
                'modal_title'                   =>  __('msg.browser_sessions'),
    
                'tab_title_1'                   =>  __('msg.profile_info'),
                'tab_title_2'                   =>  __('msg.update_password'),
                'tab_title_3'                   =>  __('msg.two_factor_auth'),
                'tab_title_4'                   =>  __('msg.browser_sessions'),
    
                'lbl_select_photo'              =>  __('msg.select_photo'),
                'lbl_name'                      =>  __('msg.name'),
                'lbl_email'                     =>  __('msg.email'),
                'lbl_current_password'          =>  __('msg.current_password'),
                'lbl_new_password'              =>  __('msg.new_password'),
                'lbl_password_confirmation'     =>  __('msg.password_confirmation'),
                'lbl_password'                  =>  __('msg.password'),
    
                'txt_enabled_two_factor'        =>  __('msg.enabled_two_factor'),
                'txt_when_two_factor_enabled'   =>  __('msg.when_two_factor_enabled'),
                'txt_phone_auth_application'    =>  __('msg.phone_auth_application'),
                'txt_store_recovery_codes'      =>  __('msg.store_recovery_codes'),            
                'txt_disabled_two_factor'       =>  __('msg.disabled_two_factor'),
                'txt_manage_active_sessions'    =>  __('msg.manage_active_sessions'),
                'txt_other_logout_sessions'     =>  __('msg.other_logout_sessions'),
                'txt_this_device'               =>  __('msg.this_device'),
                'txt_last_active'               =>  __('msg.last_active'),
                'txt_confirm_session_pass'      =>  __('msg.confirm_session_pass'),
    
                'btn_save'                      =>  __('msg.update'),
                'btn_saving'                    =>  __('msg.updateing'),
                'btn_enable'                    =>  __('msg.btn_enable_two_factor'),
                'btn_disable'                   =>  __('msg.btn_disable_two_factor'),
                'btn_regenerate'                =>  __('msg.regenerate_two_factor'),
                'btn_working'                   =>  __('msg.working'),
                'btn_logout_sessions'           =>  __('msg.logout_sessions'),
                'btn_working_logout'            =>  __('msg.working'),
            ]
        ]);
    }
}
