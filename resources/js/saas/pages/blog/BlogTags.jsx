import React from 'react'
import { Badge, Button, Card, Col, Dropdown, DropdownButton, Form, InputGroup, Row, Table } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { Header, SecureApiUrl, ShowToast } from '../../../Context'
import AppInput from '../../../forms/AppInput'
import BtnSaving from '../../components/BtnSaving'
import Spinner from '../../components/Spinner'

export default function BlogTags(props) {
    const navigate = useNavigate()
    const [isSavingData,setSavingData] = React.useState(false)
    const [src,setSrc] = React.useState(null)
    const [isrefreshingList,setRefreshingList] = React.useState(false)
    const [page,setPage] = React.useState({})

    const [data,setData] = React.useState({
        id : 0,
        name : ``,
        name_l : ``
    })

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

        await axios.get(SecureApiUrl(`get-blog-tags`),{headers : Header()})
        .then(function (response) {
            let info = response.data

            if(info.deny){
                navigate(-1)
                setTimeout(() => {
                    props.onAccessDeny(info.deny)
                }, 100)
                return false
            }
            setPage(info.page)

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

    const handleSearchTable = async (e) => {
        let srcKey = e.target.value
        setSrc(srcKey)

        setRefreshingList(true)
        await axios.get(SecureApiUrl(`get-blog-tags?src=${srcKey}`),{ headers: Header() })
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

    const handleSavingInfo = async () => {
        setSavingData(true)
        const form = new FormData()
        form.append('id', data.id)
        form.append('name', data.name)
        form.append('name_l', data.name_l ? data.name_l : ``)

        await axios.post(SecureApiUrl(`save-blog-tag`),form,{headers:Header()})
        .then(function (response) {
            setSavingData(false)
            let info = response.data

            if(info.errors){
                (info.errors).map((error)=>(
                    ShowToast({ type : 'error', msg  : error })
                ))
            }
            else if(info.success){
                ShowToast({ type : 'success', msg  : info.success })
                handleResetForm()
                handleGetStartUpData()
            }
        })
        .catch(function (error) {
            if(error.request && error.request.status == 401){
                location.reload()
            }
        })
    }

    const handleEdit = (info) => {
        setData({
            ...data,
            id : info.id,
            name : info.name,
            name_l : info.name_l ? info.name_l : ``,
        })
    }
    
    const handleResetForm = async () => {
        setData({
            ...data,
            id : 0,
            name : ``,
            name_l : ``
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
                await axios.post(SecureApiUrl(`block-blog-tag`),form,{headers : Header()})
                .then(function (response) {
                    handleGetStartUpData()
                    let info = response.data

                    if(info.errors){
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
                await axios.post(SecureApiUrl(`unblock-blog-tag`),form,{headers : Header()})
                .then(function (response) {
                    handleGetStartUpData()
                    let info = response.data

                    if(info.errors){
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
        <React.Fragment>
            <Row>
            {page.can_save ? (
                    <Col sm={{ span: 12, order : 2 }} md={{ span: 4, order: 2 }}>
                        <Card>
                            <Card.Header className='outline-primary'>{page.form_card_title}</Card.Header>
                            <Card.Body className='pt-1'>
                                <AppInput controlId="name"
                                    label={page.lbl_name} isRequired={true}
                                    value={data.name}
                                    onKeyPress={handleSavingInfo.bind(this)}
                                    onChange={e=>setData({
                                        ...data,
                                        name : e
                                    })}
                                />
                                
                                {props.translate == 1 ? (
                                    <AppInput controlId="name_l"
                                        label={page.lbl_name_l}
                                        value={data.name_l}
                                        onKeyPress={handleSavingInfo.bind(this)}
                                        onChange={e=>setData({
                                            ...data,
                                            name_l : e
                                        })}
                                    />
                                ):(``)}
                            </Card.Body>
                            <Card.Footer>
                                <Button variant='warning' 
                                    onClick={handleResetForm.bind(this)}
                                >{page.btn_reset}</Button>
                                {
                                    !isSavingData ? (
                                        <Button variant={data.id == 0 ? `primary` : `secondary`} className='float-end'
                                            onClick={handleSavingInfo.bind(this)}  
                                        > {data.id == 0 ? page.btn_save : page.btn_update}</Button>
                                    )
                                    : (<BtnSaving variant={data.id == 0 ? `primary` : `secondary`} text={data.id == 0 ? page.btn_saving : page.btn_updateing} /> )
                                }
                                
                            </Card.Footer>
                        </Card>
                    </Col>
                ):(``)}
                <Col sm={{ span: 12, order : 1 }} md={{ span: page.can_save ? 8 : 12, order : 1 }}>
                    <Card>
                        <Card.Header className='outline-primary'>{page.list_card_title}</Card.Header>
                        <Card.Body>
                            <Row>
                                <Col>
                                    <div className="app-search dropdown d-none d-lg-block mb-2">
                                        <InputGroup>
                                            <Form.Control type='text' placeholder='Search...'
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
                                                isrefreshingList ? (<tr><td colSpan={page.theads && Object.keys(page.theads).length} className='text-center'><Spinner /></td></tr>):
                                                (
                                                    Object.keys(datatable.infos).length > 0 ? 
                                                    Object.values(datatable.infos).map((info,index)=>(
                                                        <tr key={index}>
                                                            <td>
                                                                <p className='m-0'>{props.lang == `en` ? info.name : info.name_l}</p>
                                                            </td>
                                                            <td>
                                                                {info.deleted_at ? (
                                                                    <Badge bg="danger">{page.badge_danger}</Badge>
                                                                    ) : (
                                                                    <Badge bg="success">{page.badge_success}</Badge>
                                                                )}
                                                            </td>
                                                            <td>
                                                                <DropdownButton title={page.btn_action}
                                                                    className="btn-sm float-end"
                                                                >
                                                                    {!page.can_save || info.deleted_at ? (``) : (
                                                                        <Dropdown.Item eventKey="2" 
                                                                            onClick={()=>handleEdit(info)}
                                                                        >
                                                                            {page.btn_edit}
                                                                        </Dropdown.Item>
                                                                    )}
                                                                    {!page.can_block ? (``) : (
                                                                        info.deleted_at ? 
                                                                        (
                                                                            <Dropdown.Item eventKey="3" 
                                                                                onClick={()=>handleUnblock(info.id)}
                                                                            >{page.btn_unblock}</Dropdown.Item>
                                                                        )
                                                                        :(
                                                                            <Dropdown.Item eventKey="3" 
                                                                                onClick={()=>handleBlock(info.id)}
                                                                            >{page.btn_block}</Dropdown.Item>
                                                                        )
                                                                    )}
                                                                </DropdownButton>
                                                            </td>
                                                        </tr>
                                                    ))
                                                    :(<tr><td colSpan={page.theads && Object.keys(page.theads).length} className="text-center py-3"><h3>No Data Found</h3></td></tr>)
                                                )
                                            }
                                        </tbody>
                                    </Table>
                                    Showing {datatable.from} to {datatable.to} of {datatable.total}
                                </Col>
                            </Row>

                        </Card.Body>
                        <Card.Footer>
                            <Row>
                                <Col sm>
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
        </React.Fragment>
    )
}