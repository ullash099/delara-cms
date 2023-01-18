<?php

namespace App\Http\Controllers\profile;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Contracts\Auth\StatefulGuard;
use Illuminate\Validation\ValidationException;

class OtherBrowserSessionsController extends Controller
{
    public function destroy(Request $request, StatefulGuard $guard)
    {
        if (!Hash::check($request->password, $request->user()->password)) {
            /* throw ValidationException::withMessages([
                'password' => [__('This password does not match our records.')],
            ])->errorBag('logoutOtherBrowserSessions'); */
            return response()->json(['errors' => [__('This password does not match our records.')]]);
        }
        try {
            $this->deleteOtherSessionRecords($request);
            return response()->json(['success' => 'successfully created']);
        } catch (Exception $e) {
            return response()->json(['errors' => ['there is a problem try again']]);
        }
    }

    protected function deleteOtherSessionRecords(Request $request)
    {
        if (config('session.driver') !== 'database') {
            return;
        }

        DB::table(config('session.table', 'sessions'))
            ->where('user_id', $request->user()->getKey())
            ->where('id', '!=', $request->session()->getId())
            ->delete();
        /* DB::table('oauth_access_tokens')
            ->where('user_id', $request->user()->getKey())
            ->delete(); */
    }
}
