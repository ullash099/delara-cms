<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SeoInfo extends Model
{
    use HasFactory;
    protected $fillable = [
        'title','description','keywords',
        'og_type','og_title','og_description','og_image','og_image_width','og_url','og_site_name',
        'twitter_card','twitter_title','twitter_description','twitter_image','twitter_domain','twitter_site',
        'created_by','updated_by'
    ];
}
