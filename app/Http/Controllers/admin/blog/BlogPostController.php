<?php

namespace App\Http\Controllers\admin\blog;

use Illuminate\Http\Request;
use App\Models\blog\BlogPost;
use App\Models\blog\BlogCategory;
use App\Http\Controllers\Controller;

class BlogPostController extends Controller
{
    public function __construct()
    {
    }
    
    public function index()
    {
        $src = $_GET['src'] ?? null;
        if (!empty($src)) {
            $datatable = BlogPost::where(function ($q) use ($src) {
                $q->where('name', 'like', '%' . $src . '%')
                    ->orWhere('name_l', 'like', '%' . $src . '%');
            })->with('parent')->withTrashed()->latest()->paginate(25);
        } else {
            $datatable = BlogPost::with('parent')->withTrashed()->latest()->paginate(25);
        }

        return response()->json([
            'categories'    =>  BlogCategory::with('childs'),
            'page'          =>  $this->translate(),
            'datatable'     =>  $datatable
        ]);
    }
}
