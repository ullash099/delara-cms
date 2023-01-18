import React from 'react'
import { Link } from 'react-router-dom'
import { SecureUrl } from '../../Context'

export default function LeftsideMenu(props) {
    return (
        <div className="leftside-menu menuitem-active">
            <a href={SecureUrl(`dashboard`)} className="logo text-center logo-light border-bottom">
                <span className="logo-lg mx-3">
                    <img src="/images/logo.png" alt="logo" className='img-fluid' />
                </span>
                <span className="logo-sm">
                    <img src="/images/logo_sm.png" alt="logo_sm" className='img-fluid' />
                </span>
            </a>

            <div className="h-100 show" id="leftside-menu-container" data-simplebar="init">
                <div className="simplebar-wrapper" style={{ margin : `0px` }}>
                    
                    <div className="simplebar-mask">
                        <div className="simplebar-offset" style={{ right:`0px`, bottom:`0px` }}>
                            <div className="simplebar-content-wrapper" tabIndex="0" role="region" aria-label="scrollable content" style={{ height : `100%`, overflow:`hidden scroll`, }}>
                                <div className="simplebar-content" style={{ padding : `0px` }}>
                                    <ul className="side-nav">
                                        <li className="side-nav-title side-nav-item">Navigation</li>
                                        {
                                            Object.keys(props.menus).length > 0 ? (
                                                Object.values(props.menus).map((menu,index)=>{
                                                    let collapseinfos = {}
                                                    if (Object.keys(menu.childs).length > 0) {
                                                        collapseinfos['data-bs-toggle'] = `collapse`
                                                        collapseinfos['aria-controls'] = menu.web+`Settings`
                                                        if (props.activeMenu == menu.web) {
                                                            collapseinfos['aria-expanded'] = true
                                                        }
                                                        else{
                                                            collapseinfos['aria-expanded'] = false
                                                        }
                                                    }

                                                    return (
                                                        <li key={index} 
                                                            onClick={()=> 
                                                                Object.keys(menu.childs).length > 0 ? props.setMenus(menu.web) : props.setMenus(menu.web,true)
                                                            }
                                                            className={props.activeMenu == menu.web ? `side-nav-item menuitem-active` : `side-nav-item`}
                                                        >
                                                            <Link to={Object.keys(menu.childs).length > 0 ? `#` : SecureUrl(menu.web)}
                                                                className={
                                                                    Object.keys(menu.childs).length > 0 ?
                                                                        props.activeMenu == menu.web ?
                                                                            `side-nav-link active` : `side-nav-link collapsed`
                                                                    :   props.activeMenu == menu.web ?
                                                                            `side-nav-link active` : `side-nav-link`
                                                                }
                                                                {...collapseinfos}
                                                            >
                                                                <i className={menu.web_icon}></i>
                                                                <span> {menu.name} </span>
                                                                {
                                                                    Object.keys(menu.childs).length > 0 ?
                                                                        (<span className="menu-arrow"></span>) : (``)
                                                                }
                                                            </Link>
                                                            {
                                                                Object.keys(menu.childs).length > 0 ? (
                                                                    <div 
                                                                        className={props.activeMenu == menu.web ? `collapse show` : `collapse` }
                                                                        id={menu.web+`Settings`}
                                                                    >
                                                                        <ul className="side-nav-second-level">

                                                                            {
                                                                                Object.values(menu.childs).map((child,i)=>(
                                                                                    <li key={i} 
                                                                                        onClick={() => props.setSubMenu(child.web)}
                                                                                        className={props.activeSubMenu == child.web ? `menuitem-active` : `` }>
                                                                                        <Link 
                                                                                            to={SecureUrl(`${menu.web}/${child.web}`)}
                                                                                            className={props.activeSubMenu ==  child.web ? `active` : `` }
                                                                                        >{child.name}</Link>
                                                                                    </li>
                                                                                ))
                                                                            }

                                                                        </ul>
                                                                    </div>
                                                                ):(``)
                                                            }
                                                        </li>
                                                    )

                                                })
                                            ):(``)
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}