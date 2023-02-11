<?php

namespace App\Models;

use App\Models\Color;
#use App\Models\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Product extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $dates = ['deleted_at'];

    protected $fillable = ['name','name_l','description','description_l','brand_id',
                            'color_id','model_id','tag_id','size_id','category_id',
                           'sku','slug','quantity','weight','price','sale_price','status',
                           'featured','media_id','created_by','updated_by','deleted_by'];

    
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
    
}
