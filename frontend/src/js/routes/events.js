import React from "react";
import '../../css/bootstrap.min.css'
import '../../css/mdb.lite.min.css'
import '../../css/style.min.css'
import NavBar from "../navbar";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import {getEvent} from "../cloud";

import { Divider } from "@material-ui/core";

class Events extends React.Component {
    constructor(props) {
        super(props);
		this.state = {
			eventReference: '',
			eventName: '',
			pictureURL: '',
			description: '',
			location: '',
			time: '',
			rsvpForm: ''
		}
    }

	componentDidMount() {
		getEvent('event_id_00').then(eventInfo => {
			this.setState({
				eventName: eventInfo['eventName'],
				pictureURL: eventInfo['pictureURL'],
				description: eventInfo['description'],
				location: eventInfo['location'],
				time: eventInfo['time'],
				rsvpForm: eventInfo['rsvpForm'],
				eventReference: eventInfo['eventReference']
			})
		});
	}

    render() {
        return(
			<div>
				<NavBar {...this.props} />
				<main className='mt-5 pt-5'>
					<div className="container">
						<Card style={{ display: "flex" }}>
							<Card.Img variant="top" src={this.state.pictureURL} />
							<Card.Body>
								<Card.Title style={{fontSize:"80px"}}>
									<strong>{this.state.eventName}</strong>
								</Card.Title>
								<Card.Subtitle className="mb-2 text-muted" style={{fontSize:"20px"}}>
									📍 {this.state.location} | 🕔 {this.state.time}
								</Card.Subtitle>
								<Card.Text>
									{this.state.description}
								</Card.Text>
								<Button variant="primary" onClick={this.state.rsvpForm}>RSVP</Button>
							</Card.Body>
						</Card>
					</div>
				</main>
			</div>
        );
    }
}

export default Events;