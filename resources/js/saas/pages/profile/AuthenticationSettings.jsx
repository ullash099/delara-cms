import axios from 'axios'
import React from 'react'
import { Button, Card, ListGroup } from 'react-bootstrap'
import { SecureApiUrl, Header, ShowToast } from '../../../Context'
import BtnSaving from '../../components/BtnSaving'
import Spinner from '../../components/Spinner'

export default function AuthenticationSettings(props) {
    const [isSavingData,setSavingData] = React.useState(false)
    const [isRegenerateRecoveryCodes,setRegenerateRecoveryCodes] = React.useState(false)

    const [isRefreshingData,setRefreshingData] = React.useState(false)

    const [data,setData] = React.useState({
        two_factor_secret : false,
        two_factor_svg : '',
        two_factor_recovery_codes : {},
    })

    const handleGetStartUpData = async () => {
        setRefreshingData(true)

        await axios.get(SecureApiUrl('user/two-factor-authentication-info'),{ headers: Header() })
        .then(function(response){
            let info = response.data;
            setRefreshingData(false)

            let two_factor = info.two_factor;

            setData({
                ...data,
                two_factor_secret : two_factor.two_factor_secret,
                two_factor_svg : two_factor.two_factor_svg,
                two_factor_recovery_codes : two_factor.two_factor_recovery_codes,
            })
        })
        .catch(function (error) {
            if(error.request && error.request.status == 401){
                location.reload()
            }
        })
    }

    const EnableTwoFactor = async () => {
        setSavingData(true)
        await axios.post(SecureApiUrl(`user/two-factor-authentication`),{},{headers:Header()})
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
                handleGetStartUpData()
            }

        })
        .catch(function (error) {
            if(error.request && error.request.status == 401){
                location.reload()
            }
        })
    }

    const DisableTwoFactor = async () => {
        setSavingData(true)
        await axios.post(SecureApiUrl(`user/delete-two-factor-authentication`),{},{headers:Header()})
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
                handleGetStartUpData()
            }
        })
        .catch(function (error) {
            if(error.request && error.request.status == 401){
                location.reload()
            }
        })
    }

    const RegenerateRecoveryCodes = async () => {
        setRegenerateRecoveryCodes(true)
        await axios.post(SecureApiUrl(`user/two-factor-recovery-codes`),{},{headers:Header()})
        .then(function (response) {
            setRegenerateRecoveryCodes(false)
            let info = response.data
            if(info.errors){
                (info.errors).map((error)=>(
                    ShowToast({ type : 'error', msg  : error })
                ))
            }
            else if(info.success){
                ShowToast({ type : 'success', msg  : info.success })
                handleGetStartUpData()
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
        <Card variant="primary">
            <Card.Header className='outline-primary'>{props.page ? props.page.card_title_3 : ``}</Card.Header>
            <Card.Body className='border-top'>
                {isRefreshingData ? (<Spinner />) : 
                    (<React.Fragment>
                        <Card.Text className='m-0 fs-4 fw-bold'>
                            {data.two_factor_secret ? 
                                props.page ? props.page.txt_enabled_two_factor : `` : 
                                props.page ? props.page.txt_disabled_two_factor : ``
                            }
                        </Card.Text>
                        
                        {data.two_factor_secret ?
                            (<Card.Text className='m-0 fw-bold'>{props.page ? props.page.txt_phone_auth_application : ``}</Card.Text>):
                            (<Card.Text className='m-0'>{props.page ? props.page.txt_when_two_factor_enabled : ``}</Card.Text>)
                        }

                        {data.two_factor_secret ? (<div className="text-center my-3" dangerouslySetInnerHTML={{__html: data.two_factor_svg}} />):(``)}

                        {data.two_factor_recovery_codes ? (<Card.Text className='m-0 fw-bold'>{props.page ? props.page.txt_store_recovery_codes : ``}</Card.Text>):(``)}

                        {data.two_factor_recovery_codes && Object.keys(data.two_factor_recovery_codes).length > 0 ? 
                            (<ListGroup className='mt-3'>
                                {Object.values(data.two_factor_recovery_codes).map((info,index)=>(
                                    <ListGroup.Item key={index}>{info}</ListGroup.Item>
                                ))}
                            </ListGroup>)
                        :(``)}

                    </React.Fragment>)
                }
            </Card.Body>
            <Card.Footer>
                {data.two_factor_secret ? (
                    <React.Fragment>
                        {isSavingData ? 
                            (<BtnSaving variant='danger' text={props.page ? props.page.btn_working: ``} />):
                            (<Button variant='danger' className='float-end' style={{ marginLeft : `0.5rem` }} onClick={DisableTwoFactor.bind(this)}>{props.page ? props.page.btn_disable : ``}</Button>)
                        }
                        {isRegenerateRecoveryCodes ? 
                            (<BtnSaving variant='secondary' text={props.page ? props.page.btn_working: ``} />): 
                            (<Button variant='secondary' style={{ marginRight : `0.5rem` }} className='float-end' onClick={RegenerateRecoveryCodes.bind(this)}>{props.page ? props.page.btn_regenerate : ``}</Button>)
                        }
                    </React.Fragment>
                ) : (
                    isSavingData ? 
                    (<BtnSaving variant='primary' text={props.page ? props.page.btn_working: ``} />) : 
                    (<Button variant='primary' className='float-end' onClick={EnableTwoFactor.bind(this)}>{props.page ? props.page.btn_enable : ``}</Button>)
                )}
            </Card.Footer>
        </Card>
    )
}