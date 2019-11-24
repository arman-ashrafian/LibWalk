import React from 'react'
import {changeClub, getClub, getEvent} from "../cloud";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import db from "../../firebase.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";


/**
 * Component responsible for creating the Admin Home Page.
 */
class AdminHome extends React.Component {
    // class and overridden methods
    constructor(props) {
        super(props);

        this.state = {
            editInfo: false,
            editTag: false,
            editEvent: false,
            org_id: "",
            org: {
                clubReference: '',
                clubName: '',
                contactEmail: '',
                description: '',
                pictureURL: '',
                tags: [],
                pageURL: '',
                emailList: []
            },
            event: {
                clubsHosting: '',
                description: '',
                eventName: '',
                locaction: '',
                pictureURL: '',
                rsvpForm: '',
                time: ''
            }
        };

        this.closeInfo = this.closeInfo.bind(this);
        this.closeTag = this.closeTag.bind(this);
        this.closeEvent = this.closeEvent.bind(this);
        this.handleEditInfo = this.handleEditInfo.bind(this);
        this.handleEditTag = this.handleEditTag.bind(this);
        this.handleEditEvent = this.handleEditEvent.bind(this);
        this.editHandleClub = this.editHandleClub.bind(this);
        this.editHandleTag = this.editHandleTag.bind(this);
        this.editHandleEvent = this.editHandleEvent.bind(this);
        this.handleLogOut = this.handleLogOut.bind(this);
    };

    /**
     * Set-up function that is called when the user is first directed to the admin home page.
     */
    componentDidMount() {
        // this code will get the admin's information to display on the page and store it in state.
        db.auth().onAuthStateChanged(firebaseUser => {
            if (firebaseUser) {
                this.setState({
                    org_id: firebaseUser.uid
                });
                getClub(firebaseUser.uid).then(clubInfo => {
                    console.log(clubInfo);
                    this.setState({
                        org: {
                            clubReference: clubInfo['clubReference'],
                            clubName: clubInfo['clubName'],
                            contactEmail: clubInfo['contactEmail'],
                            description: clubInfo['description'],
                            pictureURL: clubInfo['pictureURL'],
                            tags: clubInfo['tags'],
                            pageURL: clubInfo['pageURL'],
                            emailList: clubInfo['emailList']
                        }
                    })

                })
            }
        });

        // this code will fetch events for the admin based on event ids.
        getEvent('event_id_00').then(eventInfo => {
            this.setState({
                event: {
                    clubsHosting: eventInfo['clubsHosting'],
                    description: eventInfo['description'],
                    eventName: eventInfo['eventName'],
                    location: eventInfo['location'],
                    pictureURL: eventInfo['pictureURL'],
                    rsvpForm: eventInfo['rsvpForm'],
                    time: eventInfo['time'],
                }
            })
        })
    }

    // routing functions
    /**
     * If the user is not authorized as an admin, then we just take them to the home page.
     */
    view_switch_login = () => {
        console.log('WARN: Unauthorized user tried to access admin page.');
        this.props.history.push('/home');
    };

    // Handler Methods
    /**
     * Handles what happens when you change a club's details.
     */
    async editHandleClub(e) {
        e.preventDefault();
        await this.setState({
            org: {
                clubName: e.target[0].value,
                contactEmail: e.target[1].value,
                pictureURL: e.target[2].value,
                description: e.target[3].value,
                clubReference: this.state.org.ref,
                tags: this.state.org.tags,
                pageURL: this.state.org.pageURL
            }
        });
        await changeClub(this.state.org.ref, this.state.org);
        //todo add a success notification here
        this.closeInfo();
    };

    /**
     * Handles what happens when you change a club's details.
     */
    async editHandleTag(e) {
        e.preventDefault();
        await this.setState({
            tag: e.target[0].value
        });
        // todo call the backend and add a success notification
        this.closeTag();
    };

    /**
     * Handles what happens when you change a club's details.
     */
    async editHandleEvent(e) {
        e.preventDefault();
        await this.setState({
            event: {
                eventName: e.target[0].value,
                location: e.target[1].value,
                time: e.target[2].value,
                pictureURL: e.target[3].value,
                description: e.target[4].value,
                rsvpForm: e.target[5].value
            }
        });
        //todo call the backend and add a success notification
        this.closeEvent();
    };

    /**
     * Handles the authorization logic for logging the admin out.
     */
    handleLogOut = () => {
        db.auth().signOut().then((result) => {
            this.setState({
                org: null
            })
        });
        this.props.history.push('/admin_login');
    };

    /**
     * Handles the state change on editing the org's information.
     */
    handleEditInfo = () => {
        this.setState({editInfo: true})
    };

    /**
     * Handles the state change on editing an organization's tag.
     */
    handleEditTag = () => {
        this.setState({editTag: true})
    };

    /**
     * Handles the state change when you edit and org's event.
     */
    handleEditEvent = () => {
        this.setState({editEvent: true})
    };

    // Action Methods
    /**
     * Changes the state for helping render certain elements.
     */

    closeInfo = () => {
        this.setState({
            editInfo: false
        })
    };

    /**
     * Changes the state for helping render certain elements.
     */
    closeTag = () => {
        this.setState({
            editTag: false
        })
    };

    /**
     * Changes the state for helping render certain elements.
     */
    closeEvent = () => {
        this.setState({
            editEvent: false
        })
    };

    // container components
    /**
     * Creates a container for the Settings panel for the admin.
     */
    button_container = () => {
        return (
            <div>
                {/*Code for button modals*/}
                {this.modal_edit_clubs()}
                {this.modal_edit_tag()}
                {this.modal_edit_event()}

                {/*Card that contains the buttons*/}
                <Card>
                    <Card.Header style={{backgroundColor: '#006A96', color: 'white'}}>Your Settings</Card.Header>

                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <Card.Link onClick={this.handleEditInfo}>Edit Club</Card.Link></ListGroup.Item>
                        <ListGroup.Item>
                            <Card.Link onClick={this.handleEditTag}>Change Tags</Card.Link></ListGroup.Item>
                        <ListGroup.Item>
                            <Card.Link onClick={this.handleEditEvent}>Edit Event</Card.Link></ListGroup.Item>
                        <ListGroup.Item>
                            <Card.Link onClick={this.handleLogOut}>Log Out</Card.Link></ListGroup.Item>
                    </ListGroup>


                </Card>
            </div>
        )
    };

    // modals
    /**
     * Generates the jsx code to create and handle logic for a modal component to edit a clubs events.
     * @returns {*}
     */
    modal_edit_event = () => {
        return (
            <div>
                <Modal
                    size="lg"
                    show={this.state.editEvent}
                    onHide={this.closeEvent}
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                            Event Info
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form onSubmit={this.editHandleEvent}>
                            <Form.Group controlId="formName">
                                <Form.Label>Event Name</Form.Label>
                                <Form.Control type="name" placeholder="Enter Event Name"
                                              defaultValue={this.state.event.ename}/>
                            </Form.Group>

                            <Form.Group controlId="formPlace">
                                <Form.Label>Location</Form.Label>
                                <Form.Control type="place" placeholder="Enter Location"
                                              defaultValue={this.state.event.loc}/>
                            </Form.Group>

                            <Form.Group controlId="formTime">
                                <Form.Label>Time</Form.Label>
                                <Form.Control type="timeS" placeholder="Enter Time"
                                              defaultValue={this.state.event.time}/>
                            </Form.Group>

                            <Form.Group controlId="formPic">
                                <Form.Label>Picture</Form.Label>
                                <Form.Control type="pic" placeholder="Enter Picture URL"
                                              defaultValue={this.state.event.epic}/>
                            </Form.Group>

                            <Form.Group controlId="formDetails">
                                <Form.Label>Details</Form.Label>
                                <Form.Control type="details" placeholder="Enter Details"
                                              defaultValue={this.state.event.edesc}/>
                            </Form.Group>

                            <Form.Group controlId="formRSVP">
                                <Form.Label>RSVP</Form.Label>
                                <Form.Control type="rsvp" placeholder="Enter RSVP URL"
                                              defaultValue={this.state.event.rsvp}/>
                            </Form.Group>
                            {/*todo add form verification*/}
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>

            </div>
        )
    };

    /**
     * Generates the jsx code to create and handle logic for a modal component to edit a club's profile data.
     * @returns {*}
     */
    modal_edit_clubs = () => {
        return (<div>
            <Modal
                size="sm"
                show={this.state.editTag}
                onHide={this.closeTag}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        Tag Info
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.editHandleTag}>
                        <Form.Group controlId="formName">
                            <Form.Label>Tag Name</Form.Label>
                            <Form.Control type="name" placeholder="Enter Tag Name"/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>

        </div>);
    };

    /**
     * Generates the jsx code to create and handle logic for a modal component to edit a club's tag.
     * @returns {*}
     */
    modal_edit_tag = () => {
        return (<div>
            <Modal
                size="lg"
                show={this.state.editInfo}
                onHide={this.closeInfo}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Club Info
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form onSubmit={this.editHandleClub}>
                        <Form.Group controlId="formName">
                            <Form.Label>Club Name</Form.Label>
                            <Form.Control type="name" placeholder="Enter Club Name"
                                          defaultValue={this.state.org.clubName}/>
                        </Form.Group>
                        <Form.Group controlId="formName">
                            <Form.Label>Club Email</Form.Label>
                            <Form.Control type="name" placeholder="Enter Club Email"
                                          defaultValue={this.state.org.contactEmail}/>
                        </Form.Group>
                        <Form.Group controlId="formImage">
                            <Form.Label>Image URL</Form.Label>
                            <Form.Control type="name" placeholder="Enter Image URL"
                                          defaultValue={this.state.org.pictureURL}/>
                        </Form.Group>
                        <Form.Group controlId="formName">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="name" placeholder="Enter Club Description"
                                          defaultValue={this.state.org.description}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>

        </div>)
    };

    /**
     * Element for the main organization view.
     */
    admin_panel_view = () => {
        console.log('Org Data' + JSON.stringify(this.state.org));
        return (
            <div>
                <Card style={{width: '50rem'}}>

                    <Card.Img src={'https://picsum.photos/id/101/200/300'} style={{
                        width: '100%',
                        height: '15vw',
                        'object-fit': 'cover'
                    }}/>
                    {/*<Card.Img variant="top" src={this.state.org.pictureURL}/>*/}
                    <Card.Header style={{backgroundColor: '#006A96', color: 'white'}}>About Your Club</Card.Header>

                    <Card.Body>

                        <Card.Title>{this.state.org.clubName}</Card.Title>
                        <Card.Subtitle>{this.state.org.contactEmail} </Card.Subtitle>
                        <Card.Text>
                            {this.state.org.description}
                        </Card.Text>

                        <ListGroup className="list-group-flush">
                            <ListGroupItem>
                                <Card.Link href={this.state.org.pageURL}>Official Website</Card.Link>
                            </ListGroupItem>
                            <ListGroupItem> Tags Rendered Here</ListGroupItem>
                            <ListGroupItem>Put Upcoming Events Here</ListGroupItem>
                        </ListGroup>

                    </Card.Body>

                </Card>

            </div>
        )
    };

    render() {
        // only admins should be able to see this page, redirect if the login type is not admin.
        // if (check_login_type() === 'user') {
        //     this.view_switch_login();
        // }

        return (
            <div>
                {/*start the rest of the page*/}
                <main className='mt-5 pt-5'>
                    <Container>
                        <Row style={{flex: 5}}>
                            <Col style={{flex: 8}}>
                                {this.admin_panel_view()}
                            </Col>
                            <Col style={{flex: 2}}>
                                {this.button_container()}
                            </Col>
                        </Row>

                    </Container>


                </main>
            </div>
        );
    }


};

export default AdminHome;