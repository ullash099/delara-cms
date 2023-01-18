<?php

namespace App\Models\blog;

use App\Models\User;
use App\Models\Media;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class BlogCategory extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $dates    = ['deleted_at'];
    protected $fillable = [
        'name',
        'name_l',
        'slug',
        'slug_l',
        'parent_id',
        'media_id',
        'created_by',
        'updated_by'
    ];

    public function parent()
    {
        return $this->belongsTo(BlogCategory::class,'parent_id','id');
    }

    public function childs()
    {
        return $this->hasMany(BlogCategory::class,'id')->orderBy('id');
    }

    public function media()
    {
       return $this->belongsTo(Media::class);
    }

    /* public function posts()
    {
        return $this->hasMany(Post::class);
    } */

    public function created_by()
    {
        return $this->belongsTo(User::class,'created_by');
    }
    
    public function updated_by()
    {
        return $this->belongsTo(User::class,'updated_by');
    }
    
    public function deleted_by()
    {
        return $this->belongsTo(User::class,'deleted_by');
    }
}
