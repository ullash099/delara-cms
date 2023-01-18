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


Route::get('login', 'AuthenticatedSessionController@create');
Route::post('login', 'AuthenticatedSessionController@store')->name('login');
Route::post('logout', 'AuthenticatedSessionController@destroy');
Route::get('forgot-password', 'AuthenticatedSessionController@forgotPassword')->name('password.request');
Route::get('/email/verify/{id}/{hash}', 'VerifyEmailController@__invoke')->middleware(['signed', 'throttle:6,1'])->name('verification.verify');

Route::get('/', function () {
    return view('welcome');
});

Route::post('change-lang', 'ChangeLangController@index');

Route::group(['middleware' => ['auth:sanctum', config('jetstream.auth_session'), 'verified','web']], function () {
    Route::get('secure/{menu}/{submenu?}/{id?}', 'WebsiteController@admin')->name('admin.template');
    Route::get('{menu}/{submenu?}/{id?}', 'WebsiteController@index')->name('web.template');
});
