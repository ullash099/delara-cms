<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    use HasFactory;
    protected $fillable = [
        'parent','is_caption',
        'type',
        'name','name_l',
        'route_name','web_icon',
        'app_url','app_icon'
    ];

    public function parent()
    {
        return $this->belongsTo(Menu::class,'parent','id');
    }

    public function childs()
    {
        return $this->hasMany(Menu::class,'parent','id')->orderBy('id');
    }
}
