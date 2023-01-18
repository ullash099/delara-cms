import React from 'react'
import { Button, Dropdown, Form, FormControl, InputGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AppUrl, SecureUrl } from '../../Context'
import Spinner from './Spinner'

export default function Topbar(props) {
    const handleLogout = () => {
        $('#logout').submit()
    }
    const handleChangLang = () => {
        $('#change-lang').submit()
    }

    return (
        <div className="navbar-custom">
            
            <ul className="list-unstyled topbar-menu float-end mb-0">

                <li className="notification-list d-lg-none">
                    <Link to="#" className="nav-link dropdown-toggle arrow-none">
                        <i className="dripicons-search noti-icon"></i>
                    </Link>
                </li>
                
                {props.translate == 1 ? 
                (
                    <Dropdown as={'li'} className="notification-list topbar-dropdown">
                        
                        <Dropdown.Toggle as={'a'} className="nav-link dropdown-toggle arrow-none" id="dropdown-lang" >
                            <img src={ props.lang == `en` ? `/images/flags/us.jpg` : `/images/flags/bd.png` } 
                                alt={ props.lang == `en` ? `lang-us` : `lang-bn` } className="me-0 me-sm-1" height="12" />
                            <span className="align-middle d-none d-sm-inline-block">
                                { props.lang == `en` ? `English` : `Bangla` }
                            </span> 
                            <i className="mdi mdi-chevron-down d-none d-sm-inline-block align-middle"></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="dropdown-menu dropdown-menu-end dropdown-menu-animated topbar-dropdown-menu">
                            <form method="POST" id="change-lang" action={AppUrl(`change-lang`)}>
                                <input name="_token" type="hidden" value={ props.csrf} />
                                <input name="lang" type="hidden" value= { props.lang == `en` ? `bn` : `en` } />
                                <Dropdown.Item className="notify-item" onClick={handleChangLang.bind(this)}>
                                    <img src={ props.lang == `en` ? `/images/flags/bd.png` : `/images/flags/us.jpg` }
                                    alt={ props.lang == `en` ? `lang-bn` : `lang-us` } className="me-1" height="12" /> 
                                    <span className="align-middle">{ props.lang == `en` ? `Bangla` : `English` }</span>
                                </Dropdown.Item>
                            </form>
                        </Dropdown.Menu>

                    </Dropdown>
                    
                ):(``)}

                <li className="notification-list">
                    <Link to="notifications" className="nav-link dropdown-toggle arrow-none">
                        <i className="dripicons-bell noti-icon"></i>
                        <span className="noti-icon-badge"></span>
                    </Link>
                </li>

                {
                    !props.user.name ? (<li className="notification-list"><Spinner /></li>) :
                    (
                        <Dropdown as={'li'} className="notification-list">

                            <Dropdown.Toggle as={'a'} className="nav-link dropdown-toggle nav-user arrow-none me-0" id="dropdown-lang" >
                                <span className="account-user-avatar"> 
                                    <img src={props.user.profile_photo} alt="user-image" className="rounded-circle" />
                                </span>
                                <span>
                                    <span className="account-user-name">{props.user.name}</span>
                                    <span className="account-position">{props.user.role}</span>
                                </span>
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="dropdown-menu dropdown-menu-end dropdown-menu-animated topbar-dropdown-menu">
                                <Link to={SecureUrl('profile')} onClick={() => props.setMenus('profile')} className="notify-item dropdown-item">
                                    My Profile
                                </Link>

                                <form method="POST" id="logout" action={AppUrl(`logout`)}>
                                    <input name="_token" type="hidden" value={props.csrf} />
                                    <Link to="#" onClick={handleLogout.bind(this)} className="dropdown-item notify-item">
                                        <span>Logout</span>
                                    </Link>
                                </form>
                                
                            </Dropdown.Menu>

                        </Dropdown>
                    )
                }
                
            </ul>

            <button className="button-menu-mobile open-left">
                <i className="mdi mdi-menu"></i>
            </button>

            <div className="app-search dropdown d-none d-lg-block">
                <Form>
                    <InputGroup>
                        <FormControl className='dropdown-toggle' placeholder='Search...' id='top-search' />
                        <span className="mdi mdi-magnify search-icon"></span>
                    </InputGroup>
                </Form>
                <div className="dropdown-menu dropdown-menu-animated dropdown-lg" id="search-dropdown">
                </div>

            </div>

        </div>
    )
}
