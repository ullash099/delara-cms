<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    private $data = [
        /* [
            'id'        =>  1,
            'parent'    =>  null,
            'type'      =>  'admin',
            'name'      =>  'Handel All Branch',
            'name_l'    =>  'হ্যান্ডেল সকল শাখা',
            'web'       =>  'discounts',
            'app'       =>  '',
            'web_icon'  =>  '',
            'app_icon'  =>  '',
        ], */
        [
            'id'        =>  2,
            'parent'    =>  null,
            'type'      =>  'all',
            'name'      =>  'Save / Update',
            'name_l'    =>  'সেভ / আপডেট ',
            'web'       =>  '',
            'app'       =>  '',
            'web_icon'  =>  '',
            'app_icon'  =>  '',
        ],
        [
            'id'        =>  3,
            'parent'    =>  null,
            'type'      =>  'all',
            'name'      =>  'Block / Unblock',
            'name_l'    =>  'ব্লক / আনব্লক',
            'web'       =>  '',
            'app'       =>  '',
            'web_icon'  =>  '',
            'app_icon'  =>  '',
        ],
        [
            'id'        =>  4,
            'parent'    =>  null,
            'type'      =>  'all',
            'name'      =>  'Delete',
            'name_l'    =>  'ডিলিট',
            'web'       =>  '',
            'app'       =>  '',
            'web_icon'  =>  '',
            'app_icon'  =>  '',
        ],
        [
            'id'        =>  5,
            'parent'    =>  null,
            'type'      =>  'admin',
            'name'      =>  'Can Publish',
            'name_l'    =>  'পাবলিশ করতে পারবে',
            'web'       =>  'dashboard',
            'app'       =>  '',
            'web_icon'  =>  'uil uil-home-alt',
            'app_icon'  =>  '',
        ],
        [
            'id'        =>  6,
            'parent'    =>  null,
            'type'      =>  'admin',
            'name'      =>  'Dashboard',
            'name_l'    =>  'ড্যাশবোর্ড',
            'web'       =>  'dashboard',
            'app'       =>  '',
            'web_icon'  =>  'uil uil-home-alt',
            'app_icon'  =>  '',
        ],

        #ecommerce
        [
            'id'        => 700,
            'parent'    => null,
            'type'      => 'admin',
            'name'      => 'E-commerce',
            'name_l'    => 'ই-কমার্স',
            'web'       => 'ecommerce',
            'app'       => '',
            'web_icon'  => 'uil-file-blank',
            'app_icon'  => ''
        ],
        [
            'id'        => 701,
            'parent'    => 700,
            'type'      => 'admin',
            'name'      => 'Category',
            'name_l'    => 'ক্যাটাগরি',
            'web'       => 'e-categories',
            'app'       => '',
            'web_icon'  => '',
            'app_icon'  => ''
        ],

        #blog
        [
            'id'        =>  800,
            'parent'    =>  null,
            'type'      =>  'admin',
            'name'      =>  'Blog',
            'name_l'    =>  'ব্লগ',
            'web'       =>  'blog',
            'app'       =>  '',
            'web_icon'  =>  'uil-file-blank',
            'app_icon'  =>  '',
        ],
        [
            'id'        =>  801,
            'parent'    =>  800,
            'type'      =>  'admin',
            'name'      =>  'Category',
            'name_l'    =>  'ক্যাটাগরি',
            'web'       =>  'categories',
            'app'       =>  '',
            'web_icon'  =>  '',
            'app_icon'  =>  '',
        ],
        [
            'id'        =>  802,
            'parent'    =>  800,
            'type'      =>  'admin',
            'name'      =>  'Tag',
            'name_l'    =>  'পোস্ট',
            'web'       =>  'tags',
            'app'       =>  '',
            'web_icon'  =>  '',
            'app_icon'  =>  '',
        ],
        [
            'id'        =>  803,
            'parent'    =>  800,
            'type'      =>  'admin',
            'name'      =>  'Post',
            'name_l'    =>  'পোস্ট',
            'web'       =>  'posts',
            'app'       =>  '',
            'web_icon'  =>  '',
            'app_icon'  =>  '',
        ],

        #cms
        [
            'id'        =>  900,
            'parent'    =>  null,
            'type'      =>  'admin',
            'name'      =>  'CMS',
            'name_l'    =>  'সিএমএস',
            'web'       =>  'cms',
            'app'       =>  '',
            'web_icon'  =>  'uil uil-layer-group',
            'app_icon'  =>  '',
        ],
        [
            'id'        =>  901,
            'parent'    =>  900,
            'name'      =>  'components',
            'name_l'    =>  'কম্পোনেন্ট ',
            'type'      =>  'admin',
            'web'       =>  'cms.components',
            'app'       =>  '',
            'web_icon'  =>  '',
            'app_icon'  =>  '',
        ],
        
        #Settings start
        [
            'id'        =>  1000,
            'parent'    =>  null,
            'type'      =>  'admin',
            'name'      =>  'Website Settings',
            'name_l'    =>  'ওয়েবসাইট সেটিংস',
            'web'       =>  'website-settings',
            'app'       =>  '',
            'web_icon'  =>  'uil uil-window',
            'app_icon'  =>  '',
        ],
        [
            'id'        =>  1001,
            'parent'    =>  null,
            'type'      =>  'admin',
            'name'      =>  'User\'s Settings',
            'name_l'    =>  'ব্যবহারকারীদের সেটিংস',
            'web'       =>  'user-settings',
            'app'       =>  '',
            'web_icon'  =>  'uil uil-cog',
            'app_icon'  =>  '',
        ],
        [
            'id'        =>  1002,
            'parent'    =>  1001,
            'type'      =>  'admin',
            'name'      =>  'User Role',
            'name_l'    =>  'ব্যবহারকারীর ভূমিকা',
            'web'       =>  'roles',
            'app'       =>  '',
            'web_icon'  =>  '',
            'app_icon'  =>  '',
        ],
        [
            'id'        =>  1003,
            'parent'    =>  1001,
            'type'      =>  'admin',
            'name'      =>  'User\'s List',
            'name_l'    =>  'ব্যবহারকারীর তালিকা',
            'web'       =>  'users',
            'app'       =>  '',
            'web_icon'  =>  '',
            'app_icon'  =>  '',
        ],
    ];
    public function up()
    {
        Schema::create('menus', function (Blueprint $table) {
            $table->id();

            $table->integer('parent')->nullable();

            $table->string('name');
            $table->string('name_l')->nullable()->collation('utf16_general_ci');
            $table->enum('type',['website','admin','seller','buyer','all']);
            
            $table->string('web')->nullable();
            $table->string('web_icon')->nullable();
            $table->string('app')->nullable();
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
