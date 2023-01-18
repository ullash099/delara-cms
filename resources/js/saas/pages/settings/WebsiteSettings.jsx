import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { Header, SecureApiUrl, ShowToast } from '../../../Context'
import AppEditor from '../../../forms/AppEditor'
import AppInput from '../../../forms/AppInput'
import BtnSaving from '../../components/BtnSaving'
import MediaUpload from '../../components/MediaUpload'

export default function WebsiteSettings(props) {
    const [page,setPage] = React.useState({})
    const [isSavingData,setSavingData] = React.useState(false)
    
    const [data,setData] = React.useState({
        site_title : ``,
        site_tagline : ``,
        logo_id : ``,
        logo_img : ``,
        secondary_logo_id : ``,
        secondary_logo_img : ``,
        icon_id : ``,
        icon_img : ``,

        company_name : ``,
        company_phone : ``,
        company_email : ``,
        company_address : ``,

        facebook_link : `` , 
        linkedin_link : ``,
        twitter_link : ``
    })

    const handleGetStartUpData = async () => {
        await axios.get(SecureApiUrl(`get-website-settings`),{headers : Header()})
        .then((response)=> {
            let info = response.data
            if(info.deny){
                navigate(-1)
                setTimeout(() => {
                    props.onAccessDeny(info.deny)
                }, 100)
                return false
            }

            setPage(info.page)
            let settings = info.settings
            
            setData({
                ...data,

                site_title : settings.site_title ? settings.site_title :  ``,
                site_tagline : settings.site_tagline ? settings.site_tagline :  ``,
                logo_id : settings.logo_id ? settings.logo_id : ``,
                logo_img : settings.logo_img ? settings.logo_img : ``,
                secondary_logo_id : settings.secondary_logo_id ? settings.secondary_logo_id : ``,
                secondary_logo_img : settings.secondary_logo_img ? settings.secondary_logo_img : ``,
                icon_id : settings.icon_id ? settings.icon_id : ``,
                icon_img : settings.icon_img ? settings.icon_img : ``,

                company_name : settings.company_name ? settings.company_name :  ``,
                company_phone : settings.company_phone ? settings.company_phone :  ``,
                company_email : settings.company_email ? settings.company_email :  ``,
                company_address : settings.company_address ? settings.company_address :  ``,

                facebook_link : settings.facebook_link ? settings.facebook_link : ``, 
                linkedin_link : settings.linkedin_link ? settings.linkedin_link : ``,
                twitter_link : settings.twitter_link ? settings.twitter_link : ``

            })            
        })
        .catch((error)=> {
            if(error.request && error.request.status == 401){
                location.reload()
            }
        })
    }

    const handleSavingInfo = async () => {
        setSavingData(true)

        const form = new FormData()
        form.append('site_title', data.site_title ? data.site_title : ``)
        form.append('site_tagline', data.site_tagline ? data.site_tagline : ``)
        form.append('logo_id', data.logo_id ? data.logo_id : '')
        form.append('secondary_logo_id', data.secondary_logo_id ? data.secondary_logo_id : '')
        form.append('icon_id', data.icon_id ? data.icon_id : '')
        
        form.append('company_name', data.company_name ? data.company_name : ``)
        form.append('company_phone', data.company_phone ? data.company_phone : ``)
        form.append('company_email', data.company_email ? data.company_email : ``)
        form.append('company_address', data.company_address ? data.company_address : ``)

        form.append('facebook_link', data.facebook_link ? data.facebook_link : ``)
        form.append('linkedin_link', data.linkedin_link ? data.linkedin_link : ``)
        form.append('twitter_link', data.twitter_link ? data.twitter_link : ``)

        await axios.post(SecureApiUrl(`save-website-settings`),form,{headers:Header()})
        .then((response)=> {
            setSavingData(false)
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
        .catch((error)=> {
            if(error == 'Error: Request failed with status code 401'){
                location.reload()
            }
        })

    }

    /* media work start */
    const [showMediaModal, setShowMediaModal] = React.useState(false)
    const handleShowMediaModal = () => setShowMediaModal(true)
    const handleCloseMediaModal = () => {
        setCallingBtn(null)
        setShowMediaModal(false)
    }
    const [callingBtn,setCallingBtn] = React.useState(null)
    const handelMedia = (media) => {
        if(callingBtn == `primary_logo`){
            setData({
                ...data,
                logo_id : media.id,
                logo_img : media.attachment,
            })
        }
        else if(callingBtn == `secondary_logo`){
            setData({
                ...data,
                secondary_logo_id : media.id,
                secondary_logo_img : media.attachment,
            })
        }
        else if(callingBtn == `site_icon`){
            setData({
                ...data,
                icon_id : media.id,
                icon_img : media.attachment,
            })
        }
        handleCloseMediaModal()
    }
    /* media work end */

    React.useEffect(()=>{
        handleGetStartUpData();
    },[props])

    return (
        <React.Fragment>
            <Row>
                <Col>
                    <Card>
                        <Card.Header className='outline-primary'>
                            {page.card_title}
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col sm={12} md={6}>
                                    <fieldset>
                                        <legend>{page.fieldset_1}</legend>
                                        <AppInput label={page.lbl_site_title} isRequired={true}
                                            controlId="site_title"
                                            value={data.site_title}
                                            onKeyPress={handleSavingInfo.bind(this)}
                                            onChange={e=>setData({
                                                ...data,
                                                site_title : e
                                            })}
                                        />
                                        <AppInput label={page.lbl_site_tagline} isRequired={true}
                                            controlId="site_tagline"
                                            value={data.site_tagline}
                                            onKeyPress={handleSavingInfo.bind(this)}
                                            onChange={e=>setData({
                                                ...data,
                                                site_tagline : e
                                            })}
                                        />

                                    <Row>
                                        <Col sm={12} md={4}>
                                            {
                                                data.logo_img ? (
                                                    <React.Fragment>
                                                        <img src={data.logo_img} className="img-thumbnail mt-2" />
                                                        <Button variant="danger" size='sm' className='w-100'
                                                            onClick={e=>{
                                                                setData({
                                                                    ...data,
                                                                    logo_id : ``,
                                                                    logo_img : ``,
                                                                })
                                                            }}
                                                        >
                                                            {page.btn_remove}
                                                        </Button>
                                                    </React.Fragment>
                                                ):(``)
                                            }
                                            <Button variant="secondary" className='mt-2 w-100' 
                                                onClick={e=>{
                                                    setCallingBtn(`primary_logo`)
                                                    handleShowMediaModal()
                                                }}
                                            >{page.btn_set_primary_logo}</Button>
                                        </Col>
                                        <Col sm={12} md={4}>
                                            {
                                                data.secondary_logo_img ? (
                                                    <React.Fragment>
                                                        <img src={data.secondary_logo_img} className="img-thumbnail mt-2"  />
                                                        <Button variant="danger" size='sm' className='w-100'
                                                            onClick={e=>{
                                                                setData({
                                                                    ...data,
                                                                    secondary_logo_id : ``,
                                                                    secondary_logo_img : ``,
                                                                })
                                                            }}
                                                        >
                                                            {page.btn_remove}
                                                        </Button>
                                                    </React.Fragment>
                                                ):(``)
                                            }
                                            <Button variant="secondary" className='mt-2 w-100' 
                                                onClick={e=>{
                                                    setCallingBtn(`secondary_logo`)
                                                    handleShowMediaModal()
                                                }}
                                            >{page.btn_site_secondary_logo}</Button>
                                        </Col>
                                        <Col sm={12} md={4}>
                                            {
                                                data.icon_img ? (
                                                    <React.Fragment>
                                                        <img src={data.icon_img} className="img-thumbnail mt-2" style={{ height : "50px", width : "50px" }} />
                                                        <Button variant="danger" size='sm' className='w-100'
                                                            onClick={e=>{
                                                                setData({
                                                                    ...data,
                                                                    icon_id : ``,
                                                                    icon_img : ``,
                                                                })
                                                            }}
                                                        >
                                                            {page.btn_remove}
                                                        </Button>
                                                    </React.Fragment>
                                                ):(``)
                                            }
                                            <Button variant="secondary" className='mt-2 w-100' 
                                                onClick={e=>{
                                                    setCallingBtn(`site_icon`)
                                                    handleShowMediaModal()
                                                }}
                                            >{page.btn_set_icon}</Button>
                                        </Col>
                                    </Row>
                                    </fieldset>
                                </Col>
                                <Col sm={12} md={6}>
                                    <fieldset>
                                        <legend>{page.fieldset_2}</legend>

                                        <AppInput label={page.lbl_company_name}
                                            controlId="company_name"
                                            value={data.company_name}
                                            onKeyPress={handleSavingInfo.bind(this)}
                                            onChange={e=>setData({
                                                ...data,
                                                company_name : e
                                            })}
                                        />
                                        <AppInput label={page.lbl_company_phone}
                                            controlId="company_phone"
                                            value={data.company_phone}
                                            onKeyPress={handleSavingInfo.bind(this)}
                                            onChange={e=>setData({
                                                ...data,
                                                company_phone : e
                                            })}
                                        />
                                        <AppInput label={page.lbl_company_email}
                                            controlId="company_email"
                                            value={data.company_email}
                                            onKeyPress={handleSavingInfo.bind(this)}
                                            onChange={e=>setData({
                                                ...data,
                                                company_email : e
                                            })}
                                        />

                                        <AppEditor label={page.lbl_company_address}
                                            value={data.company_address}
                                            onChange={e=>setData({
                                                ...data,
                                                company_address : e
                                            })}
                                        />
                                    </fieldset>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <fieldset>
                                        <legend>{page.fieldset_3}</legend>

                                        <AppInput label={page.lbl_facebook}
                                            controlId="facebook_link"
                                            value={data.facebook_link}
                                            onKeyPress={handleSavingInfo.bind(this)}
                                            onChange={e=>setData({
                                                ...data,
                                                facebook_link : e
                                            })}
                                        />
                                        <AppInput label={page.lbl_linkedin}
                                            controlId="linkedin_link"
                                            value={data.linkedin_link}
                                            onKeyPress={handleSavingInfo.bind(this)}
                                            onChange={e=>setData({
                                                ...data,
                                                linkedin_link : e
                                            })}
                                        />
                                        <AppInput label={page.lbl_twitter}
                                            controlId="twitter_link"
                                            value={data.twitter_link}
                                            onKeyPress={handleSavingInfo.bind(this)}
                                            onChange={e=>setData({
                                                ...data,
                                                twitter_link : e
                                            })}
                                        />
                                    </fieldset>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Footer>
                            {!isSavingData ? (
                                <Button className='float-end'
                                    onClick={handleSavingInfo.bind(this)} 
                                >{page.btn_save}</Button>
                            )
                            : (<BtnSaving text={page.btn_saving} />)}
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            <MediaUpload 
                lang={props.lang}
                show={showMediaModal}
                onHide={handleCloseMediaModal.bind(this)}
                setMedia={handelMedia.bind(this)}
            />
        </React.Fragment>
    )
}