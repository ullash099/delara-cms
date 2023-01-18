import axios from 'axios'
import React, { Suspense } from 'react'
import { Col, Nav, Row, Tab } from 'react-bootstrap'
import { SecureApiUrl, Header } from '../../../Context'
import Spinner from '../../components/Spinner'

const AuthenticationSettings = React.lazy(() => import('./AuthenticationSettings'));
const Browsers = React.lazy(() => import('./Browsers'));
const PasswordSettings = React.lazy(() => import('./PasswordSettings'));
const ProfileSettings = React.lazy(() => import('./ProfileSettings'));

export default function Profile(props) {
    const [page,setPage] = React.useState({})

    const handleGetStartUpData = async () => {    
        await axios.get(SecureApiUrl(`user/startup-data`),{headers : Header()})
        .then(function (response) {
            let info = response.data
            setPage(info.page)
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
        <Tab.Container id="profile" defaultActiveKey="profile">
            <Row>
                <Col md={4} sm={4}>
                    <Nav variant="pills" className="flex-column border border-primary">
                        <Nav.Item>
                            <Nav.Link eventKey="profile">{page.tab_title_1}</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="password">{page.tab_title_2}</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="authentication">{page.tab_title_3}</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="browser">{page.tab_title_4}</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col md={8} sm={8}>
                    <Suspense fallback={<Spinner />}>
                        <Tab.Content>
                            <Tab.Pane eventKey="profile">
                                <ProfileSettings userInfo={props.userInfo} onSave={props.onSave} page={page} />
                            </Tab.Pane>
                            <Tab.Pane eventKey="password">
                                <PasswordSettings  page={page} />
                            </Tab.Pane>
                            <Tab.Pane eventKey="authentication">
                                <AuthenticationSettings page={page} />
                            </Tab.Pane>
                            <Tab.Pane eventKey="browser">
                                <Browsers page={page} />
                            </Tab.Pane>
                        </Tab.Content>
                    </Suspense>
                </Col>
            </Row>
        </Tab.Container>
    )
}