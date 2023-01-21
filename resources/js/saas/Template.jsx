import axios from 'axios'
import { isNull } from 'lodash'
import React, { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { ApiUrl, Header, SecureUrl, ShowToast } from '../Context'
import LeftsideMenu from './components/LeftsideMenu'
import Spinner from './components/Spinner'
import Topbar from './components/Topbar'
import BlogPost from './pages/blog/BlogPost'
import BlogPosts from './pages/blog/BlogPosts'
import BlogTags from './pages/blog/BlogTags'
import EcommerceCategories from './pages/e-commerce/EcommerceCategories'

const Notfound = React.lazy(() => import('./pages/Notfound'));
const Profile = React.lazy(() => import('./pages/profile/Profile'));
const Roles = React.lazy(() => import('./pages/settings/role/Roles'));
const NewRole = React.lazy(() => import('./pages/settings/role/NewRole'));
const Users = React.lazy(() => import('./pages/settings/user/Users'));
const WebsiteSettings = React.lazy(() => import('./pages/settings/WebsiteSettings'));
const BlogCategories = React.lazy(() => import('./pages/blog/BlogCategories'));

export default function Template(props) {
    const csrf = $('meta[name="csrf-token"]').attr('content')
    const lang = $('html').attr('lang')
    const translate = $('html').attr('translate')
    const isLoggedIn = $('#app').attr('data-status')

    const [menus,setMenus] = React.useState({})
    const [menu,setMenu] = React.useState('dashboard')
    const [subMenu,setSubMenu] = React.useState('-')
    const handleMenu = (menu,clear = false) => {
        setMenu(menu)
        if(clear) setSubMenu(`-`)
    }    
    const handleSubMenu = (sub) => setSubMenu(sub)
    const handleResetMenu = (denyMsg = null) => {
        if(denyMsg){
            let paths = (window.location.pathname).substring(1).split("/")
            let menu = paths[0] ? paths[0] : ''
            let submenu = paths[1] ? paths[1] : ''
            setMenu(menu)
            setSubMenu(submenu)
            ShowToast({ type : 'error', msg  : denyMsg })
        }
    }

    const [userInfo,setUserInfo] = React.useState({
        name : ``,
        email : ``,
        profile_photo : ``,
        role : ``
    })

    const refresh = (data = false)  => {
        if (data) {
            handleGetPermissions()
        }
    }

    const getToken = async () => {
        await axios.get(ApiUrl(`user/get-token`))
        .then(response=>{
            let info = response.data
            localStorage.setItem('_token', info._token)
        })
        .catch((error)=> {
            if(error.request && error.request.status == 401){
                location.reload()
            }
        })
    }

    const handleGetPermissions = async () => {
        await axios.get(ApiUrl(`user/get-info`),{ headers: Header() })
        .then(response=>{
            let info = response.data
    
            setUserInfo({
                ...userInfo,
                name : info.name,
                email : info.email,
                profile_photo : info.profile_photo,
                role : info.role
            })
            setMenus(info.menus)
        })
    }

    React.useEffect(() => {
        let _token = localStorage.getItem('_token')
        
        let paths = (window.location.pathname).substring(1).split("/")
        let menu = paths[1] ? paths[1] : ''
        let submenu = paths[2] ? paths[2] : ''

        setMenu(menu)
        setSubMenu(submenu)
    
        if (isNull(_token)) {
            //console.log(_token)
            getToken().then(()=>{
                handleGetPermissions()
            })
        }else{
            handleGetPermissions()
        }
    },[props])


    return (
        <div className="wrapper">
            <ToastContainer />
            <Router>
                <LeftsideMenu  menus={menus}
                    setMenus={handleMenu} 
                    setSubMenu={handleSubMenu} 
                    activeMenu={menu} 
                    activeSubMenu={subMenu} 
                />
                <div className="content-page">
                    <div className="content">
                        <Topbar 
                            setMenus={handleMenu} 
                            user={userInfo} 
                            lang={lang} 
                            csrf={csrf} 
                            translate={translate}
                        />
                        <div className="py-2">
                            <Suspense fallback={<Spinner />}>
                                <Routes>
                                    <Route path={SecureUrl(`*`)} element={<Notfound lang={lang}/>}/>
                                    <Route exact path={SecureUrl(`profile`)} element={
                                        <Profile userInfo={userInfo} onSave={refresh.bind(this)}/>
                                    }/>

                                    {/* user-settings */}
                                    {/* roles */}
                                    <Route exact path={SecureUrl(`user-settings/roles`)} element={
                                        <Roles translate={translate} lang={lang} onAccessDeny={handleResetMenu.bind(this)}/>
                                    }/>
                                    <Route exact path={SecureUrl(`user-settings/role`)} element={
                                        <NewRole translate={translate} lang={lang} onAccessDeny={handleResetMenu.bind(this)}/>
                                    }/>
                                    <Route exact path={SecureUrl(`user-settings/role/:roleId`)} element={
                                        <NewRole translate={translate} lang={lang} onAccessDeny={handleResetMenu.bind(this)}/>
                                    }/>
                                    {/* users */}
                                    <Route exact path={SecureUrl(`user-settings/users`)} element={
                                        <Users translate={translate} lang={lang} onAccessDeny={handleResetMenu.bind(this)}/>
                                    }/>

                                    {/* website-settings */}
                                    <Route exact path={SecureUrl(`website-settings`)} element={
                                        <WebsiteSettings translate={translate} lang={lang} onAccessDeny={handleResetMenu.bind(this)}/>
                                    }/>

                                    {/* blog */}
                                    <Route exact path={SecureUrl(`blog/categories`)} element={
                                        <BlogCategories translate={translate} lang={lang} onAccessDeny={handleResetMenu.bind(this)}/>
                                    }/>
                                    <Route exact path={SecureUrl(`blog/tags`)} element={
                                        <BlogTags translate={translate} lang={lang} onAccessDeny={handleResetMenu.bind(this)}/>
                                    }/>
                                    <Route exact path={SecureUrl(`blog/posts`)} element={
                                        <BlogPosts translate={translate} lang={lang} onAccessDeny={handleResetMenu.bind(this)}/>
                                    }/>
                                    <Route exact path={SecureUrl(`blog/new-post`)} element={
                                        <BlogPost translate={translate} lang={lang} onAccessDeny={handleResetMenu.bind(this)}/>
                                    }/>

                                    {/* e-commerce */}
                                    <Route exact path={SecureUrl(`ecommerce/e-categories`)} element={
                                        <EcommerceCategories translate={translate} lang={lang} onAccessDeny={handleResetMenu.bind(this)}/>
                                    }/>
                                    
                                </Routes>
                            </Suspense>
                        </div>

                    </div>
                </div>
            </Router>
        </div>
    )
}
if (document.getElementById('app')) {  
    const container = document.getElementById('app')
    const root = createRoot(container)// createRoot(container!) if you use TypeScript
    root.render(<Template />)
  }