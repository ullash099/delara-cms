<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BasicSetting extends Model
{
    use HasFactory;
    protected $fillable = [
        'name', 'val',
        'created_by','updated_by'
    ];

    public static function primary_logo()
    {
        $logo_info = BasicSetting::select('val')->where('name','logo_id')->first();
        if (!empty($logo_info) && !empty($logo_info->val)) {
            $media = Media::where('id',$logo_info->val)->first();
            return $media->attachment;
        }
        return null;
    }

    public static function secondary_logo()
    {
        $logo_info = BasicSetting::select('val')->where('name','secondary_logo_id')->first();
        if (!empty($logo_info) && !empty($logo_info->val)) {
            $media = Media::where('id',$logo_info->val)->first();
            return $media->attachment;
        }
        return null;
    }
    
    public static function icon()
    {
        $logo_info = BasicSetting::select('val')->where('name','icon_id')->first();
        if (!empty($logo_info) && !empty($logo_info->val)) {
            $media = Media::where('id',$logo_info->val)->first();
            return $media->attachment;
        }
        return null;
    }
}
