import axios from 'axios'
import React from 'react'
import { Badge, Button, Card, Col, Dropdown, DropdownButton, Form, FormControl, InputGroup, Modal, Row, Table } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { Header, SecureApiUrl, ShowToast } from '../../../../Context'
import Spinner from '../../../components/Spinner'

const NewUser = React.lazy(() => import('./NewUser'));

export default function Users(props) {
    const navigate = useNavigate()
    const [isrefreshingList,setRefreshingList] = React.useState(false)
    const [src,setSrc] = React.useState(null)
    const [page,setPage] = React.useState({})
    const [datatable,setDatatable] = React.useState({
        infos : {},
        paginations : {},
        prev_page_url : null,
        last_page_url : null,
        from : 0,
        to : 0,
        total : 0
    })

    const [roles,setRoles] = React.useState([])
    const [data,setData] = React.useState({
        id : 0,
        name : ``,
        email : ``,
        role : ``,
        password : ``,
        password_confirmation : ``
    })

    const handleGetStartUpData = async () => {
        setRefreshingList(true)
        await axios.get(SecureApiUrl(`get-users`),{ headers: Header() })
        .then(function(response){
            let info = response.data

            if(info.deny){
                navigate(-1)
                setTimeout(() => {
                    props.onAccessDeny(info.deny)
                }, 100)
                return false
            }

            let rls = []
            if(Object.keys(info.roles).length > 0){
                Object.values(info.roles).map((option)=>{
                    rls.push({ 
                        value: option.id, 
                        label: props.lang == 'en' ? option.name
                            : option.name_l ? option.name_l : option.name
                    })
                })
                setRoles(rls)
            }else{
                setRoles([])  
            }

            setDatatable({
                ...datatable,
                infos : info.datatable.data,
                paginations : info.datatable.links,
                prev_page_url : info.datatable.prev_page_url,
                last_page_url : info.datatable.last_page_url,
                from : info.datatable.from,
                to : info.datatable.to,
                total : info.datatable.total
            })
            setPage(info.page)
            setRefreshingList(false)
        })
        .catch(function (error) {
            if(error.request && error.request.status == 401){
                location.reload()
            }
        })
    }

    const handleSearchTable = async (e) => {
        let srcKey = e.target.value
        setSrc(srcKey)

        setRefreshingList(true)
        await axios.get(SecureApiUrl(`get-users?src=`+srcKey),{ headers: Header() })
        .then(function(response){
            let info = response.data

            setDatatable({
                ...datatable,
                infos : info.datatable.data,
                paginations : info.datatable.links,
                prev_page_url : info.datatable.prev_page_url,
                last_page_url : info.datatable.last_page_url,
                from : info.datatable.from,
                to : info.datatable.to,
                total : info.datatable.total
            })
            setRefreshingList(false)
        })
        .catch(function (error) {
            if(error.request && error.request.status == 401){
                location.reload()
            }
        })
    }

    const handlePaginations = async (url) => {
        if (src) {
            url = `${url}&src=${src}`
        }
        setRefreshingList(true)
        await axios.get(url,{ headers: Header() })
        .then(function(response){
            let info = response.data
            let datatable = info.datatable
            setDatatable({
                ...datatable,
                infos : info.datatable.data,
                paginations : info.datatable.links,
                prev_page_url : info.datatable.prev_page_url,
                last_page_url : info.datatable.last_page_url,
                from : info.datatable.from,
                to : info.datatable.to,
                total : info.datatable.total
            })
            setRefreshingList(false)
        })
        .catch(function (error) {
            if(error.request && error.request.status == 401){
                location.reload()
            }
        })
    }

    /* Mmanually Confirm Email */
    const handleManuallyConfirmEmail = async (id) => {
        Swal.fire({
            title: page.swal_title,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: page.swal_yes,
            cancelButtonText: page.swal_no
        })
        .then(async (res) => {
            if (res.isConfirmed) {
                const form = new FormData()
                form.append('id', id)
                await axios.post(SecureApiUrl(`manually-confirm-user-email`),form,{headers : Header()})
                .then(function (response) {
                    let info = response.data

                    if(info.errors){
                        (info.errors).map((error)=>(
                            ShowToast({ type : 'error', msg  : error })
                        ))
                    }
                    else if(info.success){
                        handleGetStartUpData()
                        ShowToast({ type : 'success', msg  : info.success })
                    }
                })
                .catch(function (error) {
                    if(error.request && error.request.status == 401){
                        location.reload()
                    }
                })
            }
        })
    }

    /* block user */
    const handleBlock = async (id) => {
        Swal.fire({
            title: page.swal_title,
            text: page.swal_unblock_text,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: page.swal_block_yes,
            cancelButtonText: page.swal_no
        })
        .then(async (res) => {
            if (res.isConfirmed) {
                const form = new FormData()
                form.append('id', id)
                await axios.post(SecureApiUrl(`block-user`),form,{headers : Header()})
                .then(function (response) {
                    let info = response.data

                    if(info.errors){
                        (info.errors).map((error)=>(
                          ShowToast({ type : 'error', msg  : error })
                        ))
                    }
                    else if(info.success){
                        handleGetStartUpData()
                        ShowToast({ type : 'success', msg  : info.success })
                    }
                })
                .catch(function (error) {
                    if(error.request && error.request.status == 401){
                        location.reload()
                    }
                })
            }
        })
    }

    /* unblock user */
    const handleUnblock = async (id) => {
        Swal.fire({
            title: page.swal_title,
            text: page.swal_block_text,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: page.swal_unblock_yes,
            cancelButtonText: page.swal_no
        })
        .then(async (res) => {
            if (res.isConfirmed) {

                const form = new FormData()
                form.append('id', id)
                await axios.post(SecureApiUrl(`unblock-user`),form,{headers : Header()})
                .then(function (response) {
                    let info = response.data

                    if(info.errors){
                        (info.errors).map((error)=>(
                            ShowToast({ type : 'error', msg  : error })
                        ))
                    }
                    else if(info.success){
                        handleGetStartUpData()
                        ShowToast({ type : 'success', msg  : info.success })
                    }
                })
                .catch(function (error) {
                    if(error.request && error.request.status == 401){
                        location.reload()
                    }
                })
            }
        })
    }

    /* create user modal */
    const [show, setShow] = React.useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    React.useEffect(()=>{
        handleGetStartUpData()
    },[props])

    return (
        <React.Fragment>
            <Row>
                <Col>
                    <Card>
                        <Card.Header className='outline-primary'>
                            {page.card_title}
                            {
                                page.can_save ? (
                                    <Button className='float-end' size='sm' 
                                        onClick={handleShow.bind(this)}
                                    >
                                        <i className="uil uil-plus-circle"></i> {page.btn_add_new}
                                    </Button>
                                ):(``)
                            }
                        </Card.Header>
                        <Card.Body>

                            <Row>
                                <Col>
                                    <div className="app-search dropdown d-none d-lg-block mb-2">
                                        <InputGroup>
                                            <FormControl placeholder='Search...'
                                                onChange={handleSearchTable.bind(this)}
                                            />
                                            <span className="mdi mdi-magnify search-icon"></span>
                                        </InputGroup>
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <Table striped responsive bordered size="sm" className='border-success mb-0'>                                    
                                        <thead>
                                            <tr>
                                                {
                                                    page.theads && Object.keys(page.theads).length > 0 ? (
                                                        Object.values(page.theads).map((thead,th)=>(
                                                            <th key={th} style={thead.style} className={thead.class ? thead.class : ''}
                                                            >
                                                                {thead.txt}
                                                            </th>
                                                        ))
                                                    ) :(null)
                                                }
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                isrefreshingList ? (<tr><td colSpan={page.theads && Object.keys(page.theads).length} className="text-center py-3"><Spinner /></td></tr>) 
                                                :(
                                                    Object.keys(datatable.infos).length > 0 ?
                                                    (
                                                        Object.values(datatable.infos).map((info,index)=>(
                                                            <tr key={index}>
                                                                <td>{info.name}</td>
                                                                <td>{info.email}</td>
                                                                <td className='text-center'>
                                                                    <p className='d-block m-0 p-0'>
                                                                        {info.email_verified_at ? (
                                                                            <Badge>{page.badge_email_verified}</Badge>
                                                                        ):(
                                                                            <Badge bg="warning">{page.badge_email_not_verified}</Badge>
                                                                        )}
                                                                    </p>
                                                                    
                                                                    {info.block == 0 ? (
                                                                        <Badge>{page.badge_active}</Badge>
                                                                    ):(
                                                                        <Badge bg="danger">{page.badge_blocked}</Badge>
                                                                    )}
                                                                    
                                                                </td>
                                                                <td>
                                                                {!page.can_save && !page.can_block ? (``) : (
                                                                    <DropdownButton title={page.btn_action}
                                                                        className="btn-sm float-end"
                                                                    >
                                                                        {!info.email_verified_at ? (
                                                                            <Dropdown.Item eventKey="2" 
                                                                                onClick={()=>handleManuallyConfirmEmail(info.id)}
                                                                            >
                                                                                {page.btn_manually_confirm_email}
                                                                            </Dropdown.Item>
                                                                        ):(``)}

                                                                        {!page.can_save || info.block == 1 ? (``) : (
                                                                            <Dropdown.Item eventKey="2" 
                                                                                onClick={()=>{
                                                                                    setData({
                                                                                        ...data,
                                                                                        id : info.id,
                                                                                        name : info.name,
                                                                                        email : info.email,
                                                                                        role : info.role_id,
                                                                                    })
                                                                                    handleShow()
                                                                                }}
                                                                            >
                                                                                {page.btn_edit}
                                                                            </Dropdown.Item>
                                                                        )}
                                                                        {!page.can_block ? (``) : (
                                                                            info.block == 1 ? 
                                                                            (
                                                                                <Dropdown.Item eventKey="2" 
                                                                                    onClick={()=>handleUnblock(info.id)}
                                                                                >{page.btn_unblock}</Dropdown.Item>
                                                                            )
                                                                            :(
                                                                                <Dropdown.Item eventKey="2" 
                                                                                    onClick={()=>handleBlock(info.id)}
                                                                                >{page.btn_block}</Dropdown.Item>
                                                                            )
                                                                        )}
                                                                    </DropdownButton>
                                                                )}
                                                                </td>
                                                            </tr>
                                                        ))
                                                    )
                                                    :(<tr><td colSpan={page.theads && Object.keys(page.theads).length} className="text-center py-3"><h3>No Data Found</h3></td></tr>)
                                                )
                                            }
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>

                        </Card.Body>
                        <Card.Footer>
                            <Row>
                                <Col>
                                    <div className="paging_simple_numbers float-end">
                                        <div className="pagination pagination-rounded">
                                            <ul className="pagination pagination-rounded">
                                                {
                                                    Object.keys(datatable.paginations).length > 0 ? (
                                                        (datatable.paginations).map((paginate,i)=>(
                                                            <li key={i} className={
                                                                (paginate.label == "&laquo; Previous") ?
                                                                    (datatable.prev_page_url) ? `paginate_button page-item previous` : `paginate_button page-item previous disabled`
                                                                :(paginate.label == "Next &raquo;") ?
                                                                    (paginate.url) ? `paginate_button page-item next` : `paginate_button page-item next disabled`
                                                                :(paginate.active) ? `paginate_button page-item active` : `paginate_button page-item`
                                                            }>
                                                                {
                                                                    paginate.label == "&laquo; Previous" ? (
                                                                        <Link to="#" className="page-link"
                                                                            onClick={(e)=>{
                                                                                e.preventDefault()
                                                                                handlePaginations(paginate.url)
                                                                            }}
                                                                        >
                                                                            <i className="mdi mdi-chevron-left"></i>
                                                                        </Link>
                                                                    )
                                                                    : paginate.label == "Next &raquo;" ? (
                                                                        <Link to="#" className="page-link"
                                                                            onClick={(e)=>{
                                                                                e.preventDefault()
                                                                                handlePaginations(paginate.url)
                                                                            }}
                                                                        >
                                                                            <i className="mdi mdi-chevron-right"></i>
                                                                        </Link>
                                                                    )
                                                                    : paginate.label == "..." ? (
                                                                        <Link to="#" className="page-link"
                                                                            onClick={(e)=>(e.preventDefault())}
                                                                        >
                                                                            {paginate.label}
                                                                        </Link>
                                                                    )
                                                                    :(
                                                                        !paginate.active ? (
                                                                            <Link to="#" className="page-link"
                                                                                onClick={(e)=>{
                                                                                    e.preventDefault()
                                                                                    handlePaginations(paginate.url)
                                                                                }}
                                                                            >
                                                                                {paginate.label}
                                                                            </Link>
                                                                        ) : (
                                                                            <Link to="#" className="page-link"
                                                                                onClick={(e)=>(e.preventDefault())}
                                                                            >
                                                                                {paginate.label}
                                                                            </Link>
                                                                        )
                                                                    )
                                                                }
                                                            </li>
                                                        ))
                                                    ):(``)
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                    </Card.Footer>
                    </Card>
                </Col>
            </Row>

            <NewUser show={show} 
                onHide={handleClose.bind(this)}
                onSave={handleGetStartUpData.bind(this)}
                page={page} roles={roles}
                info={data}
            />
        </React.Fragment>
    )
}
