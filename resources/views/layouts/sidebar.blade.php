<div class="leftside-menu menuitem-active">

    {{-- Brand Logo Light --}}
    <a href="{{ route('dashboard') }}" class="logo logo-light text-center">
        <span class="logo-lg">
            <img src="{{ asset('images/logo.png') }}" style="width: 250px;" alt="logo">
        </span>
        <span class="logo-sm">
            <img src="{{ asset('images/logo_sm.png') }}" alt="small logo">
        </span>
    </a>

    {{-- Brand Logo Dark --}}
    {{-- <a href="index.html" class="logo logo-dark">
        <span class="logo-lg">
            <img src="assets/images/logo-dark.png" alt="dark logo">
        </span>
        <span class="logo-sm">
            <img src="assets/images/logo-dark-sm.png" alt="small logo">
        </span>
    </a> --}}

    {{-- Sidebar Hover Menu Toggle Button --}}
    <div class="button-sm-hover" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Show Full Sidebar" data-bs-original-title="Show Full Sidebar">
        <i class="ri-checkbox-blank-circle-line align-middle"></i>
    </div>

    {{-- Full Sidebar Menu Close Button --}}
    <div class="button-close-fullsidebar">
        <i class="ri-close-fill align-middle"></i>
    </div>

    {{-- Sidebar -left --}}
    <div class="h-100 show" id="leftside-menu-container" data-simplebar="init"><div class="simplebar-wrapper" style="margin: 0px;"><div class="simplebar-height-auto-observer-wrapper"><div class="simplebar-height-auto-observer"></div></div><div class="simplebar-mask"><div class="simplebar-offset" style="right: 0px; bottom: 0px;"><div class="simplebar-content-wrapper" tabindex="0" role="region" aria-label="scrollable content" style="height: 100%; overflow: hidden scroll;"><div class="simplebar-content" style="padding: 0px;">
        {{-- Sidemenu --}}
        <?php #DebugMe($menus); ?>
        <ul class="side-nav">
            @foreach ($menus as $menu)

                @if ($menu->is_caption)
                    <li class="side-nav-title text-primary">{{ ConvertToLang($menu) }}</li>
                    @foreach ($menu->childs as $child)
                        @if (count($child->childs) == 0)
                            <li class="side-nav-item">
                                <a href="apps-calendar.html" class="side-nav-link">
                                    <i class="{{ $child->web_icon ?? '??' }}"></i>
                                    <span> {{ ConvertToLang($child) }} </span>
                                </a>
                            </li>
                        @else
                        @endif
                    @endforeach
                    
                @else
                    @if (count($menu->childs) == 0)
                        <li class="side-nav-item">
                            <a href="apps-calendar.html" class="side-nav-link {{ request()->is($menu->route_name) ? 'menuitem-active' : ''  }}">
                                <i class="{{ $menu->web_icon ?? '??' }}"></i>
                                <span> {{ ConvertToLang($menu) }} </span>
                            </a>
                        </li>
                    @else
                        
                        <li class="side-nav-item">
                            <a data-bs-toggle="collapse" href="#sidebarDashboards" aria-expanded="false" aria-controls="sidebarDashboards" class="side-nav-link">
                                <i class="uil-home-alt"></i>
                                <span class="badge bg-success float-end">5</span>
                                <span> Dashboards </span>
                            </a>
                            <div class="collapse" id="sidebarDashboards">
                                <ul class="side-nav-second-level">
                                    <li>
                                        <a href="dashboard-analytics.html">Analytics</a>
                                    </li>
                                    <li>
                                        <a href="index.html">Ecommerce</a>
                                    </li>
                                    <li>
                                        <a href="dashboard-projects.html">Projects</a>
                                    </li>
                                    <li>
                                        <a href="dashboard-crm.html">CRM</a>
                                    </li>
                                    <li>
                                        <a href="dashboard-wallet.html">E-Wallet</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        
                    @endif
                @endif                
            @endforeach

        </ul>
        <div class="clearfix"></div>
    </div>
</div>