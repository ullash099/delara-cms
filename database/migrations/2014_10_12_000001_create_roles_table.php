<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{

    private $data  = [
        [
            'name'          =>  'Buyer',
            'permissions'   =>  '[1,2,3,4,5,50,90,95,96,97]',
            'created_by'    =>  '0'
        ],
        [
            'name'          =>  'Seller',
            'permissions'   =>  '[1,2,3,4,5,50,90,95,96,97]',
            'created_by'    =>  '0'
        ],
        [
            'name'          =>  'Administrator',
            'permissions'   =>  '[2,3,4,5,6,800,801,802,803,1000,1001,1002,1003]',
            'created_by'    =>  '0'
        ],
        [
            'name'          =>  'Admin',
            'permissions'   =>  '[2,3,4,5,6,800,801,802,803,1000,1001,1002,1003]',
            'created_by'    =>  '0'
        ],
    ];
    public function up()
    {
        Schema::create('roles', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
            $table->string('name_l')->nullable()->unique()->collation('utf16_general_ci');
            $table->text('permissions')->nullable();

            $table->integer('created_by')->references('id')->on('users');
            $table->integer('updated_by')->nullable()->references('id')->on('users');
            $table->integer('deleted_by')->nullable()->references('id')->on('users');

            $table->timestamps();
            $table->softDeletes();
        });
        DB::table('roles')->insert($this->data);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('roles');
    }
};
