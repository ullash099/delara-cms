import axios from 'axios'
import React from 'react'
import { Button, Card, Col, Form, FormGroup, Row } from 'react-bootstrap'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { Header, SecureApiUrl, SecureUrl, ShowToast } from '../../../../Context'
import BtnSaving from '../../../components/BtnSaving'
import Spinner from '../../../components/Spinner'

export default function NewRole(props) {
    const navigate = useNavigate()
    let params = useParams()
    
    const [isRefreshingData,setRefreshingData] = React.useState(false)
    const [isSavingData,setSavingData] = React.useState(false)
    const [IsAllSelected,setAllSelected] = React.useState(false)
    const [menus,setMenus] = React.useState({})
    const [page,setPage] = React.useState({})
    const [data,setData] = React.useState({
        found : false,
        name : ``,
        name_l : ``,
    })

    const handleGetStartUpData = async () => {
        setRefreshingData(true)
        let api = SecureApiUrl(`get-menus`)
        if(params.roleId){
            api += `?id=${params.roleId}`
        }

        await axios.get(api,{headers: Header()})
        .then(function(response){
            let info = response.data

            if(info.deny){
                navigate(-1)
                setTimeout(() => {
                    props.onAccessDeny(info.deny)
                }, 100)
                return false
            }

            setAllSelected(info.total_menu == info.total_selected_menu ? true : false)
            setMenus(info.menus)
            setPage(info.page)
            setData({
                ...data,
                found : info.record.name ? true : false,
                name : info.record.name ? info.record.name : `` ,
                name_l : info.record.name_l ? info.record.name_l : ``,
            })
            setRefreshingData(false)
        })
        .catch(function (error) {
            if(error.request && error.request.status == 401){
              location.reload()
            }
        })
    }

    const handleCheck = (e) => {
        let checked = e.target.checked
        let value = e.target.value

        let info = []

        if (value === 'all') {
            if(Object.keys(menus).length > 0){
                (menus).map((menu)=>{
                    let childs = []
                    if(Object.keys(menu.childs).length > 0){
                        (menu.childs).map((child)=>{
                            childs.push({
                                id: child.id,
                                is_checked: checked,
                                name: child.name,
                                name_l: child.name_l,
                                note : child.note,
                                note_l : child.note_l,
                            })
                        })
                    }
                    info.push({
                        id: menu.id,
                        childs: childs,
                        is_checked: checked,
                        name: menu.name,
                        name_l:menu.name_l,
                    })
                })
                setMenus(info)
            }
            setAllSelected(checked)
            return true
        }
        else{
            let menuLength = 0
            let checkedLength = 0
            if(Object.keys(menus).length > 0){
                (menus).map((menu)=>{
                    menuLength++

                    let childs = []
                    if(Object.keys(menu.childs).length > 0){
                        (menu.childs).map((child)=>{
                            menuLength++
                            childs.push({
                                id: child.id,
                                is_checked: value === child.id.toString() ? checked : child.is_checked,
                                name: child.name,
                                name_l: child.name_l,
                                note : child.note,
                                note_l : child.note_l,
                            })
                            if(value === child.id.toString() || child.is_checked){
                                checkedLength++
                            }
                        })
                    }                    
                    info.push({
                        id: menu.id,
                        childs: childs,
                        is_checked: value === menu.id.toString() ? (checked ? true : false) : menu.is_checked,
                        name: menu.name,
                        name_l:menu.name_l,
                    })
                    if(value === menu.id.toString() || menu.is_checked){
                        checkedLength++
                    }
                })
                setMenus(info)
            }
            setAllSelected(menuLength == checkedLength ? true : false)
            return true
        }
    }

    const handleSavingInfo = async () => {
        setSavingData(true)

        const form = new FormData()
        form.append('id', params.roleId ? params.roleId : 0)
        form.append('name', data.name)
        form.append('name_l', data.name_l)

        if(Object.keys(menus).length > 0){
            (menus).map((menu)=>{
                if(menu.is_checked){
                    form.append(`permissions[]`, parseInt(menu.id))
                }
                
                if(Object.keys(menu.childs).length > 0){
                    (menu.childs).map((child)=>{
                        if(child.is_checked){
                            form.append(`permissions[]`, parseInt(child.id))
                        }
                    })
                }
            })
        }

        await axios.post(SecureApiUrl(`save-role`),form,{headers:Header()})
        .then(function(response){
            setSavingData(false)
            let info = response.data

            if(info.errors){
                (info.errors).map((error)=>(
                    ShowToast({ type : 'error', msg  : error })
                ))
            }
            else if(info.success){
                ShowToast({ type : 'success', msg  : info.success })
                if (params.roleId) {
                    window.history.pushState({}, undefined, SecureUrl(`user-settings/roles`));
                }
                else{
                    handleGetStartUpData()
                }
            }
        })
        .catch(function (error) {
            if(error.request && error.request.status == 401){
                location.reload()
            }
        })
    }

    React.useEffect(() => {
        handleGetStartUpData()
    }, [props])

    return (
        <React.Fragment>
            <Row>
                <Col>
                    <Card>
                        <Card.Header className='outline-primary'>
                            {page.card_title}
                            <Link className='btn btn-warning btn-sm float-end' to={SecureUrl(`user-settings/roles`)}>
                                <i className="uil uil-arrow-left"></i> {page.btn_back}
                            </Link>
                        </Card.Header>

                        <Card.Body>

                            <Row>
                                <Col sm={12} md={6}>
                                    <FormGroup controlId='name'>
                                        <Form.Label>{page.lbl_name} <span className="text-danger">*</span></Form.Label>
                                        <Form.Control defaultValue={data.name}
                                            onKeyPress={e => {e.which === 13 ? handleSavingInfo() : `` }}
                                            onChange={e=>{
                                                setData({
                                                    ...data,
                                                    name : e.target.value
                                                })
                                            }}
                                        />
                                    </FormGroup>
                                </Col>
                                {props.translate == 1 ? (

                                    <Col sm={12} md={6}>
                                        <FormGroup controlId='name_l'>
                                            <Form.Label>{page.lbl_name_l}</Form.Label>
                                            <Form.Control defaultValue={data.name_l}
                                                onKeyPress={e => {e.which === 13 ? handleSavingInfo() : `` }}
                                                onChange={e=>{
                                                    setData({
                                                        ...data,
                                                        name : e.target.value
                                                    })
                                                }}
                                            />
                                        </FormGroup>
                                    </Col>
                                
                                ):(``)}
                            </Row>

                            <Form.Group className='mt-3' controlId='menus'>
                                <Form.Label>{page.lbl_permission} <span className="text-danger">*</span></Form.Label>
                                <Form.Check type='checkbox' label="All" value={`all`}
                                    checked={IsAllSelected}
                                    onChange={handleCheck.bind(this)}
                                />
                            </Form.Group>

                            <Row>
                                {
                                    isRefreshingData ? <Col><div className='text-center'><Spinner /></div></Col> :(
                                        Object.keys(menus).length > 0 ? 
                                        (
                                            (menus).map((menu, i)=>(
                                                <Col sm md={4} key={i}>
                                                    <ul style={{ listStyle : `none` }}>
                                                        <li>
                                                            <Form.Check type='checkbox' value={menu.id}
                                                                checked={menu.is_checked}
                                                                label={ props.lang == 'en' ? menu.name+` (${menu.id})` : 
                                                                    menu.name_l ? menu.name_l+` (${menu.id})` 
                                                                    : menu.name+` (${menu.id})` 
                                                                }
                                                                onChange={handleCheck.bind(this)}
                                                            />
                                                            {
                                                                Object.keys(menu.childs).length > 0 ?
                                                                (
                                                                    <ul style={{ listStyle : `none` }}>
                                                                        {
                                                                            (menu.childs).map((child, ci)=>{
                                                                                let label = props.lang == 'en' ? child.name+` (${child.id})` : 
                                                                                        child.name_l ? child.name_l+` (${child.id})`
                                                                                        : child.name+` (${child.id})`
                                                                                    
                                                                                    if (child.note || child.note_l) {
                                                                                        label  += props.lang == 'en' ? 
                                                                                            child.note 
                                                                                            : child.note_l ? 
                                                                                                ` `+child.note_l 
                                                                                                : ` `+child.note
                                                                                    }

                                                                                return <li key={ci}>
                                                                                    <Form.Check type='checkbox' value={child.id}
                                                                                        checked={child.is_checked}
                                                                                        label={label}
                                                                                        onChange={handleCheck.bind(this)}
                                                                                    />
                                                                                </li>
                                                                            })
                                                                        }
                                                                    </ul>
                                                                )
                                                                :(``)
                                                            }
                                                        </li>
                                                    </ul>
                                                </Col>
                                            ))
                                        )
                                        :(<Col><h4 className='text-danger'>No Data Found</h4></Col>)   
                                    )
                                }
                            </Row>
                                
                        </Card.Body>
                        
                        <Card.Footer>
                        {
                            isRefreshingData ? (``)
                            :
                                !isSavingData ? (
                                    <Button variant={data.found ? `secondary` : `primary`} 
                                        onClick={handleSavingInfo.bind(this)}  className='float-end'
                                    > {page.btn_save}</Button>
                                ) 
                                : (<BtnSaving variant={data.found ? `secondary` : `primary`} text={page.btn_saving} /> )
                        }
                        </Card.Footer>

                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}