import axios from 'axios'
import React from 'react'
import { Button, Card, Col, Form, InputGroup, ListGroup, Modal, Row } from 'react-bootstrap'
import Spinner from '../../components/Spinner'
import { SecureApiUrl, Header, ShowToast } from '../../../Context'
import BtnSaving from '../../components/BtnSaving'

export default function Browsers(props) {
    const [isRefreshingData,setRefreshingData] = React.useState(false)
    const [isSavingData,setSavingData] = React.useState(false)

    const [isShowPassword, setShowPassword] = React.useState(true)
    const [password,setPassword] = React.useState(``)
    const [data,setData] = React.useState({sessions:{}})

    const handleGetStartUpData = async () => {
        setRefreshingData(true)
        await axios.get(SecureApiUrl('user/get-sessions'),{ headers: Header() })
        .then(function(response){
            let info = response.data;
            setData({
                ...data,
                sessions : info.sessions
            })
            setRefreshingData(false)
        })
        .catch(function (error) {
            if(error.request && error.request.status == 401){
                location.reload()
            }
        })
    }

    const handleLogoutOtherBrowserSession = async () => {
        setSavingData(true)

        const form = new FormData()
        form.append('password', password)

        await axios.post(SecureApiUrl(`user/other-browser-sessions`),form,{headers:Header()})
        .then(function (response) {
            setSavingData(false)
            handleCloseModal()
            let info = response.data      
            if(info.errors){        
                (info.errors).map((error)=>(
                    ShowToast({ type : 'error', msg  : error })
                ))
            }
            else if(info.success){
                ShowToast({ type : 'success', msg  : info.success })
                GetSessions()
            }
        })
        .catch(function (error) {
            if(error.request && error.request.status == 401){
                location.reload()
            }
        })
    }
    /* modal work */
    const [showModal, setShowModal] = React.useState(false)
    const handleCloseModal = () => setShowModal(false)
    const handleShowModal = () => setShowModal(true)
    React.useEffect(() => {
        handleGetStartUpData()
    }, [props])

    return (
        <React.Fragment>
            <Card variant="primary">
                <Card.Header className='outline-primary'>{props.page ? props.page.card_title_4 : ``}</Card.Header>
                <Card.Body className='border-top'>
                    <Card.Text className='m-0 fs-4 fw-bold'>{props.page ? props.page.txt_manage_active_sessions : ``}</Card.Text>
                    <Card.Text className='m-0'>{props.page ? props.page.txt_other_logout_sessions : ``}</Card.Text>
                    {isRefreshingData ? (<Spinner/>) : (
                        Object.keys(data.sessions).length > 0 ? (
                            <ListGroup className='mt-2'>
                                {Object.values(data.sessions).map((info,index)=>(
                                    <ListGroup.Item key={index}>
                                        <Row>
                                            <Col sm={2}>
                                                {info.agent.is_desktop ? 
                                                    (<svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor" 
                                                    className="float-start text-gray-500" style={{ width:"5rem" }}>
                                                    <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                                    </svg>) : 
                                                info.agent.is_mobile == 'phone' ? 
                                                    (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" 
                                                    className="float-start text-gray-500" style={{ width:"5rem" }}>
                                                    <path d="M0 0h24v24H0z" stroke="none"></path><rect x="7" y="4" width="10" height="16" rx="1"></rect><path d="M11 5h2M12 17v.01"></path>
                                                    </svg>)
                                                : ('-')}
                                            </Col>
                                            <Col sm={10}>
                                                <div className="text-sm text-gray-600">
                                                    {info.agent.platform} - {info.agent.browser}
                                                </div>
                                                <div className="text-xs text-gray-500">
                                                    {info.is_current_device ? (
                                                        <React.Fragment>
                                                            {info.ip_address}, <span className="text-green-500 font-semibold">{props.page ? props.page.txt_this_device : ``}</span>
                                                        </React.Fragment>
                                                    ) : (
                                                        <React.Fragment>
                                                        {info.ip_address}, <span>{props.page ? props.page.txt_last_active : ``} : {info.last_active}</span>
                                                        </React.Fragment>
                                                    )}
                                                </div>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                ))
                            }
                        </ListGroup>              
                    ) : null
                    )
                }

                </Card.Body>
                <Card.Footer>
                    <Button className="float-end" variant="secondary" onClick={handleShowModal.bind(this)}>{props.page ? props.page.btn_logout_sessions : ``}</Button>
                </Card.Footer>
            </Card>

            <Modal show={showModal} onHide={handleCloseModal} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>{props.page ? props.page.modal_title : ``}</Modal.Header>

                <Modal.Body>
                    <p className='fw-bold'>{props.page ? props.page.txt_confirm_session_logout_pass : ``}</p>

                    <Form.Group className="mb-2" controlId="password">
                        <Form.Label className="m-0 form-label">{props.page ? props.page.lbl_password : ``} <span className="text-danger">*</span></Form.Label>
                        <InputGroup>
                            <InputGroup.Text><i className="uil uil-padlock"></i></InputGroup.Text>
                            <Form.Control autoComplete='off'
                                type={isShowPassword ? `password` : `text`}
                                placeholder={props.page ? props.page.lbl_password : ``}
                                onChange={e=>setPassword(e.target.value)}
                                onKeyPress={e => {
                                    if(e.which === 13){
                                        handleLogoutOtherBrowserSession()
                                    }
                                }}
                            />
                            <InputGroup.Text onClick={()=>setShowPassword(!isShowPassword)}>
                                {isShowPassword ? (<i className="uil uil-eye-slash"></i>) :(<i className="uil uil-eye"></i>)}
                            </InputGroup.Text>
                        </InputGroup>
                    </Form.Group>

                </Modal.Body>
                <Modal.Footer>
                    {!isSavingData ? (
                        <Button variant="primary" onClick={handleLogoutOtherBrowserSession}>
                            {props.page ? props.page.btn_logout_sessions : ``}
                        </Button>
                        ): (
                        <BtnSaving variant="secondary" text={props.page ? props.page.btn_working_logout : ``} />
                    )}
                </Modal.Footer>

            </Modal>
        </React.Fragment>
    )
}