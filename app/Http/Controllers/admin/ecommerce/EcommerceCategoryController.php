<?php

namespace App\Http\Controllers\admin\ecommerce;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class EcommerceCategoryController extends Controller
{
    public function __construct()
    {
    }

    public function index ()
    {
        return response()->json([
            'page'      => $this->translate()
        ]);
    }

    public function translate()
    {
        $data = [
            'list_card_title'       => __('msg.list_category'),
            'form_card_title'       => __('msg.category').__('msg.information'),
        ];
        return array_merge($this->get_permissions(),$data);
    }
}
