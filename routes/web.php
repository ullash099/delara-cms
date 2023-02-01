<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


Route::get('change-lang/{lang}', 'ChangeLangController@index')->name('change.lang');
Route::post('logout', 'AuthenticatedSessionController@destroy')->name('logout');


/* user routes should be call like this */
Route::middleware(['auth:sanctum',config('jetstream.auth_session'),'verified'])
->group(function () {
    Route::get('/my-account', function () {
        return view('dashboard');
    })->name('my.account');
});

/* admin routes should be call like this */
Route::middleware(['auth:sanctum',config('jetstream.auth_session'),'verified',
    'Blade'
])
->prefix('secure')
->group(function () {
    Route::get('/dashboard', function () {
        return view('dashboard');
    })->name('dashboard');
});
