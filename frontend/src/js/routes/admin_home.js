import React from 'react'
import {changeClub, getClub, getEvent} from "../cloud";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import db from "../../firebase.js";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function get_user_uid() {
    let uid = 'none';
    db.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            uid = firebaseUser.uid;
            console.log('firebaseUser', firebaseUser);
        }
    });

    return uid;
}

function check_login_type() {
    return "admin";
    let user_provider = 'none';
    db.auth().onAuthStateChanged(firebaseUser => {
            user_provider = firebaseUser.providerId;
            console.log('firebaseUser', firebaseUser);
        }
    );

    switch (user_provider) {
        case "Google":
            return "user";
        case "none":
            throw new Error('user could not be authenticated');
        default:
            return "admin";
    }
}

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

    componentDidMount() {
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
        })

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
        })
        changeClub(this.state.org.ref, this.state.org);
        this.closeInfo();
    }

    async editHandleTag(e) {
        e.preventDefault();
        await this.setState({
            tag: e.target[0].value
        })
        this.closeTag();
    }

    async editHandleEvent(e) {
        e.preventDefault();
        await this.setState({
            event: {
                eventName: e.target[0].value,
                clubsHosting: e.target[1].value,
                location: e.target[2].value,
                time: e.target[3].value,
                pictureURL: e.target[4].value,
                description: e.target[5].value,
                rsvpForm: e.target[6].value
            }
        });
        this.closeEvent();
    }

    handleLogOut() {
        db.auth().signOut().then((result) => {
            this.setState({
                org: null
            })
        });
        this.props.history.push('/admin_login');
    }

    handleEditInfo() {
        this.setState({editInfo: true})
    }

    handleEditTag() {
        this.setState({editTag: true})
    }

    handleEditEvent() {
        this.setState({editEvent: true})
    }

    // Action Methods

    closeInfo() {
        this.setState({
            editInfo: false
        })
    }

    closeTag() {
        this.setState({
            editTag: false
        })
    }

    closeEvent() {
        this.setState({
            editEvent: false
        })
    }

    // container components

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

    render() {
        // only admins should be able to see this page, redirect if the login type is not admin.
        if (check_login_type() === 'user') {
            this.view_switch_login();
        }


        return (
            <div>
                {/*start the rest of the page*/}
                <main className='mt-5 pt-5'>


                    <ButtonGroup vertical>
                        <Button variant='outline-primary filled' onClick={this.handleEditInfo}>Edit Club</Button>
                        {this.modal_edit_clubs()}
                        <Button variant='outline-primary' onClick={this.handleEditTag}>Change Tags</Button>
                        {this.modal_edit_tag()}
                        <Button variant='outline-primary' onClick={this.handleEditEvent}>Edit Event</Button>
                        {this.modal_edit_event()}
                        <Button variant='outline-dark' onClick={this.handleLogOut}>Log Out</Button>
                    </ButtonGroup>
                </main>
            </div>
        );
    }

};

export default AdminHome;