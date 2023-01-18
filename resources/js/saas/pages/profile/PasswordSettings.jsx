import axios from 'axios'
import React from 'react'
import { Button, Card, Form, InputGroup } from 'react-bootstrap'
import { SecureApiUrl, Header, ShowToast } from '../../../Context'
import BtnSaving from '../../components/BtnSaving'

export default function PasswordSettings(props) {
    const [isSavingData,setSavingData] = React.useState(false)
    const [data,setData] = React.useState({
        isShowCurrentPassword : false,
        isShowPassword : false,
        isShowConfirmPassword : false
    })

    const [password,setPassword] = React.useState({
        current_password : ``,
        password : ``,
        password_confirmation : ``
    })

    const handleSavingInfo = async () => {
        setSavingData(true)

        const form = new FormData()
        form.append('current_password', password.current_password)
        form.append('password', password.password)
        form.append('password_confirmation', password.password_confirmation)

        await axios.post(SecureApiUrl(`user/update-password`),form,{headers:Header()})
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
                location.reload()
                }
            })
        .catch(function (error) {
            if(error.request && error.request.status == 401){
                location.reload()
            }
        })
    }
    
    return (
        <Card variant="primary">
            <Card.Header className='outline-primary'>{props.page ? props.page.card_title_2 : ``}</Card.Header>
            <Card.Body className='border-top'>
                <Form.Group className="mb-2" controlId="current_password">
                    <Form.Label className="m-0 form-label">{props.page ? props.page.lbl_current_password : ``} <span className="text-danger">*</span></Form.Label>
                    <InputGroup>
                        <InputGroup.Text><i className="uil uil-padlock"></i></InputGroup.Text>
                        <Form.Control autoComplete='off' placeholder="your current secret" 
                            type={!data.isShowCurrentPassword ? `password` : `text`}
                            value={password.current_password}
                            onChange={e=>setPassword({
                                ...password,
                                current_password :e.target.value
                            })}
                        />
                        <InputGroup.Text onClick={()=>setData({
                            ...data,
                            isShowCurrentPassword : !data.isShowCurrentPassword
                        })}>
                            {!data.isShowCurrentPassword ? 
                                (<i className="uil uil-eye-slash"></i>) :
                                (<i className="uil uil-eye"></i>)
                            }
                        </InputGroup.Text>
                    </InputGroup>
                </Form.Group>

                <Form.Group className="mb-2" controlId="password">
                    <Form.Label className="m-0 form-label">{props.page ? props.page.lbl_new_password : ``} <span className="text-danger">*</span></Form.Label>
                    <InputGroup>
                        <InputGroup.Text><i className="uil uil-padlock"></i></InputGroup.Text>
                        <Form.Control autoComplete='off' placeholder="your new secret" 
                            type={!data.isShowPassword ? `password` : `text`}
                            onChange={e=>setPassword({
                                ...password,
                                password :e.target.value
                            })}
                        />
                        <InputGroup.Text onClick={()=>setData({
                            ...data,
                            isShowPassword : !data.isShowPassword
                        })}>
                            {!data.isShowPassword ? 
                                (<i className="uil uil-eye-slash"></i>) : 
                                (<i className="uil uil-eye"></i>)
                            }
                        </InputGroup.Text>
                    </InputGroup>
                </Form.Group>

                <Form.Group className="mb-2" controlId="password_confirmation">
                    <Form.Label className="m-0 form-label">{props.page ? props.page.lbl_password_confirmation : ``} <span className="text-danger">*</span></Form.Label>
                    <InputGroup>
                        <InputGroup.Text><i className="uil uil-padlock"></i></InputGroup.Text>
                        <Form.Control autoComplete='off' placeholder="confirm your secret" 
                            type={!data.isShowConfirmPassword ? `password` : `text`}
                            onChange={e=>setPassword({
                                ...password,
                                password_confirmation :e.target.value
                            })}
                            onKeyPress={e => {
                                if(e.which === 13){
                                    handleSavingInfo()
                                }
                            }}
                        />
                        <InputGroup.Text onClick={()=>setData({
                            ...data,
                            isShowConfirmPassword : !data.isShowConfirmPassword
                        })}>
                            {!data.isShowConfirmPassword ? 
                                (<i className="uil uil-eye-slash"></i>) : 
                                (<i className="uil uil-eye"></i>)
                            }
                        </InputGroup.Text>
                    </InputGroup>
                </Form.Group>

            </Card.Body>
            <Card.Footer>
                {!isSavingData ? (
                    <Button variant="secondary" onClick={handleSavingInfo.bind(this)}  className='float-end'>{props.page ? props.page.btn_save : ``}</Button>
                ):(
                    <BtnSaving variant="secondary" text={props.page ? props.page.btn_saving : ``} /> 
                )}
            </Card.Footer>
        </Card>
    )
}