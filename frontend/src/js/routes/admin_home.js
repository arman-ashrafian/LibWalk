/* eslint-disable */
import React from 'react'
import {accessAnnouncements, changeClub, changeEvent, changeTag, createAnnouncements, getClub} from "../cloud";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import EachEvent from "./eachEvent"
import EachAnn from "./eachAnn"
import db from "../../firebase.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import ListGroup from "react-bootstrap/ListGroup";



/**
 * Component responsible for creating the Admin Home Page.
 */
class AdminHome extends React.Component {
    // class and overridden methods
    // noinspection DuplicatedCode,DuplicatedCode
    constructor(props) {
        super(props);

        this.state = {
            showMemberList: false,
            editInfo: false,
            editTag: false,
            createEvent: false,
            createAnn: false,
            org_id: "",
            tag: "",
            announcementJSONs: [],
            org: {
                clubReference: '',
                clubName: '',
                contactEmail: '',
                description: '',
                pictureURL: '',
                tags: [],
                pageURL: '',
                announcements: [],
                emailList: [],
                eventList: []
            },
            event: {
				clubHosting: '',
                eventReference: '',
                description: '',
                eventName: '',
                location: '',
                pictureURL: '',
                rsvpForm: '',
				date: '',
                time: {}
            },
            tagInfo: {
                clubs: [],
                tagID: ''
            },
            announcement: {
                annDetail: '',
                time: '',
                annReference: ''
            },
            members: []
        };
        this.closeInfo = this.closeInfo.bind(this);
        this.closeTag = this.closeTag.bind(this);
        this.closeEvent = this.closeEvent.bind(this);
        this.closeAnn = this.closeAnn.bind(this);
        this.handleCreateAnn = this.handleCreateAnn.bind(this);
        this.handleEditInfo = this.handleEditInfo.bind(this);
        this.handleEditTag = this.handleEditTag.bind(this);
        this.editHandleClub = this.editHandleClub.bind(this);
        this.editHandleTag = this.editHandleTag.bind(this);
        this.editHandleCreateEvent = this.editHandleCreateEvent.bind(this);
        this.handleLogOut = this.handleLogOut.bind(this);
        this.editHandleCreateAnn = this.editHandleCreateAnn.bind(this);
        this.showMembershipList = this.showMembershipList.bind(this);
    };

    /**
     * Set-up function that is called when the user is first directed to the
     * admin home page
     */
    componentDidMount() {
        // This code will get the admin's information to display on the page and store it in state
        db.auth().onAuthStateChanged(firebaseUser => {
            if (firebaseUser && firebaseUser.providerData[0].providerId === "password") {
                this.setState({
                    org_id: firebaseUser.uid
                });
                getClub(firebaseUser.uid).then(clubInfo => {
                    if (clubInfo === undefined) {
                        this.setState({
                            clubReference: 'Failure getClub()',
                            clubName: 'Failure getClub()',
                            contactEmail: 'Failure getClub()',
                            description: 'Failure getClub()',
                            pictureURL: 'Failure getClub()',
                            tags: 'Failure getClub()',
                            pageURL: 'Failure getClub()',
                            emailList: 'Failure getClub()',
                            announcements: 'Failure getClub()'

                        });
                        //alert("Firebase usage exceeded, refresh page in a minute.");
                        return;
                    } else {
                        this.setState({
                            org: clubInfo
                        })
                        let announcementJSONs = []
                        this.state.org.announcements.slice(0, 3).forEach(announcement => {
                            accessAnnouncements(announcement).then(json =>{
                                announcementJSONs.push(json)
                                this.setState({
                                    announcementJSONs: announcementJSONs
                                })
                            })
                        })

                    }

                })
            }
        });

    }

    // Handler Methods
    /**
     * Handles what happens when you change a club's details.
     */
    async editHandleClub(e) {
        e.preventDefault();
        await this.setState({
            org: {
                ...this.state.org,
                clubName: e.target[0].value,
                contactEmail: e.target[1].value,
                pictureURL: e.target[2].value,
                description: e.target[3].value,
            }
        });
        await changeClub(this.state.org.clubReference, this.state.org);
        alert('Updated');
        this.closeInfo();
    };

    async deleteTag(e) {
        await this.setState({
            tag: e
        });
        // Remove tag from club
        const newTags = [...this.state.org.tags];
        const index = newTags.indexOf(this.state.tag.toLowerCase());
        if (index > -1) {
            newTags.splice(index, 1);
        }

        await this.setState({
            org: {
                ...this.state.org,
                tags: newTags
            }
        });

        // Remove club from tag
        const newTagClubs = [...this.state.tagInfo.clubs];
        const clubIndex = newTagClubs.indexOf(this.state.org.clubReference);
        if (clubIndex > -1) {
            newTagClubs.splice(clubIndex, 1);
        }

        await this.setState({
            tagInfo: {
                clubs: newTagClubs,
                tagID: this.state.tag
            }
        })

    }

    async addTag(e) {
        e.preventDefault();
        //console.log(e)
        await this.setState({
            tag: e.target[0].value.toLowerCase()
        });

        //add tag to club
        if (this.state.org.tags.includes(this.state.tag) === false) {
            await this.state.org.tags.push(this.state.tag);
        }

        //add club to tag
        if (this.state.tagInfo.clubs.includes(this.state.org.clubReference) === false) {
            await this.state.tagInfo.clubs.push(this.state.org.clubReference);
        }

        await this.setState({
            tags: [...this.state.tagInfo.clubs]
        });
    }

    /**
     * Handles what happens when you change a club tag
     *
     */
    async editHandleTag() {
        await changeTag(this.state.tag, this.state.tagInfo);
        await changeClub(this.state.org.clubReference, this.state.org);
        this.closeTag();
    };

    /**
     * Handles what happens when you create an event for a club.
     *
     */
    async editHandleCreateEvent(e) {
        e.preventDefault();
        if (!e.target[0].value || !e.target[1].value || !e.target[2].value || !e.target[3].value ||
            !e.target[5].value) {
            alert('Please make sure to have name, location, date, time, and description');
            return;
        }
		let date = new Date(e.target[2].value + "T" + e.target[3].value + ":00");
		var firebase = require('firebase');
		let timeStamp = new firebase.firestore.Timestamp.fromDate(date);
        await this.setState({
            event: {
				clubHosting: this.state.org.clubReference,
                eventName: e.target[0].value,
                location: e.target[1].value,
				date: e.target[2].value,
                time: timeStamp,
                pictureURL: e.target[4].value,
                description: e.target[5].value,
                rsvpForm: e.target[6].value,
                eventReference: this.state.org.clubReference + e.target[0].value + e.target[2].value,
                clubHosting: this.state.org_id
            }
        });
        await db.firestore().collection("Events").doc(this.state.event.eventReference).get()
            .then((doc) => {
                if (doc.exists) {
                    alert('You already have an event like this');
                } else {
                    changeEvent(this.state.event.eventReference, this.state.event);
                    alert('Event Created');
                    this.closeCEvent();
			window.location.reload();
                }
            });

        const newEventList = [...this.state.org.eventList];
        newEventList.push(this.state.event.eventReference);
        this.setState({
            org: {
                ...this.state.org,
                eventList: newEventList
            }
        });
        await changeClub(this.state.org.clubReference, this.state.org)
    }

    /**
     * Handles what happens when you create an announcement for a club.
     *
     */
    async editHandleCreateAnn(e) {
        e.preventDefault();
        if (!e.target[0].value || !e.target[1].value) {
            alert('Please make sure to have announcement, and time');
            return;
        }
        await this.setState({
            announcement: {
                annDetail: e.target[0].value,
                time: e.target[1].value,
                annReference: this.state.org.clubReference + e.target[0].value
            }

        });
        await db.firestore().collection("Announcements").doc(this.state.announcement.annReference).get()
            .then((doc) => {
                if (doc.exists) {
                    alert('You already have an announcement like this');

                } else {
                    createAnnouncements(this.state.announcement.annReference, this.state.announcement);
                    alert('Announcement Created');
                    this.closeAnn();
                }

            });

        const newAnnList = [...this.state.org.announcements];
        newAnnList.unshift(this.state.announcement.annReference);
        this.setState({
            org: {
                ...this.state.org,
                announcements: newAnnList
            }
        });
        await changeClub(this.state.org.clubReference, this.state.org)
        window.location.reload()
    }

    /**
     * Handles the authorization logic for logging out
     */
    handleLogOut() {
        db.auth().signOut().then(() => {
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
     * Handles the state change on creating an organization's event.
     */
    handleCreateEvent = () => {
        this.setState({createEvent: true})
    };

    /**
     * Handles the state change when you edit and org's announcement.
     */
    handleCreateAnn = () => {
        this.setState({createAnn: true})
    };

    /**
     * Handles the state change when you edit and org's announcement.
     */
    showMembershipList = () => {
        this.setState({
            showMemberList: true
        })
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

    /**
     * Changes the state for helping render certain elements
     */
    closeCEvent = () => {
        this.setState({
            createEvent: false
        })
    };

    /**
     * Changes the state for helping render certain elements
     */
    closeAnn = () => {
        this.setState({
            createAnn: false
        })
    };

    closeMembershipList = () => {
        this.setState({
            showMemberList: false
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
                {this.modal_create_event()}
                {this.modal_create_ann()}
                {this.modal_membership_list()}

                {/*Card that contains the buttons*/}
                <Card>
                    <Card.Header style={{backgroundColor: '#006A96', color: 'white'}}>Settings</Card.Header>

                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <Card.Link onClick={this.handleEditInfo} href={'#'}>Edit Club</Card.Link></ListGroup.Item>
                        <ListGroup.Item>
                            <Card.Link onClick={this.handleEditTag} href={'#'}>Edit Tags</Card.Link></ListGroup.Item>
                        <ListGroup.Item>
                            <Card.Link onClick={this.handleCreateEvent} href={'#'}>Create
                                Event</Card.Link></ListGroup.Item>
                        <ListGroup.Item>
                            <Card.Link onClick={this.handleCreateAnn} href={'#'}>Create
                                Announcement</Card.Link></ListGroup.Item>
                        <ListGroup.Item>
                            <Card.Link onClick={this.showMembershipList} href={'#'}> Membership List
                            </Card.Link></ListGroup.Item>
                        <ListGroup.Item>
                            <Card.Link onClick={this.handleLogOut} href={'#'}>Log Out</Card.Link></ListGroup.Item>
                    </ListGroup>
                </Card>
            </div>
        )
    };

    // modals


    /**
     * Generates the jsx code to create and handle logic for a modal component to edit a club's profile data.
     * @returns {*}
     */
    modal_edit_tag = () => {
        return (<div>
            <Modal
                size="sm"
                show={this.state.editTag}
                onHide={this.closeTag}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        Edit Tags
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {this.state.org.tags.map(tag => (
                        <Button size="sm" variant="danger" onClick={() => this.deleteTag(tag)}>
                            {tag}
                        </Button>
                    ))}

                    <Form onSubmit={(e) => this.addTag(e) & this.editHandleTag}>
                        <Form.Group controlId="formName">
                            <Form.Control type="name" placeholder="Add Tag"/>
                        </Form.Group>
                    </Form>
                    <Button variant="success" type="button" onClick={this.editHandleTag}>
                        Done
                    </Button>
                </Modal.Body>
            </Modal>

        </div>);
    };

    modal_membership_list = () => {
        return (<div>
            <Modal
                show={this.state.showMemberList}
                onHide={this.closeMembershipList}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        Membership List
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {this.state.org.emailList.map(email => (
                        <p>{email}</p>
                    ))}
                    <Button variant="success" type="button" onClick={this.closeMembershipList}>
                        Done
                    </Button>
                </Modal.Body>
            </Modal>

        </div>);
    };

    /**
     * Generates the jsx code to create and handle logic for a modal component to edit a club's tag.
     * @returns {*}
     */
    modal_edit_clubs = () => {
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
     * Generates the jsx code to create and handle logic for a modal component to create an event.
     * @returns {*}
     */
    modal_create_event = () => {
        return (
            <div>
                <Modal
                    size="lg"
                    show={this.state.createEvent}
                    onHide={this.closeCEvent}
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                            Create Event
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form onSubmit={this.editHandleCreateEvent}>
                            <Form.Group controlId="formName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Event Name"/>
                            </Form.Group>

                            <Form.Group controlId="formPlace">
                                <Form.Label>Location</Form.Label>
                                <Form.Control type="text" placeholder="Enter Event Location"/>
                            </Form.Group>

                            <Form.Group controlId="formTime">
                                <Form.Label>Date</Form.Label>
                                <Form.Control type="date"/>
                            </Form.Group>

                            <Form.Group controlId="formTime">
                                <Form.Label>Time (12-hr format) </Form.Label>
                                <Form.Control type="time"/>
                            </Form.Group>

                            <Form.Group controlId="formPic">
                                <Form.Label>Picture</Form.Label>
                                <Form.Control type="url" placeholder="Enter Event Picture URL"/>
                            </Form.Group>

                            <Form.Group controlId="formDetails">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" placeholder="Enter Event Descriptions"/>
                            </Form.Group>

                            <Form.Group controlId="formRSVP">
                                <Form.Label>RSVP (Google Form, TypeForm, SurveyMonkey, others...)</Form.Label>
                                <Form.Control type="url" placeholder="Enter RSVP URL"/>
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
     * Generates the jsx code to create and handle logic for a modal component to edit a clubs events.
     * @returns {*}
     */
    modal_create_ann = () => {
        return (
            <div>
                <Modal
                    size="lg"
                    show={this.state.createAnn}
                    onHide={this.closeAnn}
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                            Create Announcement
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form onSubmit={this.editHandleCreateAnn}>
                            <Form.Group controlId="formName">
                                <Form.Label>Announcement</Form.Label>
                                <Form.Control type="name" placeholder="Enter Announcement"/>
                            </Form.Group>

                            <Form.Group controlId="formTime">
                                <Form.Label>Time Created (this will be auto-generated for you)</Form.Label>
                                <Form.Control type="timeS" defaultValue={new Date()}/>
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
     * Element for the main organization view.
     */
    admin_panel_view = () => {
        //console.log('Org Data' + JSON.stringify(this.state.org));
        let showEvents = [];
        let showAnnouncements = [];
        if (this.state.org.eventList !== undefined) {
            showEvents = this.state.org.eventList.map(event => {
                return <EachEvent eventId={event} admin={true} clubId={this.state.org_id}{...this.props} />;
            });
        }

        if (this.state.org.announcements !== undefined) {
            showAnnouncements = this.state.announcementJSONs.map(announcement => {
                return <EachAnn announcement={announcement} clubRef={this.state.org_id}{...this.props}  />;
            });
        }
        return (
            <div>
                <Card style={{width: 'flex'}}>
                    <Card.Img src={this.state.org.pictureURL} style={{
                        width: '100%',
                        height: '15vw',
                        objectFit: 'cover'
                    }}/>
                    {/* <Card.Header style={{backgroundColor: '#006A96', color: 'white'}}>About Your Club</Card.Header> */}

                    <Card.Body>

                        <Card.Title style={{fontSize: "2rem"}}>{this.state.org.clubName}</Card.Title>

                        <Card.Subtitle>{this.state.org.contactEmail} </Card.Subtitle>

                        {this.state.org.tags.map(tag => (
                            <Button size="sm">
                                {tag}
                            </Button>
                        ))}

                        <Card.Text>
                            {this.state.org.description}
                        </Card.Text>

                        <div style={{display: "flex", justifyContent: "space-around", flexWrap: "wrap"}}>
                            {showEvents}
                        </div>
                        <div className={"mt-5"} style={{display: "flex", justifyContent: "space-around", flexWrap: "wrap"}}>
                            {showAnnouncements}
                        </div>

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
                <main>
                    <Container>
                        {/*<Row style={{flex: 5}}>*/}
                        <Row>
                            {/*<Col style={{flex: 8}}>*/}
                            <Col sm={4} lg={8} md={8}>
                                {this.admin_panel_view()}
                            </Col>
                            {/*<Col style={{flex: 2}}>*/}
                            <Col sm={4} lg={[2]} md={1}>
                                {this.button_container()}
                            </Col>
                        </Row>

                    </Container>


                </main>
            </div>
        );
    }


}

export default AdminHome;
