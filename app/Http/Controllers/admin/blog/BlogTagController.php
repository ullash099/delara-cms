<?php

namespace App\Http\Controllers\admin\blog;

use Illuminate\Http\Request;
use App\Models\blog\BlogTags;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class BlogTagController extends Controller
{
    public function __construct()
    {
    }

    public function index()
    {
        $src = $_GET['src'] ?? null;
        if (!empty($src)) {
            $datatable = BlogTags::where(function ($q) use ($src) {
                $q->where('name', 'like', '%' . $src . '%')
                    ->orWhere('name_l', 'like', '%' . $src . '%');
            })->withTrashed()->latest()->paginate(25);
        } else {
            $datatable = BlogTags::withTrashed()->latest()->paginate(25);
        }

        return response()->json([
            'page'          =>  $this->translate(),
            'datatable'     =>  $datatable
        ]);
    }

    public function validation(Request $request)
    {
        $id = $request->id != 0 ? $request->id : null;
        return Validator::make($request->all(), [
            'name'          => 'required|max:250|unique:blog_tags,name,' . $id,
            'name_l'        => 'nullable|max:250|unique:blog_tags,name_l,' . $id
        ]);
    }

    public function store(Request $request)
    {
        $isValid = $this->validation($request);
        if ($isValid->fails()) {
            return response()->json(['errors' => $isValid->errors()->all()]);
        }
        
        $user = Auth::user()->id;
        $id = $request->id;
        
        $data = [
            'name'      =>  $request->name,
            'name_l'    =>  $request->name_l ?? null,
        ];

        DB::beginTransaction();
        try {
            if ($id != 0) {
                $data['updated_by'] = $user;
                BlogTags::where('id',$id)->update($data);
                SetLog('Updated tag info. (' . $request->name . ')');
            }
            else{
                $data['created_by'] = $user;
                BlogTags::create($data);
                SetLog('Add a new tag. (' . $request->name . ')');
            }
            DB::commit();
            return response()->json(['success'=> __('msg.successfully_done')]);
        } catch (\Throwable $th) {
            DB::rollback();
            return response()->json(['errors' => [__('msg.problem_try_again')]]);
        }
    }

    public function block(Request $request)
    {
        $user = Auth::user()->id;
        $info = BlogTags::find($request->id);
        $info->deleted_by   = $user;

        DB::beginTransaction();
        try {
            $info->save();
            $info->delete();
            DB::commit();
            SetLog('Tag has been blocked. (' . $info->name . ')');
            return response()->json(['success'=> __('msg.successfully_done')]);
        } catch (\Throwable $th) {
            DB::rollback();
            return response()->json(['errors' => [__('msg.problem_try_again')]]);
        }
    }
    
    public function unblock(Request $request)
    {
        $user = Auth::user()->id;
        $info = BlogTags::withTrashed()->find($request->id);
        $info->updated_by   = $user;
        $info->deleted_by   = null;

        DB::beginTransaction();
        try {
            $info->save();
            $info->restore();
            DB::commit();
            SetLog('Tag has been unblocked. (' . $info->name . ')');
            return response()->json(['success'=> __('msg.successfully_done')]);
        } catch (\Throwable $th) {
            DB::rollback();
            return response()->json(['errors' => [__('msg.problem_try_again')]]);
        }
    }
    
    public function translate()
    {
        $data = [
            'list_card_title'           =>  __('msg.list_tag'),
            'form_card_title'           =>  __('msg.tag').__('msg.information'),

            'lbl_name'                  =>  __('msg.name'),
            'lbl_name_l'                =>  __('msg.name_l'),

            'badge_danger'              =>  __('msg.blocked'),
            'badge_success'             =>  __('msg.running'),

            'btn_action'                =>  __('msg.action'),
            'btn_edit'                  =>  __('msg.edit'),
            'btn_block'                 =>  __('msg.block'),
            'btn_unblock'               =>  __('msg.unblock'),

            'btn_reset'                 =>  __('msg.reset'),
            'btn_save'                  =>  __('msg.save'),
            'btn_saving'                =>  __('msg.saving'),
            'btn_update'                =>  __('msg.update'),
            'btn_updateing'             =>  __('msg.updateing'),

            'swal_title'                =>  __('msg.r_u_sure'),
            'swal_unblock_text'         =>  __('msg.unblock_later'),
            'swal_block_text'           =>  __('msg.block_later'),
            'swal_block_yes'            =>  __('msg.yes_block'),
            'swal_unblock_yes'          =>  __('msg.yes_unblock'),
            'swal_no'                   =>  __('msg.no'),

            'theads'                    =>  [
                (object)[
                    'txt'   =>  __('msg.name'),
                    'style' =>  ['width'=>'75%']
                ],
                (object)[
                    'txt'   =>  __('msg.status'),
                    'style' =>  ['width'=>'10%']
                ],
                (object)[
                    'txt'   =>  __('msg.action'),
                    'style' =>  ['width'=>'15%'],
                    'class' =>  'text-end pe-3'
                ],
            ]
            
        ];
        return array_merge($this->get_permissions(),$data);
    }
}
