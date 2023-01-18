import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function BlogPosts(props) {
    const navigate = useNavigate()
    const [isSavingData,setSavingData] = React.useState(false)
    const [page,setPage] = React.useState({})
    const [categories,setCategories] = React.useState([])

    const [data,setData] = React.useState({
        id : 0,
        parent : 0,
        name : ``,
        name_l : ``
    })

    return (
        <React.Fragment>
            <Row>
                <Col>
                    <Card>

                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}