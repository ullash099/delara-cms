import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Header, SecureApiUrl } from '../../../Context'

export default function BlogPosts(props) {
    const navigate = useNavigate()
    const [isrefreshingList,setRefreshingList] = React.useState(false)
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

        await axios.get(SecureApiUrl(`get-blogs`),{headers : Header()})
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

            let cats = [];
            if(Object.keys(info.categories).length > 0){
                Object.values(info.categories).map(category=>{
                    cats.push({
                        value: category.id,
                        label : props.lang == `en` ? category.name :
                                category.name_l ? category.name_l : 
                                category.name
                    })
                })
                setCategories(cats)
            }else{
                setCategories([])
            }
            
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
        await axios.get(SecureApiUrl(`get-blogs?src=${srcKey}`),{ headers: Header() })
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

    React.useEffect(()=>{
        handleGetStartUpData()
    },[props])

    return (
        <React.Fragment>
            <Row>
                <Col>
                    <Card>
                        <Card.Header className='outline-primary'>{page.list_card_title}</Card.Header>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}