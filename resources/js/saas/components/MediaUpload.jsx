import axios from 'axios'
import React from 'react'
import { Button, ButtonGroup, Card, Col, Form, InputGroup, Modal, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Header, SecureApiUrl, ShowToast } from '../../Context'
import Spinner from './Spinner'

export default function MediaUpload(props) {
    const [isRefreshing,setRefreshing] = React.useState(false)
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

    const [selectedFile, setSelectedFile] = React.useState({})

    const [query,setQuery] = React.useState(``)

    const handelGetStartUpData = async () => {
        setRefreshing(true)
        await axios.get(SecureApiUrl(`get-media-libraries?src=${query}`),{headers : Header()})
        .then((response)=>{
            let info = response.data
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
            setRefreshing(false)
        })
        .catch((error)=> {
            if(error.request.status == 401){
              location.reload()
            }
        })
    }

    const handelSearchTable = async (e) => {
        let srcKey = e.target.value
        setQuery(srcKey)

        setRefreshing(true)
        await axios.get(SecureApiUrl(`get-media-libraries?src=${srcKey}`),{ headers: Header() })
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
            setRefreshing(false)
        })
        .catch(function (error) {
            if(error.request && error.request.status == 401){
                location.reload()
            }
        })
    }

    const handelPaginations = async (url) => {
        if (src) {
            url = `${url}&src=${query}`
        }
        setRefreshing(true)
        await axios.get(url,{ headers: Header() })
        .then((response)=>{
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
            setRefreshing(false)
        })
        .catch((error)=> {
            if(error == 'Error: Request failed with status code 401'){
                location.reload()
            }
        })
    }

    const handelUploadFile = async (e) => {
        if (Object.keys(selectedFile).length > 0) {
            const form = new FormData();
            Object.values(selectedFile).map((obj,i)=>{
                form.append(`file[${i}]`, obj.file)
            })
            
            await axios.post(SecureApiUrl(`upload-medias`),form,{headers:Header()})
            .then((response)=> {
                let info = response.data;
                if(info.errors){
                    (info.errors).map((error)=>(
                        ShowToast({ type : 'error', msg  : error })
                    ))
                }
                else if(info.success){
                    setSelectedFile({})
                    handelGetStartUpData()
                }
            })
            .catch((error)=> {
                if(error.request.status == 401){
                    location.reload()
                  }
            });
        }
    }

    const handelDelete = async (id) => {
        const form = new FormData();
        form.append(`id`, id)
        await axios.post(SecureApiUrl(`delete-media`),form,{headers:Header()})
        .then((response)=> {
            let info = response.data;
            if(info.errors){
                (info.errors).map((error)=>{
                    ShowToast({ type : 'error', msg  : error })
                });
            }
            else if(info.success){
                ShowToast({ type : 'success', msg  : info.success })
                handelGetStartUpData()
            }
        })
        .catch((error)=> {
            if(error == 'Error: Request failed with status code 401'){
                location.reload()
            }
        });
    }

    React.useEffect(()=>{
        if(props.show){
            handelGetStartUpData();
        }
    },[props])

    return (
        <Modal
            size="xl"
            show={props.show}
            onHide={props.onHide}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton className='py-0'>
                <Modal.Title className='m-0'>
                    {page.title}
                </Modal.Title>
                <Form style={{ width : `80%` }}>
                    <Row>
                        <Col sm md={{span: 6, offset: 3}}>
                            <Form.Group controlId="formFileSm" className="mb-2">
                                <Form.Label>{page.lbl}</Form.Label>
                                <InputGroup>
                                    <Form.Control type="file" size="sm" /* multiple */
                                        onChange={e=>{
                                            const files = e.target.files;
                                            let selectedFiles = []
                                            Object.values(files).map((file,i)=>{
                                                selectedFiles.push({file})
                                            })
                                            if (!selectedFiles){
                                                setSelectedFile({})
                                            }
                                            else{
                                                setSelectedFile(selectedFiles)
                                            }
                                        }}
                                    />
                                    <Button type='button' size='sm'
                                        onClick={handelUploadFile.bind(this)}
                                    >{page.btn}</Button>
                                </InputGroup>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </Modal.Header>
            <Modal.Body className='pt-0'>
                <Row>
                    <Col>
                        <div className="app-search dropdown d-none d-lg-block my-2">
                            <Form>
                                <InputGroup>
                                    <Form.Control type='text' placeholder='Search...'
                                        onChange={handelSearchTable.bind(this)}
                                    />
                                    <span className="mdi mdi-magnify search-icon"></span>
                                </InputGroup>
                            </Form>
                        </div>
                    </Col>
                </Row>
                
                <Row>
                    {isRefreshing ? (<Col className='text-center'><Spinner /></Col>) :
                        Object.keys(datatable.infos).length > 0 ? (
                            Object.values(datatable.infos).map((info,index)=>(
                                <Col sm md={2} key={index}>
                                    <Card className='mb-2'>
                                        {
                                            info.mime == 'image/jpeg' ||
                                            info.mime == 'image/png' ||
                                            info.mime == 'image/jpg' ||
                                            info.mime == 'image/svg+xml' ||
                                            info.mime == 'image/webp' ?
                                                <img 
                                                    src={info.attachment} 
                                                    className='rounded'
                                                    alt={info.name+'.'+info.mime}
                                                    style={{ height : '150px'}}
                                                />
                                            : info.mime
                                        }
                                        <Card.Body className='p-0 border-top border-primary'>
                                            <Card.Title className='text-center' style={{ height : `33px` }}>{info.name}</Card.Title>
                                            <Row>
                                                <Col>
                                                    <ButtonGroup size="sm" className='w-100'>
                                                        <Button 
                                                            variant="primary"
                                                            type='button' 
                                                            onClick={() => props.setMedia(info)}
                                                        >{page.use}
                                                        </Button>
                                                        <Button 
                                                            variant="danger"
                                                            type='button' 
                                                            onClick={() => handelDelete(info.id)}
                                                        >{page.delete}
                                                        </Button>
                                                    </ButtonGroup>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        ):(<Col><h3 className='text-center'>{page.no_data}</h3></Col>)
                    }
                </Row>

                Showing {datatable.from} to {datatable.to} of {datatable.total}

            </Modal.Body>
            <Modal.Footer className='pb-0'>
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
                                                                    handelPaginations(paginate.url)
                                                                }}
                                                            >
                                                                <i className="mdi mdi-chevron-left"></i>
                                                            </Link>
                                                        )
                                                        : paginate.label == "Next &raquo;" ? (
                                                            <Link to="#" className="page-link"
                                                                onClick={(e)=>{
                                                                    e.preventDefault()
                                                                    handelPaginations(paginate.url)
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
                                                                        handelPaginations(paginate.url)
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
            </Modal.Footer>
        </Modal>
    )
}