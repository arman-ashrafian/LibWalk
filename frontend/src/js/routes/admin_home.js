import React from 'react'
import NavBar from "../navbar";
import {getClubs} from "../cloud";
import {getClub} from "../cloud";
import {getEvent} from "../cloud";
import {changeClub} from "../cloud";
import {changeTag} from "../cloud";
import {getTag} from "../cloud";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import db from "../../firebase.js";
import { FaAlignJustify } from 'react-icons/fa';
import EachSub from './eachSub';

function get_user_uid() {
    let uid = 'none';
    db.auth().onAuthStateChanged(firebaseUser => {
		if(firebaseUser) {
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

	constructor(props) {
        super(props);

        this.state = {
			editInfo: false,
			editTag: false,
			editEvent: false,
			org_id: "",
			tag: "",
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
				eventReference: '',
				description: '',
				eventName: '',
				locaction: '',
				pictureURL: '',
				rsvpForm: '',
				time: ''
			},
			tagInfo: {
				orgs: [],
				tagID: ''
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

	handleEditInfo() {
		this.setState({editInfo: true})
	}

	handleEditTag() {
		this.setState({editTag: true})
	}

	handleEditEvent() {
		this.setState({editEvent: true})
	}

	componentDidMount() {
		db.auth().onAuthStateChanged(firebaseUser => {
			if(firebaseUser) {
				this.setState({
					org_id: firebaseUser.uid
				})
				getClub(firebaseUser.uid).then(clubInfo => {
					console.log(clubInfo)
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
					eventReference: eventInfo['eventReference'],
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
		changeClub(this.state.org.clubReference, this.state.org);
		this.closeInfo();
	}

	async editHandleTag(e) {
		e.preventDefault();
		await this.setState({
			tag: e.target[0].value
		});
		db.firestore().collection("Tags").doc(this.state.tag).get()
			.then((doc) => {
				if(doc.exists) {
					getTag(this.state.tag).then(tagClubs => {
						this.setState({
							tagInfo: {
								orgs: tagClubs['orgs'],
								tagID: tagClubs['tagID']
							}
						})
					})
					if(this.tagInfo.orgs.includes(this.state.org.clubReference) === false) {
						this.tagInfo.orgs.push(this.state.org.clubReference);
						changeTag(this.state.tag, this.tagInfo);
					}
				}
				else {
					this.setState({
						tagInfo: {
							orgs: [this.state.org.clubReference],
							tagID: this.state.tag
						}
					})
					changeTag(this.state.tag, this.state.tagInfo);
				}
			});
		/*
		let i = 0;
		let notExist = true;
		while(i < this.state.org.tags.length) {
			console.log("hi");
			if(this.state.org.tags[i] === this.state.tag) {
				notExist = false;
			}
			i++;
		}
		console.log(this.state.org.tags);
		console.log(notExist);
		if(notExist) {
			this.setState({
				org: {
					clubName: this.state.org.clubName,
					contactEmail: this.state.org.contactEmail,
					pictureURL: this.state.org.pictureURL,
					description: this.state.org.description,
					clubReference: this.state.org.clubReference,
					tags: this.state.org.tags.push(this.state.tag),
					pageURL: this.state.org.pageURL
				}
			});
			console.log(this.state.org.tags);
			console.log(this.state.org.clubReference);
			changeClub(this.state.org.clubReference, this.state.org);
		}*/
		this.closeTag();
	}

	async editHandleEvent(e) {
		e.preventDefault();
		await this.setState({
			event: {
				eventName: e.target[0].value,
				location: e.target[1].value,
				time: e.target[2].value,
				pictureURL: e.target[3].value,
				description: e.target[4].value,
				rsvpForm: e.target[5].value,
				eventReference: this.state.eventReference
			}
		})
		this.closeEvent();
	}

	async editHandleEvent(e) {
		try {
			e.preventDefault();
			db.firestore().collection("Events").doc().get()
				.then((doc) => {

				});
			await this.setState({
				eventName: e.target[0].value,
				location: e.target[1].value,
				time: e.target[2].value,
				pictureURL: e.target[3].value,
				description: e.target[4].value,
				rsvpForm: e.target[5].value,
				eventReference: this.state.event.eventReference
			});
		}
		catch (error) {
			alert(error);
		}
	}

	handleLogOut() {
		db.auth().signOut().then((result) => {
			this.setState({
				org: null
			})
		});
        this.props.history.push('/admin_login');
	}

    render() {

        if (check_login_type() === 'user') {
            this.view_switch_login();
        }

        /*let club = this.get_club_data();

        if (club === undefined)
            club = {name: 'YEET MEATY', desc: 'FUCK THE BACKEND'};*/

		
        return (
            <div>
                {/*start the rest of the page*/}
                <main className='mt-5 pt-5'>
					<img src={this.state.org.pictureURL} />
					<p></p>
                    <h2>{this.state.org.clubName}</h2>
					<div>
						{this.state.org.tags.map(tag => (
						// add club tag stuff here
						<Button size="sm"/*color={random_color()}*/>
							{tag}
						</Button>
						))}
					</div>
					<p></p>
                    <h5 className="text-center mb-5">{this.state.org.description}</h5>
					
					
					<Button onClick={this.handleEditInfo}>Edit Club</Button>
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
									<Form.Control type="name" placeholder="Enter Club Name" defaultValue={this.state.org.clubName}/>
								</Form.Group>
								<Form.Group controlId="formName">
									<Form.Label>Club Email</Form.Label>
									<Form.Control type="name" placeholder="Enter Club Email" defaultValue={this.state.org.contactEmail}/>
								</Form.Group>
								<Form.Group controlId="formImage">
									<Form.Label>Image URL</Form.Label>
									<Form.Control type="name" placeholder="Enter Image URL" defaultValue={this.state.org.pictureURL}/>
								</Form.Group>
								<Form.Group controlId="formName">
									<Form.Label>Description</Form.Label>
									<Form.Control type="name" placeholder="Enter Club Description" defaultValue={this.state.org.description}/>
								</Form.Group>
								<Button variant="primary" type="submit" >
									Submit
								</Button>
							</Form>
						</Modal.Body>
					</Modal>

					<Button onClick={this.handleEditTag}>Edit Tag</Button>
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

						{/*<Modal.Body>
							<Form.Group controlId="formName">
								<Form.Label> {this.state.club.tag} </Form.Label>
							</Form.Group>
						</Modal.Body>*/}

						<Modal.Body>
							<Form onSubmit={this.editHandleTag}>
								<Form.Group controlId="formName">
									<Form.Label>Tag Name</Form.Label>
									<Form.Control type="name" placeholder="Enter Tag Name" />
								</Form.Group>
								<Button variant="primary" type="submit" >
									Submit
								</Button>
							</Form>
							</Modal.Body>
					</Modal>

					<Button onClick={this.handleEditEvent}>Edit Event</Button>
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
									<Form.Control type="name" placeholder="Enter Event Name" defaultValue={this.state.event.ename}/>
								</Form.Group>

								<Form.Group controlId="formPlace">
									<Form.Label>Location</Form.Label>
									<Form.Control type="place" placeholder="Enter Location" defaultValue={this.state.event.loc}/>
								</Form.Group>

								<Form.Group controlId="formTime">
									<Form.Label>Time</Form.Label>
									<Form.Control type="timeS" placeholder="Enter Time" defaultValue={this.state.event.time}/>
								</Form.Group>

								<Form.Group controlId="formPic">
									<Form.Label>Picture</Form.Label>
									<Form.Control type="pic" placeholder="Enter Picture URL" defaultValue={this.state.event.epic}/>
								</Form.Group>

								<Form.Group controlId="formDetails">
									<Form.Label>Details</Form.Label>
									<Form.Control type="details" placeholder="Enter Details" defaultValue={this.state.event.edesc}/>
								</Form.Group>

								<Form.Group controlId="formRSVP">
									<Form.Label>RSVP</Form.Label>
									<Form.Control type="rsvp" placeholder="Enter RSVP URL" defaultValue={this.state.event.rsvp}/>
								</Form.Group>

								<Button variant="primary" type="submit" >
									Submit
								</Button>
							</Form>
						</Modal.Body>        
					</Modal>
					<Button onClick={this.handleLogOut}>Log Out</Button>
                </main>
            </div>
        );
    }

    /***
     * Finds the club from the state of the component
     * @returns {*}
     */
    get_club_data = () => {
        let uid = get_user_uid();
        return this.state.orgs[uid];
    };

    /**
     * If the user is not authorized as an admin, then we just take them to the home page.
     */
    view_switch_login = () => {
        console.log('WARN: Unauthorized user tried to access admin page.');
		this.props.history.push('/home');
	};

};

export default AdminHome;