import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export function ShowToast(params) {
    if(params.type == 'error'){
        toast.error(params.msg, {
            position: "top-right",
            autoClose: 10000,
            hideProgressBar: false,
            closeOnClick: false,
            progress: undefined,
            theme: "colored"
        });
    }
    else if(params.type == 'warn'){
        toast.warn(params.msg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            progress: undefined,
            theme: "colored"
        });
    }
    else if(params.type == 'info'){
        toast.warn(params.msg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            progress: undefined,
            theme: "colored"
        });
    }
    else{
        toast.success(params.msg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            progress: undefined,
            theme: "colored"
        });
    }
}

export function AppUrl(url){
    return `/${url}`;
    //return `/folder/${url}`;
}

export function SecureUrl(url){
    return `/secure/${url}`;
    //return `/folder/secure/${url}`;
}

export function ApiUrl(url){
    return `/api/${url}`;
    //return `/folder/api/${url}`;
}

export function SecureApiUrl(url){
    return `/api/secure/${url}`;
    //return `/folder/api/secure/${url}`;
}

export function Header(content = null){
    let _token = localStorage.getItem('_token');
    if(content){
        return {
            'Content-Type': `application/json`,
            'Authorization': `Bearer ${_token}`
        }
    }
    return {'Authorization': `Bearer ${_token}`}
}

export function CheckPermission(manu,permissions = localStorage.getItem('permissions')){
    if (permissions && permissions.indexOf(manu.toString()) != -1) {
        return true;
    }
    else{
        return false;
    }
}