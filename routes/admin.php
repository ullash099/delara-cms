<?php
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => ['auth:sanctum', config('jetstream.auth_session'), 'verified']], function () {

    Route::get('user/startup-data', 'profile\UserProfileController@StartUpData');
    Route::post('user/update-profile', 'profile\UserProfileController@updateProfile');
    Route::post('user/update-password', 'profile\UserProfileController@updatePassword');
    Route::get('user/two-factor-authentication-info', 'profile\TwoFactorAuthenticationController@index');
    Route::post('user/two-factor-authentication', 'profile\TwoFactorAuthenticationController@store');
    Route::post('user/delete-two-factor-authentication', 'profile\TwoFactorAuthenticationController@destroy');
    Route::post('user/two-factor-recovery-codes', 'profile\TwoFactorAuthenticationController@regenerate');
    Route::get('user/get-sessions', 'profile\UserProfileController@BrowserSessions');
    Route::post('user/other-browser-sessions', 'profile\OtherBrowserSessionsController@destroy');

    #roles
    Route::get('get-roles', 'admin\usersettings\RoleSettingsController@index')->middleware('permission:1001|1002,api');
    Route::get('get-menus', 'admin\usersettings\RoleSettingsController@menus')->middleware('permission:1001|1002,api');
    Route::post('save-role', 'admin\usersettings\RoleSettingsController@store')->middleware('permission:2|1001|1002,api');
    Route::post('block-role', 'admin\usersettings\RoleSettingsController@block')->middleware('permission:3|1001|1002,api');
    Route::post('unblock-role', 'admin\usersettings\RoleSettingsController@unblock')->middleware('permission:3|1001|1002,api');

    #user
    Route::get('get-users', 'admin\usersettings\UserSettingsController@index')->middleware('permission:1001|1003,api');
    Route::post('save-user', 'admin\usersettings\UserSettingsController@save')->middleware('permission:2|1001|1003,api');
    Route::post('block-user', 'admin\usersettings\UserSettingsController@block')->middleware('permission:3|1001|1003,api');
    Route::post('unblock-user', 'admin\usersettings\UserSettingsController@unblock')->middleware('permission:3|1001|1003,api');
    Route::post('manually-confirm-user-email', 'admin\usersettings\UserSettingsController@manuallyConfirmEmail');

    #upload files
    Route::get('get-media-libraries','admin\settings\MediaController@index');
    Route::post('upload-medias','admin\settings\MediaController@store');
    Route::post('delete-media','admin\settings\MediaController@destroy');

    #settings
    Route::get('get-website-settings', 'admin\settings\WebsiteSettingsController@index')->middleware('permission:1000,api');
    Route::post('save-website-settings', 'admin\settings\WebsiteSettingsController@store')->middleware('permission:2|1000,api');

    #blog
    Route::get('get-blog-categories', 'admin\blog\BlogCategoryController@index')->middleware('permission:800|801,api');
    Route::post('save-blog-category', 'admin\blog\BlogCategoryController@store')->middleware('permission:2|800|801,api');
    Route::post('block-blog-category', 'admin\blog\BlogCategoryController@block')->middleware('permission:3|800|801,api');
    Route::post('unblock-blog-category', 'admin\blog\BlogCategoryController@unblock')->middleware('permission:3|800|801,api');
    
    Route::get('get-blog-tags', 'admin\blog\BlogTagController@index')->middleware('permission:800|802,api');
    Route::post('save-blog-tag', 'admin\blog\BlogTagController@store')->middleware('permission:2|800|802,api');
    Route::post('block-blog-tag', 'admin\blog\BlogTagController@block')->middleware('permission:3|800|802,api');
    Route::post('unblock-blog-tag', 'admin\blog\BlogTagController@unblock')->middleware('permission:3|800|802,api');
    
    Route::get('get-blogs', 'admin\blog\BlogPostController@index')->middleware('permission:800|803,api');
    Route::post('save-blog', 'admin\blog\BlogPostController@store')->middleware('permission:2|800|803,api');
    Route::post('block-blog', 'admin\blog\BlogPostController@block')->middleware('permission:3|800|803,api');
    Route::post('unblock-blog', 'admin\blog\BlogPostController@unblock')->middleware('permission:3|800|803,api');
    
});