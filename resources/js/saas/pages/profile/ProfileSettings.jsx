import axios from 'axios'
import React from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import { Header, SecureApiUrl, ShowToast } from '../../../Context'
import AppInput from '../../../forms/AppInput'
import BtnSaving from '../../components/BtnSaving'
import Spinner from '../../components/Spinner'

export default function ProfileSettings(props) {
    const fileInput = React.useRef(null)
    const [isSavingData,setSavingData] = React.useState(false)
    const [selectedFile, setSelectedFile] = React.useState()

    const [data,setData] = React.useState(false)

    const handleSelectFile = (e) => {
        const file = e.target.files[0]
        if (file && file.size > 1048576){
            ShowToast({ type : 'error', msg  : `File size cannot exceed more than 1MB` })
            setSelectedFile(null)
            e.target.value = null
            setData({
                ...data,
                profile_photo : props.userInfo.profile_photo
            })
        }
        else{
            setSelectedFile(file)
            setData({
                ...data,
                profile_photo : URL.createObjectURL(file)
            })
        }
    }

    const handleSavingInfo = async () => {
        setSavingData(true)
        const form = new FormData()
        form.append('name', data.name)
        form.append('email', data.email)
        if(selectedFile){
            form.append('file', selectedFile)
        }

        await axios.post(SecureApiUrl(`user/update-profile`),form,{headers:Header()})
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
                setSelectedFile(null)
                props.onSave(true)
            }
        })
        .catch(function (error) {
            if(error.request && error.request.status == 401){
                location.reload()
            }
        })
    }

    React.useEffect(() => {
        setData({
            ...data,
            profile_photo : props.userInfo.profile_photo,
            name : props.userInfo.name,
            email : props.userInfo.email,
        })
    }, [props])

    return (
        <Card variant="primary">
            <Card.Header className='outline-primary'>{props.page ? props.page.card_title_1 : ``}</Card.Header>
            <Card.Body className='border-top'>
                <Row>
                    <Col md={4} sm={12}>
                        <Card>
                            {!data.profile_photo ? (<Spinner />) : (
                                <React.Fragment>
                                    <Card.Img variant="top" src={data.profile_photo} />
                                    <Card.Body className='border-top p-0'>
                                        <Form.Group controlId="file">
                                            <Form.Control type="file"
                                                accept=".jpg,.png,.jpeg" 
                                                className='d-none' 
                                                ref={fileInput} 
                                                onChange={handleSelectFile.bind(this)}
                                            />
                                        </Form.Group>
                                        <div className="d-grid gap-2">
                                            <Button variant="secondary"
                                                onClick={()=>fileInput.current.click()}
                                            >
                                                {props.page ? props.page.lbl_select_photo : ``}
                                            </Button>
                                        </div>
                                    </Card.Body>
                                </React.Fragment>
                            )}
                        </Card>
                    </Col>
                    <Col md={8} sm={12}>
                        <AppInput 
                            controlId="name"
                            value={data.name}
                            label={props.page ? props.page.lbl_name : ``} 
                            isRequired={true}
                            onKeyPress={handleSavingInfo.bind(this)}
                            onChange={e=>setData({
                                ...data,
                                name : e
                            })}
                        />
                        <AppInput 
                            type="email"
                            controlId="email"
                            value={data.email}
                            label={props.page ? props.page.lbl_email : ``} 
                            isRequired={true}
                            onKeyPress={handleSavingInfo.bind(this)}
                            onChange={e=>setData({
                                ...data,
                                email : e
                            })}
                        />
                    </Col>
                </Row>
            </Card.Body>
            <Card.Footer>
                {!isSavingData ? (
                    <Button variant="secondary" onClick={handleSavingInfo.bind(this)} className='float-end'>
                        {props.page ? props.page.btn_save : ``}
                    </Button>
                ):(
                    <BtnSaving variant="secondary" text={props.page ? props.page.btn_saving : ``} /> 
                )}
            </Card.Footer>
        </Card>
    )
}