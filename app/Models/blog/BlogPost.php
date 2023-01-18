<?php

namespace App\Models\blog;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class BlogPost extends Model
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
}
