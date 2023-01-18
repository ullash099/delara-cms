<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Category extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $dates    = ['deleted_at'];
    protected $fillable = [
        'type',
        'name',
        'name_l',
        'slug',
        'slug_l',
        'parent_id',
        'media_id',
        'created_by',
        'updated_by',
        'deleted_by'
    ];

    public function parent()
    {
        return $this->belongsTo(Category::class,'parent_id','id');
    }

    public function childs()
    {
        return $this->hasMany(BlogCategory::class,'id')->orderBy('id');
    }

    public function media()
    {
       return $this->belongsTo(Media::class);
    }
}
