import axios from 'axios'
import React from 'react'
import { Card, Col, Dropdown, DropdownButton, Form, FormControl, InputGroup, Row, Table } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { Header, SecureApiUrl, SecureUrl, ShowToast } from '../../../../Context'
import Spinner from '../../../components/Spinner'

export default function Roles(props) {
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

    const handleGetStartUpData = async () => {
        setRefreshingList(true)
        await axios.get(SecureApiUrl(`get-roles`),{ headers: Header() })
        .then(function(response){
            let info = response.data

            if(info.deny){
                navigate(-1)
                setTimeout(() => {
                    props.onAccessDeny(info.deny)
                }, 100)
                return false
            }
            let page = info.page

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
            setPage(page)
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
        await axios.get(SecureApiUrl(`get-roles?src=${srcKey}`),{ headers: Header() })
        .then(function(response){
            let info = response.data
            if(info.deny){
                navigate(-1)
                setTimeout(() => {
                    props.onAccessDeny(info.deny)
                }, 100)
                return false
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
            if(info.deny){
                navigate(-1)
                setTimeout(() => {
                    props.onAccessDeny(info.deny)
                }, 100)
                return false
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
            setRefreshingList(false)
        })
        .catch(function (error) {
            if(error.request && error.request.status == 401){
                location.reload()
            }
        })
    }

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
                await axios.post(SecureApiUrl(`block-role`),form,{headers : Header()})
                .then(function (response) {
                    handleGetStartUpData()
                    let info = response.data
                    if(info.deny){
                        navigate(-1)
                        setTimeout(() => {
                            props.onAccessDeny(info.deny)
                        }, 100)
                        return false
                    }
                    else if(info.errors){
                        (info.errors).map((error)=>(
                            ShowToast({ type : 'error', msg  : error })
                        ))
                    }
                    else if(info.success){
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
                await axios.post(SecureApiUrl(`unblock-role`),form,{headers : Header()})
                .then(function (response) {
                    handleGetStartUpData()
                    let info = response.data
                    if(info.deny){
                        navigate(-1)
                        setTimeout(() => {
                            props.onAccessDeny(info.deny)
                        }, 100)
                        return false
                    }
                    else if(info.errors){
                        (info.errors).map((error)=>(
                            ShowToast({ type : 'error', msg  : error })
                        ))
                    }
                    else if(info.success){
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

    React.useEffect(()=>{
        handleGetStartUpData()
    },[props])

    return (
        <Row>
            <Col>
                <Card>
                    <Card.Header className='outline-primary'>
                        {page.card_title}
                        {
                            page.can_save ? (
                                <Link to={SecureUrl(`user-settings/role`)} className='btn btn-primary btn-sm float-end'>
                                    <i className="uil uil-plus-circle"></i> {page.btn_add_new}
                                </Link>
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
                                        {isrefreshingList ? (<tr><td colSpan={page.theads && Object.keys(page.theads).length} className="text-center py-3"><Spinner /></td></tr>)
                                        :( Object.keys(datatable.infos).length > 0 ? 
                                            (Object.values(datatable.infos).map((info,index)=>(
                                                <tr key={index}>
                                                    <td>
                                                        <span className={info.deleted_at ? `text-decoration-line-through` : ``}>
                                                        {
                                                            props.lang == 'en' ? info.name 
                                                            : info.name_l ? info.name_l : info.name
                                                        }
                                                        </span>
                                                    </td>
                                                    <td>
                                                        {Object.keys(info.users).length > 0 ?
                                                            (Object.values(info.users).map((user,ui)=>(
                                                                <span key={ui} className={info.deleted_at ? `text-decoration-line-through` : ``}>
                                                                    {user.name} ({user.email}) 
                                                                    {Object.keys(info.users).length != (ui+1) ? `, ` : ` `}
                                                                </span>
                                                            ))) : (<span className="text-warning">No User Assigned</span>)
                                                        }
                                                    </td>
                                                    <td>
                                                    {!page.can_save && !page.can_block ? (``) : (
                                                        <DropdownButton title={page.btn_action}
                                                            className="btn-sm float-end"
                                                        >
                                                            {!page.can_save || info.deleted_at ? (``) : (
                                                                <Link to={SecureUrl(`user-settings/role/${info.id}`)} className="dropdown-item"
                                                                    aria-selected="false"
                                                                >
                                                                    {page.btn_edit}
                                                                </Link>
                                                            )}
                                                            {!page.can_block ? (``) : (
                                                                info.deleted_at ? 
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
                                            )))
                                            :(<tr><td colSpan={page.theads && Object.keys(page.theads).length} className="text-center py-3"><h3>No Data Found</h3></td></tr>)
                                        )}
                                    </tbody>
                                </Table>
                                Showing {datatable.from} to {datatable.to} of {datatable.total}
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
    )
}