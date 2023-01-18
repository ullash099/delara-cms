<?php

namespace App\Http\Controllers\settings;

use Exception;
use App\Models\Media;
use App\Models\BasicSetting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class MediaController extends Controller
{
    public function __construct() {
    }

    public function index()
    {
        $src = $_GET['src'] ?? null;
        if (!empty($src)) {
            $datatable = Media::where('name', 'like', '%' . $src . '%')->paginate(12);
        } else {
            $datatable = Media::paginate(12);
        }

        return response()->json([
            'page'      =>  $this->translate(),
            'datatable' =>  $datatable,
        ]);
    }

    public function isValidFiles(Request $request)
    {
        return Validator::make($request->all(),[
            'file.*'   => 'required|image|mimes:jpeg,png,jpg,gif,svg,pdf,doc,docx,xlsx,xls|max:5000'
        ]);
    }

    public function store(Request $request)
    {
        if ($request->hasFile('file')) {
            $isValid = $this->isValidFiles($request);
            if ($isValid->fails()) {
                return response()->json(['errors' => $isValid->errors()->all()]);
            }
            

            $user = Auth::user()->id;
            $image = [];
            if ($request->hasFile('file')) {
                $num_elements = 0;
                $files = $request->file('file');
                while ($num_elements < count($files)) {
                    $upload = $files[$num_elements];
                    $path = $upload->getRealPath();
                    $file = file_get_contents($path);
                    $base64 = base64_encode($file);
                    $image[] = [
                        'name'          =>  $upload->getClientOriginalName(),
                        'mime'          =>  $upload->getClientMimeType(),
                        'size'          =>  number_format(($upload->getSize() / 1024), 1),
                        'attachment'    =>  'data:'.$upload->getClientMimeType().';base64,'.$base64,
                        'created_by'    =>  $user
                    ];
                    $num_elements++;
                }

                DB::beginTransaction();
                try {
                    Media::insert($image);
                    DB::commit();
                    return response()->json(['success'=> __('msg.successfully_done')]);
                } catch (Exception $e) {
                    DB::rollback();
                    return response()->json(['errors' => [__('msg.problem_try_again')]]);
                }    
            }
        }
        return response()->json(['errors' => ['No file found.']]);
    }

    public function destroy(Request $request)
    {
        DB::beginTransaction();
        try {
            /* set media_id null for other tables where media_id = $request->id */
            #BasicSetting
            BasicSetting::where([
                ['name','=','logo_id'],
                ['val','=',$request->id],
            ])->update(['val' => '']);
            BasicSetting::where([
                ['name','=','secondary_logo_id'],
                ['val','=',$request->id],
            ])->update(['val' => '']);
            BasicSetting::where([
                ['name','=','icon_id'],
                ['val','=',$request->id],
            ])->update(['val' => '']);

            $media = Media::find($request->id);
            $media->delete();
            DB::commit();
            return response()->json(['success'=> 'successfully deleted']);
        } catch (Exception $e) {
            DB::rollback();
            return response()->json(['errors' => [__('msg.problem_try_again')]]);
        }
    }
    
    public function translate()
    {
        $data = [
            'title'     =>  __('msg.media_library'),
            'lbl'       =>  __('msg.choose_files'),
            'btn'       =>  __('msg.upload'),
            'no_data'   =>  __('msg.no_data'),
            'use'       =>  __('msg.use'),
            'delete'    =>  __('msg.delete'),
        ];
        return array_merge($this->get_permissions(),$data);
    }
}
