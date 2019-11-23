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
			eventId: '',
			clubHost: [],
			eventName: '',
			pictureUrl: '',
			description: '',
			location: '',
			time: '',
			rsvp: ''
		}
    }

	componentDidMount() {
		getEvent('event_id_00').then(eventInfo => {
			this.setState({
				eventName: eventInfo['eventName'],
				clubHost: eventInfo['clubsHosting'],
				pictureUrl: eventInfo['pictureURL'],
				description: eventInfo['description'],
				location: eventInfo['location'],
				time: eventInfo['time'],
				rsvp: eventInfo['rsvpForm']
			})
		});
	}

    render() {
        return(
			<div>
			<NavBar {...this.props} />
            <main className='mt-5 pt-5'>
                <div className="container">
                    <Divider />

                    <div className="sub_container">
						
						<Card style={{ display: "flex" }}>
						  <Card.Img variant="top" src={this.state.pictureUrl} />
						  <Card.Body>
							<Card.Title style={{fontSize:"80px"}}>
								<strong>{this.state.eventName}</strong>
							</Card.Title>
							<Card.Subtitle className="mb-2 text-muted" style={{fontSize:"16px"}}>
								{this.state.clubHost}
							</Card.Subtitle>
							<Card.Subtitle className="mb-2 text-muted" style={{fontSize:"20px"}}>
								📍 {this.state.location} | 🕔 {this.state.time}
							</Card.Subtitle>
							<Card.Text>
							  {this.state.description}
							</Card.Text>
							<Button variant="primary" onClick={this.state.rsvp}>RSVP</Button>
						  </Card.Body>
						</Card>
					</div>
                </div>
            </main>
			</div>
        );
    }
}

export default Events;