@extends('layouts.guest')
@section('content')
<main>
    <section class="pt-0">
        {{-- Background and title --}}
        <div class="container-fluid" style="background-image:url({{ asset('images/bg/01.jpg') }}); background-position: center left; background-size: cover;">
            <div class="row">
                {{-- Title --}}
                <div class="col-md-6 mx-auto text-center pt-7 pb-9">
                    <h1 class="text-white">Hotel, cab, flight & tour experience</h1>
                    <p class="lead text-white mb-0">Get the best prices on 2,000,000+ properties, worldwide</p>
                </div>
            </div> 
        </div>
    
        {{-- Search START --}}
        <div class="container mt-n8">
            <div class="row">
                {{-- Tabs START --}}
                <div class="col-11 col-lg-8 col-xl-6 mx-auto">
                    <ul class="nav nav-tabs nav-bottom-line nav-justified nav-responsive bg-mode rounded-top z-index-9 position-relative pt-2 pb-0 px-4">
                        <li class="nav-item"> 
                            <a class="nav-link mb-0 active" data-bs-toggle="tab" href="#tab-1-1"><i class="fa-solid fa-hotel fa-fw me-2"></i>Hotel</a> 
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mb-0" data-bs-toggle="tab" href="#tab-1-2"><i class="fa-solid fa-plane fa-fw me-2"></i>Flight</a> 
                            </li>
                        <li class="nav-item"> 
                            <a class="nav-link mb-0" data-bs-toggle="tab" href="#tab-1-3"><i class="fa-solid fa-globe-americas fa-fw me-2"></i>Tour</a> 
                        </li>
                        <li class="nav-item"> 
                            <a class="nav-link mb-0" data-bs-toggle="tab" href="#tab-1-4"><i class="fa-solid fa-car fa-fw me-2"></i>Cabs</a> 
                        </li>
                    </ul>
                </div>
                {{-- Tabs END --}}
    
                {{-- Tab content START --}}
                <div class="col-12">
                    <div class="tab-content" id="nav-tabContent">
                        
                        {{-- Tab content item START --}}
                        <div class="tab-pane fade show active" id="tab-1-1">
                            <form class="card shadow p-0">
                                {{-- Card header --}}
                                <div class="card-header p-4">
                                    <h5 class="mb-0"><i class="fa-solid fa-hotel fa-fw me-2"></i>Hotel Booking</h5>
                                </div>
    
                                {{-- Card body --}}
                                <div class="card-body p-4 pt-0">
                                    <div class="row g-4">
                                        {{-- Location --}}
                                        <div class="col-12">
                                            <div class="form-icon-input form-size-lg form-fs-lg">
                                                <select class="form-select js-choice" data-search-enabled="true">
                                                    <option value="">Search hotel</option>
                                                    <option>San Jacinto, USA</option>
                                                    <option>North Dakota, Canada</option>
                                                    <option>West Virginia, Paris</option>
                                                </select>
                                                <span class="form-icon"><i class="bi bi-search fs-5"></i></span>
                                            </div>
                                        </div>
                                        
                                        {{-- Guest --}}
                                        <div class="col-lg-4">
                                            <div class="form-icon-input form-fs-lg">
                                                <div class="dropdown guest-selector me-2">
                                                    <input type="text" class="form-guest-selector form-control form-control-lg selection-result" placeholder="Select occupant" data-bs-auto-close="outside" data-bs-toggle="dropdown">
                                                
                                                    {{-- dropdown items --}}
                                                    <ul class="dropdown-menu guest-selector-dropdown">
                                                        {{-- Adult --}}
                                                        <li class="d-flex justify-content-between">
                                                            <div>
                                                                <h6 class="mb-0">Adults</h6>
                                                                <small>Ages 13 or above</small>
                                                            </div>
            
                                                            <div class="hstack gap-1 align-items-center">
                                                                <button type="button" class="btn btn-link adult-remove p-0 mb-0"><i class="bi bi-dash-circle fs-5 fa-fw"></i></button>
                                                                <h6 class="guest-selector-count mb-0 adults">2</h6>
                                                                <button type="button" class="btn btn-link adult-add p-0 mb-0"><i class="bi bi-plus-circle fs-5 fa-fw"></i></button>
                                                            </div>
                                                        </li>
            
                                                        <li class="dropdown-divider"></li>
            
                                                        {{-- Child --}}
                                                        <li class="d-flex justify-content-between">
                                                            <div>
                                                                <h6 class="mb-0">Child</h6>
                                                                <small>Ages 13 below</small>
                                                            </div>
            
                                                            <div class="hstack gap-1 align-items-center">
                                                                <button type="button" class="btn btn-link child-remove p-0 mb-0" ><i class="bi bi-dash-circle fs-5 fa-fw"></i></button>
                                                                <h6 class="guest-selector-count mb-0 child">0</h6>
                                                                <button type="button" class="btn btn-link child-add p-0 mb-0" ><i class="bi bi-plus-circle fs-5 fa-fw"></i></button>
                                                            </div>
                                                        </li>
            
                                                        <li class="dropdown-divider"></li>
            
                                                        {{-- Rooms --}}
                                                        <li class="d-flex justify-content-between">
                                                            <div>
                                                                <h6 class="mb-0">Rooms</h6>
                                                                <small>Max room 8</small>
                                                            </div>
            
                                                            <div class="hstack gap-1 align-items-center">
                                                                <button type="button" class="btn btn-link room-remove p-0 mb-0" ><i class="bi bi-dash-circle fs-5 fa-fw"></i></button>
                                                                <h6 class="guest-selector-count mb-0 rooms">1</h6>
                                                                <button type="button" class="btn btn-link room-add p-0 mb-0" ><i class="bi bi-plus-circle fs-5 fa-fw"></i></button>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <span class="form-icon"><i class="bi bi-people fs-5"></i></span>
                                            </div>
                                        </div>
    
                                        {{-- Date --}}
                                        <div class="col-lg-4">
                                            <div class="form-icon-input form-fs-lg">
                                                <input type="text" class="form-control form-control-lg flatpickr" data-date-format="d/m/y" placeholder="Select check-in date">
                                                <span class="form-icon"><i class="bi bi-calendar fs-5"></i></span>
                                            </div>
                                        </div>
    
                                        {{-- Date --}}
                                        <div class="col-lg-4">
                                            <div class="form-icon-input form-fs-lg">
                                                <input type="text" class="form-control form-control-lg flatpickr" data-date-format="d/m/y" placeholder="Select check-out date">
                                                <span class="form-icon"><i class="bi bi-calendar fs-5"></i></span>
                                            </div>
                                        </div>
    
                                    </div> 
    
                                    {{-- Button --}}
                                    <div class="text-center pt-0">
                                        <a class="btn btn-lg btn-primary mb-n7" href="#">Search Hotel <i class="bi bi-arrow-right ps-3"></i></a>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {{-- Tab content item END --}}
    
                        {{-- Tab content item START --}}
                        <div class="tab-pane fade" id="tab-1-2">
                            <form class="card shadow p-0">
                                {{-- Card header --}}
                                <div class="card-header p-4">
                                    <div class="row g-4 align-items-center">
                                        {{-- Title --}}
                                        <div class="col-lg-4 col-xl-6">
                                            <h5 class="mb-0"><i class="fa-solid fa-plane fa-fw me-2"></i>Flight Booking</h5>
                                        </div>
                                        {{-- Radio tab --}}
                                        <div class="col-md-6 col-lg-4 col-xl-3 ms-auto">
                                            <div class="nav nav-pills" id="pills-tab" role="tablist">
                                                <div class="form-check form-check-inline active" id="flight-one-way-tab" data-bs-toggle="pill" data-bs-target="#flight-one-way" role="tab" aria-controls="flight-one-way" aria-selected="true">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked>
                                                    <label class="form-check-label" for="inlineRadio1">One Way</label>
                                                </div>
                                                <div class="form-check form-check-inline" id="flight-round-way-tab" data-bs-toggle="pill" data-bs-target="#flight-round-way" role="tab" aria-controls="flight-round-way" aria-selected="false">
                                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                                                    <label class="form-check-label" for="inlineRadio2">Round Trip</label>
                                                </div>
                                            </div>
                                        </div>
                                        {{-- Select --}}
                                        <div class="col-md-6 col-lg-4 col-xl-3 ms-auto">
                                            <div class="form-control-bg-light border rounded form-fs-md">
                                                <select class="form-select js-choice" aria-label=".form-select-sm">
                                                    <option value="">Select Class</option>
                                                    <option>Economy</option>
                                                    <option>Premium Economy</option>
                                                    <option>Business</option>
                                                    <option>First Class</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
    
                                {{-- Card body --}}
                                <div class="card-body p-4 pt-0">
                                    {{-- Tab content START --}}
                                    <div class="tab-content" id="pills-tabContent">
                                        {{-- One way tab START --}}
                                        <div class="tab-pane fade show active" id="flight-one-way" role="tabpanel" aria-labelledby="flight-one-way-tab">
                                            <div class="row g-4">
                                                {{-- From --}}
                                                <div class="col-md-6 position-relative">
                                                    <div class="form-icon-input form-size-lg form-fs-lg">
                                                        <select class="form-select js-choice" data-search-enabled="true">
                                                            <option value="">Flying from...</option>
                                                            <option>San Jacinto, USA</option>
                                                            <option>North Dakota, Canada</option>
                                                            <option>West Virginia, Paris</option>
                                                        </select>
                                                        <span class="form-icon"><i class="bi bi-geo-alt fs-5"></i></span>
                                                    </div>
    
                                                    {{-- Auto fill button --}}
                                                    <div class="btn-flip-icon z-index-9">
                                                        <button class="btn btn-dark shadow btn-round mb-0"><i class="fa-solid fa-right-left"></i></button>
                                                    </div>
                                                </div>
    
                                                {{-- To --}}
                                                <div class="col-md-6">
                                                    <div class="form-icon-input form-size-lg form-fs-lg">
                                                        <select class="form-select js-choice" data-search-enabled="true">
                                                            <option value="">Flying to...</option>
                                                            <option>San Jacinto, USA</option>
                                                            <option>North Dakota, Canada</option>
                                                            <option>West Virginia, Paris</option>
                                                        </select>
                                                        <span class="form-icon"><i class="bi bi-send fs-5"></i></span>
                                                    </div>
                                                </div>
    
                                                {{-- Date --}}
                                                <div class="col-md-6">
                                                    <div class="form-icon-input form-fs-lg">
                                                        <input type="text" class="form-control form-control-lg flatpickr" data-date-format="d/M/Y"  placeholder="Select check-in date">
                                                        <span class="form-icon"><i class="bi bi-calendar fs-5"></i></span>
                                                    </div>
                                                </div>
    
                                                {{-- Guest --}}
                                                <div class="col-md-6">
                                                    <div class="form-icon-input form-fs-lg">
                                                        <input type="text" class="form-control form-control-lg" placeholder="Select occupant">
                                                        <span class="form-icon"><i class="bi bi-people fs-5"></i></span>
                                                    </div>
                                                </div>
                                            </div>
    
                                            {{-- Button --}}
                                            <div class="text-center pt-0">
                                                <a class="btn btn-lg btn-primary mb-n7" href="#">Search Flight <i class="bi bi-arrow-right ps-3"></i></a>
                                            </div>
                                        </div>
                                        {{-- One way trip END --}}
    
                                        <!-- Round way tab START -->
                                        <div class="tab-pane fade" id="flight-round-way" role="tabpanel" aria-labelledby="flight-round-way-tab">
                                            {{-- One way trip START --}}
                                            <div class="row g-4">
                                                {{-- From --}}
                                                <div class="col-md-6 position-relative">
                                                    <div class="form-icon-input form-size-lg form-fs-lg">
                                                        <select class="form-select js-choice" data-search-enabled="true">
                                                            <option value="">Flying from...</option>
                                                            <option>San Jacinto, USA</option>
                                                            <option>North Dakota, Canada</option>
                                                            <option>West Virginia, Paris</option>
                                                        </select>
                                                        <span class="form-icon"><i class="bi bi-geo-alt fs-5"></i></span>
                                                    </div>
    
                                                    {{-- Auto fill button --}}
                                                    <div class="btn-flip-icon z-index-9">
                                                        <button class="btn btn-dark shadow btn-round mb-0"><i class="fa-solid fa-right-left"></i></button>
                                                    </div>
                                                </div>
    
                                                {{-- To --}}
                                                <div class="col-md-6">
                                                    <div class="form-icon-input form-size-lg form-fs-lg">
                                                        <select class="form-select js-choice" data-search-enabled="true">
                                                            <option value="">Flying to...</option>
                                                            <option>San Jacinto, USA</option>
                                                            <option>North Dakota, Canada</option>
                                                            <option>West Virginia, Paris</option>
                                                        </select>
                                                        <span class="form-icon"><i class="bi bi-send fs-5"></i></span>
                                                    </div>
                                                </div>
    
                                                {{-- Date --}}
                                                <div class="col-md-4">
                                                    <div class="form-icon-input form-fs-lg">
                                                        <input type="text" class="form-control form-control-lg flatpickr" data-date-format="d/M/Y" placeholder="Select check-in date">
                                                        <span class="form-icon"><i class="bi bi-calendar fs-5"></i></span>
                                                    </div>
                                                </div>
    
                                                {{-- Date --}}
                                                <div class="col-md-4">
                                                    <div class="form-icon-input form-fs-lg">
                                                        <input type="text" class="form-control form-control-lg flatpickr" data-date-format="d/M/Y" placeholder="Select check-out date">
                                                        <span class="form-icon"><i class="bi bi-calendar fs-5"></i></span>
                                                    </div>
                                                </div>
    
                                                {{-- Guest --}}
                                                <div class="col-md-4">
                                                    <div class="form-icon-input form-fs-lg">
                                                        <input type="text" class="form-control form-control-lg" placeholder="Select occupant">
                                                        <span class="form-icon"><i class="bi bi-people fs-5"></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                            {{-- Button --}}
                                            <div class="col-12 text-center pt-0">
                                                <a class="btn btn-lg btn-primary mb-n7" href="#">Search Flight <i class="bi bi-arrow-right ps-3"></i></a>
                                            </div>
                                            {{-- One way trip END --}}
                                        </div>
                                        {{-- Round way tab END --}}
                                    </div>
                                    {{-- Tab content END --}}
                                </div>	
                            </form>
                        </div>
                        {{-- Tab content item END --}}
    
                        {{-- Tab content item START --}}
                        <div class="tab-pane fade" id="tab-1-3">
                            <form class="card shadow p-0">
                                {{-- Card header --}}
                                <div class="card-header p-4">
                                    <h5 class="mb-0"><i class="fa-solid fa-globe-americas fa-fw me-2"></i>Tour Booking</h5>
                                </div>
    
                                {{-- Card body --}}
                                <div class="card-body p-4 pt-0">
                                    <div class="row g-4">
                                        {{-- Location --}}
                                        <div class="col-lg-4">
                                            <div class="form-icon-input form-size-lg form-fs-lg">
                                                <select class="form-select js-choice" data-search-enabled="true">
                                                    <option value="">Select tour location</option>
                                                    <option>San Jacinto, USA</option>
                                                    <option>North Dakota, Canada</option>
                                                    <option>West Virginia, Paris</option>
                                                </select>
                                                <span class="form-icon"><i class="bi bi-geo-alt fs-5"></i></span>
                                            </div>
                                        </div>
    
                                        {{-- Date --}}
                                        <div class="col-lg-4">
                                            <div class="form-icon-input form-fs-lg">
                                                <input type="text" class="form-control form-control-lg flatpickr" data-date-format="d/M/Y" placeholder="Select date">
                                                <span class="form-icon"><i class="bi bi-calendar fs-5"></i></span>
                                            </div>
                                        </div>
    
                                        {{-- Guest --}}
                                        <div class="col-lg-4">
                                            <div class="form-icon-input form-size-lg form-fs-lg">
                                                <select class="form-select js-choice" data-search-enabled="true">
                                                    <option value="">Select tour type</option>
                                                    <option>Adventure</option>
                                                    <option>Beach</option>
                                                    <option>Desert</option>
                                                    <option>History</option>
                                                </select>
                                                <span class="form-icon"><i class="fa-solid fa-person-skating fs-5"></i></span>
                                            </div>
                                        </div>
                                    </div>
    
                                    {{-- Button --}}
                                    <div class="text-center pt-0">
                                        <a class="btn btn-lg btn-primary mb-n7" href="#">Search Tour <i class="bi bi-arrow-right ps-3"></i></a>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {{-- Tab content item END --}}
    
                        {{--  Tab content item START --}}
                        <div class="tab-pane fade" id="tab-1-4">
                            <form class="card shadow p-0">
                                {{-- Card header --}}
                                <div class="card-header d-sm-flex justify-content-between align-items-center p-4">
                                    {{-- Title --}}
                                    <h5 class="mb-3 mb-sm-0"><i class="fa-solid fa-car fa-fw me-2"></i>Cab Booking</h5>
    
                                    {{-- Tabs --}}
                                    <ul class="nav nav-pills nav-pills-dark" id="pills-tab-2" role="tablist">
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link mb-0 rounded-start rounded-0 active" id="pills-one-way-2-tab" data-bs-toggle="pill" data-bs-target="#pills-one-way-2" type="button" role="tab" aria-selected="true">One Way</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link mb-0 rounded-end rounded-0" id="pills-round-way-2-tab" data-bs-toggle="pill" data-bs-target="#pills-round-way-2" type="button" role="tab" aria-selected="false">Road Trip</button>
                                        </li>
                                    </ul>
                                </div>
    
                                {{-- Card body --}}
                                <div class="card-body p-4 pt-0">
                                    {{--  Tab content START --}}
                                    <div class="tab-content" id="pills-tabContent3">
                                        {{--  One way tab START --}}
                                        <div class="tab-pane fade show active" id="pills-one-way-2" role="tabpanel" aria-labelledby="pills-one-way-2-tab">
                                            <div class="row g-4">
                                                {{-- Pickup --}}
                                                <div class="col-md-6 position-relative">
                                                    <div class="form-icon-input form-size-lg form-fs-lg">
                                                        <select class="form-select js-choice" data-search-enabled="true">
                                                            <option value="">Select pickup location</option>
                                                            <option>San Jacinto, USA</option>
                                                            <option>North Dakota, Canada</option>
                                                            <option>West Virginia, Paris</option>
                                                        </select>
                                                        <span class="form-icon"><i class="bi bi-geo-alt fs-5"></i></span>
                                                    </div>
    
                                                    {{-- Auto fill button --}}
                                                    <div class="btn-flip-icon z-index-9">
                                                        <button class="btn btn-white shadow btn-round mb-0"><i class="fa-solid fa-right-left"></i></button>
                                                    </div>
                                                </div>
    
                                                {{-- Drop --}}
                                                <div class="col-md-6">
                                                    <div class="form-icon-input form-size-lg form-fs-lg">
                                                        <select class="form-select js-choice" data-search-enabled="true">
                                                            <option value="">Select drop location</option>
                                                            <option>San Jacinto, USA</option>
                                                            <option>North Dakota, Canada</option>
                                                            <option>West Virginia, Paris</option>
                                                        </select>
                                                        <span class="form-icon"><i class="bi bi-geo-alt fs-5"></i></span>
                                                    </div>
                                                </div>
    
                                                {{-- Pickup date --}}
                                                <div class="col-md-6">
                                                    <div class="form-icon-input form-fs-lg">
                                                        <input type="text" class="form-control form-control-lg flatpickr" data-date-format="d/M/Y" placeholder="Select pickup date">
                                                        <span class="form-icon"><i class="bi bi-calendar fs-5"></i></span>
                                                    </div>
                                                </div>
    
                                                {{-- Pickup time --}}
                                                <div class="col-md-6">
                                                    <div class="form-icon-input form-fs-lg">
                                                        <input type="text" class="form-control form-control-lg flatpickr" placeholder="Select pickup time" data-noCalendar="true" data-enableTime="true">
                                                        <span class="form-icon"><i class="bi bi-calendar fs-5"></i></span>
                                                    </div>
                                                </div>
                                            </div> 
                                            {{-- Button --}}
                                            <div class="text-center pt-0">
                                                <a class="btn btn-lg btn-primary mb-n7" href="#">Search Cabs <i class="bi bi-arrow-right ps-3"></i></a>
                                            </div>
                                        </div>
                                        {{-- One way tab END --}}
    
                                        {{-- Round way tab START --}}
                                        <div class="tab-pane fade" id="pills-round-way-2" role="tabpanel" aria-labelledby="pills-round-way-2-tab">
                                            <div class="row g-4">
                                                {{-- Pickup --}}
                                                <div class="col-md-6 position-relative">
                                                    <div class="form-icon-input form-size-lg form-fs-lg">
                                                        <select class="form-select js-choice" data-search-enabled="true">
                                                            <option value="">Select pickup location</option>
                                                            <option>San Jacinto, USA</option>
                                                            <option>North Dakota, Canada</option>
                                                            <option>West Virginia, Paris</option>
                                                        </select>
                                                        <span class="form-icon"><i class="bi bi-geo-alt fs-5"></i></span>
                                                    </div>
    
                                                    {{-- Auto fill button --}}
                                                    <div class="btn-flip-icon z-index-9">
                                                        <button class="btn btn-white shadow btn-round mb-0"><i class="fa-solid fa-right-left"></i></button>
                                                    </div>
                                                </div>
    
                                                {{-- Drop --}}
                                                <div class="col-md-6">
                                                    <div class="form-icon-input form-size-lg form-fs-lg">
                                                        <select class="form-select js-choice" data-search-enabled="true">
                                                            <option value="">Select drop location</option>
                                                            <option>San Jacinto, USA</option>
                                                            <option>North Dakota, Canada</option>
                                                            <option>West Virginia, Paris</option>
                                                        </select>
                                                        <span class="form-icon"><i class="bi bi-geo-alt fs-5"></i></span>
                                                    </div>
                                                </div>
    
                                                {{-- Pickup date --}}
                                                <div class="col-md-6 col-lg-3">
                                                    <div class="form-icon-input form-fs-lg">
                                                        <input type="text" class="form-control form-control-lg flatpickr" data-date-format="d/M/Y" placeholder="Select pickup date">
                                                        <span class="form-icon"><i class="bi bi-calendar fs-5"></i></span>
                                                    </div>
                                                </div>
    
                                                {{-- Pickup time --}}
                                                <div class="col-md-6 col-lg-3">
                                                    <div class="form-icon-input form-fs-lg">
                                                        <input type="text" class="form-control form-control-lg flatpickr" placeholder="Select pickup time" data-noCalendar="true" data-enableTime="true">
                                                        <span class="form-icon"><i class="bi bi-calendar fs-5"></i></span>
                                                    </div>
                                                </div>
    
                                                {{-- Drop date --}}
                                                <div class="col-md-6 col-lg-3">
                                                    <div class="form-icon-input form-fs-lg">
                                                        <input type="text" class="form-control form-control-lg flatpickr" data-date-format="d/M/Y" placeholder="Select return date">
                                                        <span class="form-icon"><i class="bi bi-calendar fs-5"></i></span>
                                                    </div>
                                                </div>
    
                                                {{-- Drop time --}}
                                                <div class="col-md-6 col-lg-3">
                                                    <div class="form-icon-input form-fs-lg">
                                                        <input type="text" class="form-control form-control-lg flatpickr" placeholder="Select return time" data-noCalendar="true" data-enableTime="true">
                                                        <span class="form-icon"><i class="bi bi-calendar fs-5"></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                            {{-- Button --}}
                                            <div class="text-center pt-0">
                                                <a class="btn btn-lg btn-primary mb-n7" href="#">Search cabs <i class="bi bi-arrow-right ps-3"></i></a>
                                            </div>
                                        </div>
                                        {{-- Round way tab END --}}
                                    </div>		
                                </div>
                            </form>
                        </div>
                        {{-- Tab content item END --}}
    
                    </div> 
                </div>
                {{-- Tab content END --}}
            </div>
        </div>
        {{-- Search END --}}
    </section>
    
    {{-- Category START  --}}
    <section>
        <div class="container">
            <div class="row g-4">
    
                <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                    <div class="card card-body bg-light h-100 align-items-center justify-content-center">
                        <div class="d-flex align-items-center">
                            <img src="{{ asset('images/category/beach.svg') }}" class="h-30px me-3" alt="">
                            <h6 class="card-title mb-0"><a href="#" class="stretched-link">Beaches</a></h6>
                        </div> 
                    </div>
                </div>
    
                <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                    <div class="card card-body bg-light h-100 align-items-center justify-content-center">
                        <div class="d-flex align-items-center">
                            <img src="{{ asset('images/category/island.svg') }}" class="h-30px me-3" alt="">
                            <h6 class="card-title mb-0"><a href="#" class="stretched-link">Islands</a></h6>
                        </div> 
                    </div>
                </div>
    
                <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                    <div class="card card-body bg-light h-100 align-items-center justify-content-center">
                        <div class="d-flex align-items-center">
                            <img src="{{ asset('images/category/pool.svg') }}" class="h-30px me-3" alt="">
                            <h6 class="card-title mb-0"><a href="#" class="stretched-link">Amazing Pools</a></h6>
                        </div> 
                    </div>
                </div>
    
                <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                    <div class="card card-body bg-light h-100 align-items-center justify-content-center">
                        <div class="d-flex align-items-center">
                            <img src="{{ asset('images/category/camping.svg') }}" class="h-30px me-3" alt="">
                            <h6 class="card-title mb-0"><a href="#" class="stretched-link">Camping</a></h6>
                        </div> 
                    </div>
                </div>
    
                <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                    <div class="card card-body bg-light h-100 align-items-center justify-content-center">
                        <div class="d-flex align-items-center">
                            <img src="{{ asset('images/category/cabin.svg') }}" class="h-30px me-3" alt="">
                            <h6 class="card-title mb-0"><a href="#" class="stretched-link">Cabin</a></h6>
                        </div> 
                    </div>
                </div>
    
                <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                    <div class="card card-body bg-light h-100 align-items-center justify-content-center">
                        <div class="d-flex align-items-center">
                            <img src="{{ asset('images/category/lake.svg') }}" class="h-30px me-3" alt="">
                            <h6 class="card-title mb-0"><a href="#" class="stretched-link">Lake Front</a></h6>
                        </div> 
                    </div>
                </div>
    
                <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                    <div class="card card-body bg-light h-100 align-items-center justify-content-center">
                        <div class="d-flex align-items-center">
                            <img src="{{ asset('images/category/park.svg') }}" class="h-30px me-3" alt="">
                            <h6 class="card-title mb-0"><a href="#" class="stretched-link">National Park</a></h6>
                        </div> 
                    </div>
                </div>
    
                <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                    <div class="card card-body bg-light h-100 align-items-center justify-content-center">
                        <div class="d-flex align-items-center">
                            <img src="{{ asset('images/category/cave.svg') }}" class="h-30px me-3" alt="">
                            <h6 class="card-title mb-0"><a href="#" class="stretched-link">Caves</a></h6>
                        </div> 
                    </div>
                </div>
    
                <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                    <div class="card card-body bg-light h-100 align-items-center justify-content-center">
                        <div class="d-flex align-items-center">
                            <img src="{{ asset('images/category/surf.svg') }}" class="h-30px me-3" alt="">
                            <h6 class="card-title mb-0"><a href="#" class="stretched-link">Surfing</a></h6>
                        </div> 
                    </div>
                </div>
    
                <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                    <div class="card card-body bg-light h-100 align-items-center justify-content-center">
                        <div class="d-flex align-items-center">
                            <img src="{{ asset('images/category/farm.svg') }}" class="h-30px me-3" alt="">
                            <h6 class="card-title mb-0"><a href="#" class="stretched-link">Farms</a></h6>
                        </div> 
                    </div>
                </div>
    
                <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                    <div class="card card-body bg-light h-100 align-items-center justify-content-center">
                        <div class="d-flex align-items-center">
                            <img src="{{ asset('images/category/tower.svg') }}" class="h-30px me-3" alt="">
                            <h6 class="card-title mb-0"><a href="#" class="stretched-link">Towers</a></h6>
                        </div> 
                    </div>
                </div>
    
                <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                    <div class="card card-body bg-light h-100 align-items-center justify-content-center">
                        <div class="d-flex align-items-center">
                            <img src="{{ asset('images/category/desert.svg') }}" class="h-30px me-3" alt="">
                            <h6 class="card-title mb-0"><a href="#" class="stretched-link">Desert</a></h6>
                        </div> 
                    </div>
                </div>
    
            </div>
        </div>
    </section>
    {{-- Category END --}}
</main>
@endsection