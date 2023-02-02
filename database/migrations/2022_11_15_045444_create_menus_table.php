<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    private $data = [
        [
            'id'        =>  1,
            'parent'    =>  null,
            'is_caption'=>  false,
            'type'      =>  'all',
            'name'      =>  'Save / Update',
            'name_l'    =>  'সেভ / আপডেট ',
            'route_name'=>  '',
            'app_url'   =>  '',
            'web_icon'  =>  '',
            'app_icon'  =>  '',
        ],
        [
            'id'        =>  2,
            'parent'    =>  null,
            'is_caption'=>  false,
            'type'      =>  'all',
            'name'      =>  'Block / Unblock',
            'name_l'    =>  'ব্লক / আনব্লক',
            'route_name'=>  '',
            'app_url'   =>  '',
            'web_icon'  =>  '',
            'app_icon'  =>  '',
        ],
        [
            'id'        =>  3,
            'parent'    =>  null,
            'is_caption'=>  false,
            'type'      =>  'all',
            'name'      =>  'Delete',
            'name_l'    =>  'ডিলিট',
            'route_name'=>  '',
            'app_url'   =>  '',
            'web_icon'  =>  '',
            'app_icon'  =>  '',
        ],
        [
            'id'        =>  6,
            'parent'    =>  null,
            'is_caption'=>  false,
            'type'      =>  'admin',
            'name'      =>  'Can Publish',
            'name_l'    =>  'পাবলিশ করতে পারবে',
            'route_name'=>  'dashboard',
            'app_url'   =>  '',
            'web_icon'  =>  'uil uil-home-alt',
            'app_icon'  =>  '',
        ],
        [
            'id'        =>  7,
            'parent'    =>  null,
            'is_caption'=>  false,
            'type'      =>  'admin',
            'name'      =>  'Dashboard',
            'name_l'    =>  'ড্যাশবোর্ড',
            'route_name'=>  'dashboard',
            'app_url'   =>  '',
            'web_icon'  =>  'uil uil-home-alt',
            'app_icon'  =>  '',
        ],

        #ecommerce
        [
            'id'        =>  700,
            'parent'    =>  null,
            'is_caption'=>  true,
            'type'      => 'admin',
            'name'      => 'E-commerce',
            'name_l'    => 'ই-কমার্স',
            'route_name'=> 'ecommerce',
            'app_url'   => '',
            'web_icon'  => 'uil-file-blank',
            'app_icon'  => ''
        ],
        [
            'id'        => 701,
            'parent'    => 700,
            'is_caption'=>  false,
            'type'      => 'admin',
            'name'      => 'Category',
            'name_l'    => 'ক্যাটাগরি',
            'route_name'=> 'categories',
            'app_url'   => '',
            'web_icon'  => '',
            'app_icon'  => ''
        ],
        [
            'id'        => 702,
            'parent'    => 700,
            'is_caption'=>  false,
            'type'      => 'admin',
            'name'      => 'Tag',
            'name_l'    => 'ট্যাগ',
            'route_name'=> 'tags',
            'app_url'   => '',
            'web_icon'  => '',
            'app_icon'  => ''
        ],

        #blog
        /* [
            'id'        =>  800,
            'parent'    =>  null,
            'type'      =>  'admin',
            'name'      =>  'Blog',
            'name_l'    =>  'ব্লগ',
            'route_name'       =>  'blog',
            'app_url'       =>  '',
            'web_icon'  =>  'uil-file-blank',
            'app_icon'  =>  '',
        ],
        [
            'id'        =>  801,
            'parent'    =>  800,
            'type'      =>  'admin',
            'name'      =>  'Category',
            'name_l'    =>  'ক্যাটাগরি',
            'route_name'       =>  'categories',
            'app_url'       =>  '',
            'web_icon'  =>  '',
            'app_icon'  =>  '',
        ],
        [
            'id'        =>  802,
            'parent'    =>  800,
            'type'      =>  'admin',
            'name'      =>  'Tag',
            'name_l'    =>  'পোস্ট',
            'route_name'       =>  'tags',
            'app_url'       =>  '',
            'web_icon'  =>  '',
            'app_icon'  =>  '',
        ],
        [
            'id'        =>  803,
            'parent'    =>  800,
            'type'      =>  'admin',
            'name'      =>  'Post',
            'name_l'    =>  'পোস্ট',
            'route_name'       =>  'posts',
            'app_url'       =>  '',
            'web_icon'  =>  '',
            'app_icon'  =>  '',
        ], */

        #cms
        /* [
            'id'        =>  900,
            'parent'    =>  null,
            'type'      =>  'admin',
            'name'      =>  'CMS',
            'name_l'    =>  'সিএমএস',
            'route_name'       =>  'cms',
            'app_url'       =>  '',
            'web_icon'  =>  'uil uil-layer-group',
            'app_icon'  =>  '',
        ],
        [
            'id'        =>  901,
            'parent'    =>  900,
            'name'      =>  'components',
            'name_l'    =>  'কম্পোনেন্ট ',
            'type'      =>  'admin',
            'route_name'       =>  'cms.components',
            'app_url'       =>  '',
            'web_icon'  =>  '',
            'app_icon'  =>  '',
        ], */
        
        #Settings start
        [
            'id'        =>  1000,
            'parent'    =>  null,
            'is_caption'=>  false,
            'type'      =>  'admin',
            'name'      =>  'Website Settings',
            'name_l'    =>  'ওয়েবসাইট সেটিংস',
            'route_name'=>  'website-settings',
            'app_url'   =>  '',
            'web_icon'  =>  'uil uil-window',
            'app_icon'  =>  '',
        ],
        [
            'id'        =>  1001,
            'parent'    =>  null,
            'is_caption'=>  true,
            'type'      =>  'admin',
            'name'      =>  'User\'s Settings',
            'name_l'    =>  'ব্যবহারকারীদের সেটিংস',
            'route_name'=>  'user-settings',
            'app_url'   =>  '',
            'web_icon'  =>  '',
            'app_icon'  =>  '',
        ],
        [
            'id'        =>  1002,
            'parent'    =>  1001,
            'is_caption'=>  false,
            'type'      =>  'admin',
            'name'      =>  'User Role',
            'name_l'    =>  'ব্যবহারকারীর ভূমিকা',
            'route_name'=>  'roles',
            'app_url'   =>  '',
            'web_icon'  =>  'uil uil-cog',
            'app_icon'  =>  '',
        ],
        [
            'id'        =>  1003,
            'parent'    =>  1001,
            'is_caption'=>  false,
            'type'      =>  'admin',
            'name'      =>  'User\'s List',
            'name_l'    =>  'ব্যবহারকারীর তালিকা',
            'route_name'=>  'users',
            'app_url'   =>  '', 
            'web_icon'  =>  'uil uil-cog',
            'app_icon'  =>  '',
        ],
    ];
    public function up()
    {
        Schema::create('menus', function (Blueprint $table) {
            $table->id();
            $table->integer('parent')->nullable();
            $table->boolean('is_caption')->default(false);
            $table->enum('type',['website','admin','seller','buyer','all']);

            $table->string('name');
            $table->string('name_l')->nullable()->collation('utf16_general_ci');
            
            $table->string('route_name')->nullable();
            $table->string('web_icon')->nullable();
            $table->string('app_url')->nullable();
            $table->string('app_icon')->nullable();

            $table->string('note')->nullable();
            $table->string('note_l')->nullable();

            $table->timestamps();
        });
        DB::table('menus')->insert($this->data);

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('menus');
    }
};
