import axios from 'axios'
import React from 'react'
import Select from 'react-select'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
import BtnSaving from '../../../components/BtnSaving'
import { Header, SecureApiUrl, ShowToast } from '../../../../Context'

export default function NewUser(props) {
    const [isSavingData,setSavingData] = React.useState(false)
    const [page,setPage] = React.useState({})
    const [roles,setRoles] = React.useState([])
    const [data,setData] = React.useState({
        id : 0,
        name : ``,
        email : ``,
        role : 0,
        password : ``,
        password_confirmation : ``
    })

    const handleSavingInfo = async () => {
        setSavingData(true)

        const form = new FormData()
        form.append('id', data.id)
        form.append('name', data.name)
        form.append('email', data.email)
        form.append('role_type', data.role)
        form.append('password', data.password)
        form.append('password_confirmation', data.password_confirmation)
        
        await axios.post(SecureApiUrl(`save-user`),form,{headers: Header()})
        .then(function(response){
            let info = response.data
            
            if(info.errors){
                (info.errors).map((error)=>(
                    ShowToast({ type : 'error', msg  : error })
                ))
            }
            else if(info.success){
                ShowToast({ type : 'success', msg  : info.success })
                props.onHide()
                props.onSave()
                handleResetForm()                
            }            
            setSavingData(false)
        })
        .catch(function (error) {
            if(error.request && error.request.status == 401){
                location.reload()
            }
        })
    }

    const handleResetForm = () => {
        setData({
            ...data,
            name : ``,
            email : ``,
            role : ``,
            password : ``,
            password_confirmation : ``
        })
    }

    React.useEffect(()=>{
        setPage(props.page)
        setRoles(props.roles)
        let info = props.info
        
        setData({
            id : info.id ? info.id : 0,
            name : info.name ? info.name : ``,
            email : info.email ? info.email : ``,
            role : info.role ? (info.role).toString() :`0`,
        })
    },[props])

    return (
        <Modal backdrop="static" keyboard={false} size="lg"
            show={props.show} onHide={props.onHide}
        >
            <Modal.Header closeButton>
                <Modal.Title className='m-0'>{page.modal_title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group controlId='name'>
                    <Form.Label>{page.lbl_name} <span className="text-danger">*</span></Form.Label>
                    <Form.Control value={data.name}
                        onChange={e => setData({
                            ...data,
                            name : e.target.value
                        })}
                    />
                </Form.Group>
                <Row>
                    <Col sm={12} md={6}>
                        <Form.Group controlId="role">
                            <Form.Label>{page.lbl_role} <span className="text-danger">*</span></Form.Label>

                            <Select options={roles} 
                                value={roles.filter(
                                    option => (data.role && option.value.toString() === (data.role).toString())
                                )}
                                onChange={option => setData({
                                    ...data,
                                    role : option ? option.value.toString() : `0`
                                })}
                            />
                        </Form.Group>

                        <Form.Group controlId='email'>
                            <Form.Label>{page.lbl_email} <span className="text-danger">*</span></Form.Label>
                            <Form.Control value={data.email}
                                onChange={e => setData({
                                    ...data,
                                    email : e.target.value
                                })}
                            />
                        </Form.Group>
                    </Col>

                    <Col sm={12} md={6}>
                        <Form.Group controlId='password'>
                            <Form.Label>{page.lbl_password} <span className="text-danger">*</span></Form.Label>
                            <Form.Control type='password'
                                onChange={e => setData({
                                    ...data,
                                    password : e.target.value
                                })}
                            />
                        </Form.Group>
                        <Form.Group controlId='password_confirmation'>
                            <Form.Label>{page.lbl_password_confirm} <span className="text-danger">*</span></Form.Label>
                            <Form.Control type='password'
                                onChange={e => setData({
                                    ...data,
                                    password_confirmation : e.target.value
                                })}
                            />
                        </Form.Group>
                    </Col>

                </Row>
            </Modal.Body>
            <Modal.Footer>
            {
                !isSavingData ? (
                    <Button variant="primary" className='float-end'
                        onClick={handleSavingInfo.bind(this)}  
                    > {page.btn_save}</Button>
                ) 
                : (<BtnSaving variant="primary" text={page.btn_saving} /> )
            }
            </Modal.Footer>
        </Modal>
    )
}