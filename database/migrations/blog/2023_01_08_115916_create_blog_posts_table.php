<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBlogPostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('blog_posts', function (Blueprint $table) {
            $table->id();

            $table->foreignId('category_id')->nullable()->constrained('blog_categories');
            $table->enum('visibility',['public','private'])->default('public');
            $table->date('publish_date')->nullable();
            $table->enum('status',['draft','publish'])->default('draft');

            $table->foreignId('featured_image_id')->nullable()->constrained('media');
            $table->foreignId('seo_id')->nullable()->constrained('seo_infos');

            $table->string('title',500)->unique()->collation('utf16_general_ci');
            $table->string('title_l',500)->nullable()->collation('utf16_general_ci');

            $table->string('slug',500)->unique()->collation('utf16_general_ci');
            $table->string('slug_l',500)->nullable()->collation('utf16_general_ci');

            $table->longText('description')->nullable()->collation('utf16_general_ci');
            $table->longText('description_l')->nullable()->collation('utf16_general_ci');

            $table->foreignId('created_by')->constrained('users');
            $table->foreignId('updated_by')->nullable()->constrained('users');
            $table->foreignId('deleted_by')->nullable()->constrained('users');

            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('blog_posts');
    }
}
