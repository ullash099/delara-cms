<?php

namespace App\Http\Controllers\admin\settings;

use Exception;
use App\Models\BasicSetting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class WebsiteSettingsController extends Controller
{
    public function __construct() 
    {
    }

    public function index()
    {
        $settings = BasicSetting::whereIn('name', [
            'site_title','site_tagline',
            'logo_id','secondary_logo_id','icon_id',
            'company_name', 'company_phone', 'company_email', 'company_address',
            'facebook_link', 'linkedin_link', 'twitter_link'
        ])->get();

        $data = [
            'logo_img' => BasicSetting::primary_logo(),
            'secondary_logo_img' => BasicSetting::secondary_logo(),
            'icon_img' => BasicSetting::icon()
        ];

        foreach ($settings as $setting) {
            $data[$setting->name] = $setting->val;
        }

        $data = [
            'page'          =>  $this->translate(),
            'settings'      =>  $data
        ];

        return response()->json($data);
    }

    public function isValid(Request $request)
    {
        return Validator::make($request->all(), [
            'site_title'        =>  'nullable|max:250',
            'site_tagline'      =>  'nullable|max:250',
            'logo_id'           =>  !empty($request->logo_id) ? 'required|exists:media,id' : 'nullable',
            'secondary_logo_id' =>  !empty($request->secondary_logo_id) ? 'required|exists:media,id' : 'nullable',
            'icon_id'           =>  !empty($request->icon_id) ? 'required|exists:media,id' : 'nullable',

            'company_name'      =>  'required|max:250',
            'company_phone'     =>  'required|max:250',
            'company_email'     =>  'required|max:250',
            'company_address'   =>  'nullable|max:65000',

            'facebook_link'     =>  'nullable|max:65000',
            'linkedin_link'     =>  'nullable|max:65000',
            'twitter_link'      =>  'nullable|max:65000',
        ]);
    }

    public function store(Request $request)
    {
        $isValid = $this->isValid($request);
        if ($isValid->fails()) {
            return response()->json(['errors' => $isValid->errors()->all()]);
        }

        $user = Auth::user()->id;

        DB::beginTransaction();
        try {
            foreach ($_POST as $key => $value) {
                $basic_settings = BasicSetting::where('name', $key);
                if ($basic_settings->count() > 0) {
                    //update info
                    $data = [
                        'val'           => $value,
                        'updated_by'    => $user
                    ];
                    BasicSetting::where('name', $key)->update($data);
                } else {
                    //insert
                    $data = [
                        'name'          => $key,
                        'val'           => $value,
                        'created_by'    => $user
                    ];
                    BasicSetting::create($data);
                }
            }            
            DB::commit();
            return response()->json(['success'=> __('msg.successfully_done')]);
        } catch (Exception $e) {
            DB::rollback();
            return response()->json(['errors' => [__('msg.problem_try_again'),$e]]);
        }
    }

    public function translate()
    {
        $data = [
            'card_title'                =>  __('msg.website_settings'),
            'fieldset_1'                =>  __('msg.logo_n_site_identity'),
            'fieldset_2'                =>  __('msg.company_p'),
            'fieldset_3'                =>  __('msg.social_links'),

            'lbl_site_title'            =>  __('msg.site_title'),
            'lbl_site_tagline'          =>  __('msg.site_tagline'),

            'lbl_company_name'          =>  __('msg.companys').__('msg.name'),
            'lbl_company_phone'         =>  __('msg.companys').__('msg.phone'),
            'lbl_company_email'         =>  __('msg.companys').__('msg.email'),
            'lbl_company_address'       =>  __('msg.companys').__('msg.address'),

            'lbl_facebook'              =>  'Facebook',
            'lbl_linkedin'              =>  'Linkedin',
            'lbl_twitter'               =>  'Twitter',

            'btn_save'                  =>  __('msg.save'),
            'btn_saving'                =>  __('msg.saving'),

            'btn_set_primary_logo'      =>  __('msg.set_primary_logo'),
            'btn_site_secondary_logo'   =>  __('msg.site_secondary_logo'),
            'btn_set_icon'              =>  __('msg.set_icon'),
            'btn_remove'                =>  __('msg.remove'),
            
        ];
        return array_merge($this->get_permissions(),$data);
    }
}
