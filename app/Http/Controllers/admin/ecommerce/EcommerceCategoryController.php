<?php

namespace App\Http\Controllers\admin\ecommerce;

use Throwable;
use App\Models\Category;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class EcommerceCategoryController extends Controller
{
    public function __construct()
    {
    }
    
    public function index()
    {
        $src = $_GET['src'] ?? null;
        if (!empty($src)) {
            $datatable = Category::where(function ($q) use ($src) {
                $q->where('name', 'like', '%' . $src . '%')
                    ->orWhere('name_l', 'like', '%' . $src . '%');
            })->where(function($q){
                $q->where('type','all')->orWhere('type','ecommerce');
            })
            ->with('parent')->withTrashed()->latest()->paginate(25);
        } else {
            $datatable = Category::with('parent')
            ->where(function($q){
                $q->where('type','all')->orWhere('type','ecommerce');
            })->withTrashed()->latest()->paginate(25);
        }

        return response()->json([
            'categories'    =>  Category::all(),
            'page'          =>  $this->translate(),
            'datatable'     =>  $datatable
        ]);
    }

    public function validation(Request $request)
    {
        return Validator::make($request->all(), [
            'parent'        => ($request->parent == 0) ? 'nullable' : 'required|exists:categories,id',
            'name'          => ['required','max:250',
                Rule::unique('categories')->where(function ($query) use ($request) {
                    if ($request->parent != 0) {
                        if ($request->id != 0) {
                            $query->where([
                                ['id','!=', $request->id],
                                ['type', '=', $request->parent],
                                ['parent_id', '=', $request->parent],
                            ])
                            ->where(function($q){
                                $q->where('type','all')->orWhere('type','ecommerce');
                            });
                        } 
                        else {
                            $query->where('parent_id', $request->parent)
                            ->where(function($q){
                                $q->where('type','all')->orWhere('type','ecommerce');
                            });
                        }
                    } 
                    else {
                        $query->where(function($q){
                            $q->where('type','all')->orWhere('type','ecommerce');
                        })
                        ->whereNull('parent_id');
                    }
                })],
            'name_l'        => ['nullable','max:250',
                Rule::unique('categories')->where(function ($query) use ($request) {
                    if ($request->parent != 0) {
                        if ($request->id != 0) {
                            $query->where([
                                ['id','!=', $request->id],
                                ['parent_id', '=', $request->parent],
                            ])
                            ->where(function($q){
                                $q->where('type','all')->orWhere('type','ecommerce');
                            });
                        } 
                        else {
                            $query->where('parent_id', $request->parent)
                            ->where(function($q){
                                $q->where('type','all')->orWhere('type','ecommerce');
                            });
                        }
                    } else {
                        $query->where(function($q){
                            $q->where('type','all')->orWhere('type','ecommerce');
                        })->whereNull('parent_id');
                    }
                })]
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

        $slug = '';
        $slug_l = '';
        if ($request->parent != 0) {
            $parentInfo = Category::where('id',$request->parent)->first();
            $slug = $parentInfo->slug.'-';
            if (!empty($parentInfo->slug_l)) {
                $slug_l = $parentInfo->slug_l.'-';
            }
        }

        $slug .= Str::slug($request->name);
        if (!empty($request->name_l)) {
            $slug_l .= Str::slug($request->name_l);
        }

        
        $data = [
            'parent_id' =>  $request->parent,
            'type'      =>  'ecommerce',
            'name'      =>  $request->name,
            'name_l'    =>  $request->name_l ?? null,
            'slug'      =>  $slug,
            'slug_l'    =>  $slug_l
        ];

        DB::beginTransaction();
        try {
            if ($id != 0) {
                $data['updated_by'] = $user;
                Category::where('id',$id)->update($data);
                SetLog('Updated Ecommerce category info. (' . $request->name . ')');
            }
            else{
                $data['created_by'] = $user;
                Category::create($data);
                SetLog('Add a new Ecommerce category. (' . $request->name . ')');
            }
            DB::commit();
            return response()->json(['success'=> __('msg.successfully_done')]);
        } catch (Throwable $th) {
            DB::rollback();
            return response()->json(['errors' => [__('msg.problem_try_again'),$th]]);
        }
    }

    public function block(Request $request)
    {
        $user = Auth::user()->id;
        $info = Category::find($request->id);
        $info->deleted_by   = $user;

        DB::beginTransaction();
        try {
            $info->save();
            $info->delete();
            DB::commit();
            SetLog('Ecommerce category has been blocked. (' . $info->name . ')');
            return response()->json(['success'=> __('msg.successfully_done')]);
        } catch (\Throwable $th) {
            DB::rollback();
            return response()->json(['errors' => [__('msg.problem_try_again')]]);
        }
    }
    
    public function unblock(Request $request)
    {
        $user = Auth::user()->id;
        $info = Category::withTrashed()->find($request->id);
        $info->updated_by   = $user;
        $info->deleted_by   = null;

        DB::beginTransaction();
        try {
            $info->save();
            $info->restore();
            DB::commit();
            SetLog('Ecommerce category has been unblocked. (' . $info->name . ')');
            return response()->json(['success'=> __('msg.successfully_done')]);
        } catch (\Throwable $th) {
            DB::rollback();
            return response()->json(['errors' => [__('msg.problem_try_again')]]);
        }
    }

    public function translate()
    {
        $data = [
            'list_card_title'           =>  __('msg.list_category'),
            'form_card_title'           =>  __('msg.category').__('msg.information'),

            'lbl_parent'                =>  __('msg.parent_category'),
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