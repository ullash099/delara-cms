<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSeoInfosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('seo_infos', function (Blueprint $table) {
            $table->id();
            
            $table->string('title',255)->nullable()->collation('utf16_general_ci');
            $table->string('description',255)->nullable()->collation('utf16_general_ci');
            $table->string('keywords',1000)->nullable()->collation('utf16_general_ci');

            #$table->string('og_type')->nullable()->collation('utf16_general_ci');
            $table->string('og_title')->nullable()->collation('utf16_general_ci');
            $table->string('og_description')->nullable()->collation('utf16_general_ci');
            $table->string('og_image',1000)->nullable()->collation('utf16_general_ci');
            #$table->string('og_image_width')->nullable()->collation('utf16_general_ci');
            #$table->string('og_url')->nullable()->collation('utf16_general_ci');
            #$table->string('og_site_name')->nullable()->collation('utf16_general_ci');

            #$table->string('twitter_card')->nullable()->collation('utf16_general_ci');
            $table->string('twitter_title',255)->nullable()->collation('utf16_general_ci');
            $table->string('twitter_description',1000)->nullable()->collation('utf16_general_ci');
            $table->string('twitter_image',1000)->nullable()->collation('utf16_general_ci');
            #$table->string('twitter_domain')->nullable()->collation('utf16_general_ci');
            #$table->string('twitter_site')->nullable()->collation('utf16_general_ci');
            $table->foreignId('created_by')->constrained('users');
            $table->foreignId('updated_by')->nullable()->constrained('users');

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
        Schema::dropIfExists('seo_infos');
    }
}
