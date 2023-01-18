<?php
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['middleware' => ['auth:sanctum', config('jetstream.auth_session'), 'verified']], function () {
    Route::get('user/get-token', 'profile\UserProfileController@token');
    Route::get('user/get-info', 'profile\UserProfileController@index');
});
