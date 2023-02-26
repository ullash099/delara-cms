<?php

namespace App\Models;

use App\Models\Tag;
#use App\Models\Model;
use App\Models\Color;
use App\Models\Media;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Product extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $dates = ['deleted_at'];

    protected $fillable = ['name','name_l','description','description_l','brand_id',
                           'color_id','is_downloadable','is_maintain_stock','stock_qty',
                           'alert_qty','min_order','prodact_model_id','tag_id','size_id',
                           'category_id','sku','slug','quantity','weight','price',
                           'selling_price','media_id','created_by','updated_by','deleted_by'
                          ];

    public function media()
    {
        return $this->belongsTo(Media::class);
    }
    public function color()
    {
        return $this->belongsToMany(Color::class);
    }

    public function model()
    {
        return $this->belongsTo(Model::class);
    }

    public function brand()
    {
        return $this->belongsToMany(Brand::class);
    }

    public function tags()
    {
        return $this->morphToMany(Tag::class,'taggable');
    }

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
