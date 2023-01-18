<?php

namespace App\Models\blog;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class BlogTags extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $dates    = ['deleted_at'];
    protected $fillable = [
        'name',
        'name_l',
        'created_by',
        'updated_by',
        'deleted_by'
    ];
}
