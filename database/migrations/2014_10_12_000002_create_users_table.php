<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();

            $table->boolean('block')->default(false)->comment('0 (false) = active , 1(true) = blocked');
            $table->foreignId('role_id')->nullable()->constrained('roles');

            $table->string('default_lan')->default('en');
            
            //$table->foreignId('current_team_id')->nullable();
            $table->string('profile_photo_path', 2048)->nullable();

            $table->integer('created_by')->references('id')->on('users');
            $table->integer('updated_by')->nullable()->references('id')->on('users');
            $table->timestamps();
        });

        // Insert some stuff
        DB::table('users')->insert([
            [
                'name'              =>  'User',
                'email'             =>  'user@user.com',
                'email_verified_at' =>  now(),
                'password'          =>  '$2y$10$E.XWECQMHL1KJQXYMvWI9Od.Eo9XEkDTJ826tAw0q/gKQwwGD93Iy', #user@user.com
                'block'             =>  false,
                'role_id'           =>  1,
                'created_at'        =>  now(),
                'updated_at'        =>  now(),
                'created_by'        =>  '0'
            ],
            [
                'name'              =>  'Developer',
                'email'             =>  'developer@rowshansoft.com',
                'email_verified_at' =>  now(),
                'password'          =>  '$2y$10$S5sOVa5ExZ7sMDxFMvZKGeyPEnogrIsNV43CFefG5Y/LRDR/PPnnm', #developer@rowshansoft.com
                'block'             =>  false,
                'role_id'           =>  3,
                'created_at'        =>  now(),
                'updated_at'        =>  now(),
                'created_by'        =>  '0'
            ],
            [
                'name'              =>  'Admin',
                'email'             =>  'admin@admin.com',
                'email_verified_at' =>  now(),
                'password'          =>  '$2y$10$Ra1gm7.5KspMfuH6Ovc0nOToG1CKKCtnCBJXDwbYaX2MYY9tdyUJK', #admin@admin.com
                'block'             =>  false,
                'role_id'           =>  4,
                'created_at'        =>  now(),
                'updated_at'        =>  now(),
                'created_by'        =>  '0'
            ],
        ]);
    }

    public function down()
    {
        Schema::dropIfExists('users');
    }
};
