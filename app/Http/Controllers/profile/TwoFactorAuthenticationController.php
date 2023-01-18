<?php

namespace App\Http\Controllers\profile;

use Exception;
use Illuminate\Http\Request;
use Laravel\Fortify\Features;
use App\Http\Controllers\Controller;
use Laravel\Fortify\Actions\GenerateNewRecoveryCodes;
use Laravel\Fortify\Actions\EnableTwoFactorAuthentication;
use Laravel\Fortify\Actions\DisableTwoFactorAuthentication;

class TwoFactorAuthenticationController extends Controller
{
    public function index(Request $request)
    {
        $twoFactor['is_two_factor_available'] = false;
        if (Features::canManageTwoFactorAuthentication()) {
            $two_factor_secret = $request->user()->two_factor_secret;
            $two_factor_recovery_codes = $request->user()->two_factor_recovery_codes;

            $twoFactor['is_two_factor_available'] = true;
            $twoFactor['two_factor_secret'] = $two_factor_secret;

            if (!empty($two_factor_secret)) {
                $twoFactor['two_factor_svg'] = $request->user()->twoFactorQrCodeSvg();

                if (!empty($two_factor_recovery_codes)) {
                    $recovery_codes = [];
                    foreach (json_decode(decrypt($two_factor_recovery_codes), true) as $code) {
                        array_push($recovery_codes, $code);
                    }
                    $twoFactor['two_factor_recovery_codes'] = $recovery_codes;
                }
            }
        }
        return response()->json(['two_factor' => (object)$twoFactor]);
    }

    public function store(Request $request, EnableTwoFactorAuthentication $enable)
    {
        try {
            $enable($request->user());
            return response()->json(['success' => 'successfully created']);
        } catch (Exception $e) {
            return response()->json(['errors' => ['there is a problem try again']]);
        }
    }

    public function destroy(Request $request, DisableTwoFactorAuthentication $disable)
    {
        try {
            $disable($request->user());
            return response()->json(['success' => 'successfully created']);
        } catch (Exception $e) {
            return response()->json(['errors' => ['there is a problem try again']]);
        }
    }

    public function regenerate(Request $request, GenerateNewRecoveryCodes $generate)
    {
        try {
            $generate($request->user());
            return response()->json(['success' => 'successfully created']);
        } catch (Exception $e) {
            return response()->json(['errors' => ['there is a problem try again']]);
        }
    }
}
