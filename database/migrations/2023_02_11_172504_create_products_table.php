<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name')->collation('utf16_general_ci');
            $table->string('name_l')->collation('utf16_general_ci');
            $table->string('slug')->unique();
            $table->string('description')->collation('utf16_general_ci');
            $table->string('description_l')->collation('utf16_general_ci');
            $table->boolean('is_downloadable')->default(false);
            $table->boolean('is_maintain_stock')->default(true);
            $table->float('stock_qty',12,4)->default(0);
            $table->float('alert_qty',12,4)->default(0);
            $table->integer('min_order')->default(0);
            $table->integer('sku')->unique();
            $table->float('price',12,4);
            $table->float('selling_price',12,4);

            $table->foreignId('category_id')->constrained('categories');
            $table->foreignId('brand_id')->constrained('brands');
            $table->foreignId('color_id')->constrained('colors');
            $table->foreignId('prodact_model_id')->constrained('product_models');
            $table->foreignId('tag_id')->constrained('tags');
            $table->foreignId('size_id')->constrained('sizes');


            $table->foreignId('created_by')->constrained('users');
            $table->foreignId('updated_by')->nullable()->constrained('users');
            $table->foreignId('deleted_by')->nullable()->constrained('users');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
