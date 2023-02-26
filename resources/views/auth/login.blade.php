@extends('layouts.guest')
@section('content')
    <section class="vh-xxl-100 mt-5">
        <div class="container h-100 d-flex px-0 px-sm-4">
            <div class="row justify-content-center align-items-center m-auto">
                <div class="col-12">
                    <div class="bg-mode shadow rounded-3 overflow-hidden">
                        <div class="row g-0">
                            <!-- Vector Image -->
                            <div class="col-lg-6 d-flex align-items-center order-2 order-lg-1">
                                <div class="p-3 p-lg-5">
                                    <img src="{{ asset('images/signin.svg') }}" alt="">
                                </div>
                                <!-- Divider -->
                                <div class="vr opacity-1 d-none d-lg-block"></div>
                            </div>
            
                            <!-- Information -->
                            <div class="col-lg-6 order-1">
                                <div class="p-4 p-sm-7">
                                    <!-- Logo -->
                                    <a href="index.html">
                                        <img class="h-50px mb-4" src="{{ asset('images/logo-icon.svg') }}" alt="logo">
                                    </a> 
                                    <h1 class="mb-2 h3">Welcome back</h1>
                                    <p class="mb-0">New here?<a href="sign-up.html"> Create an account</a></p>
            
                                    <form class="mt-4 text-start" method="POST" action="{{ route('login') }}">
                                        @csrf
                                        <!-- Email -->
                                        <div class="mb-3">
                                            <label class="form-label">Enter email id</label>
                                            <input class="form-control" type="email" name="email" value="{{ old('email') }}" required autofocus>
                                        </div>
                                        <!-- Password -->
                                        <div class="mb-3 position-relative">
                                            <label class="form-label">Enter password</label>
                                            <input class="form-control fakepassword" id="psw-input" type="password" name="password" required autocomplete="current-password">
                                            <span class="position-absolute top-50 end-0 translate-middle-y p-0 mt-3">
                                                <i class="fakepasswordicon fas fa-eye-slash cursor-pointer p-2"></i>
                                            </span>
                                        </div>
                                        <!-- Remember me -->
                                        <div class="mb-3 d-sm-flex justify-content-between">
                                            <div>
                                                <input type="checkbox" class="form-check-input" id="rememberCheck" name="remember">
                                                <label class="form-check-label" for="rememberCheck">Remember me?</label>
                                            </div>
                                            <a href="{{ route('password.request') }}">Forgot password?</a>
                                        </div>
                                        <!-- Button -->
                                        <div><button type="submit" class="btn btn-primary w-100 mb-0">Login</button></div>
        
                                    </form>
                                    <!-- Form END -->
                                </div>		
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>
@endsection
