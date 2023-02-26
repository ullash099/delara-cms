<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCategoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('categories', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique()->collation('utf16_general_ci');
            $table->string('name-l')->unique()->nullable()->collation('utf16_general_ci');
            $table->string('slug')->unique();
            $table->foreignId('media_id')->nullable()->constrained('media');
            $table->string('description')->nullable()->collation('utf16_general_ci');
            $table->string('description_l')->nullable()->collation('utf16_general_ci');
            $table->unsignedBigInteger('parent_id')->default(1)->comment('uncategorized');
            $table->boolean('featured')->default(0)->comment('true or false, if true then show in featered category');

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
        Schema::dropIfExists('categories');
    }
}
