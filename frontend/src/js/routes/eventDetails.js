/* eslint-disable */
import React from "react";
import "../../css/bootstrap.min.css";
import "../../css/mdb.lite.min.css";
import "../../css/style.min.css";
import NavBar from "../navbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import {getUserEvents} from "../cloud";
import db from "../../firebase";

class Events extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: "",
            events: {}
        };
    }

    componentDidMount() {
        db.auth().onAuthStateChanged(firebaseUser => {
            if (
                firebaseUser &&
                firebaseUser.providerData[0].providerId === "google.com"
            ) {
                console.log(firebaseUser.uid);
                // getUser using userId and populate this.state
                getUserEvents(firebaseUser.uid).then(events => {
                    this.setState({
                        userId: firebaseUser.uid,
                        events: events
                    });
                });
            } else {
                console.log("Redirecting to login page");
            }
        });
    }

    render() {
        // render the events
        let event = {};
        let eventHTML = [];
        for (const eventKey in this.state.events) {
            event = this.state.events[eventKey];
            eventHTML.push(
                <Card key={eventKey} style={{width: "20rem"}}>
                    <Card.Img variant="top" src={event.pictureURL}/>
                    <Card.Body>
                        <Card.Title>
                            <strong>{event.eventName}</strong>
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            📍 {event.location} | 🕔
                        </Card.Subtitle>
                        <Card.Text>{event.description}</Card.Text>
                        <Button variant="primary" onClick={event.rsvpForm}>
                            RSVP
                        </Button>
                    </Card.Body>
                </Card>
            );
        }

        return (
            <div>
                <NavBar {...this.props} />
                <main className="mt-5 pt-5">
                    <div className="container">
                        <h1>Events</h1>
                        <h4>Upcoming events from the clubs you are subscribed to</h4>
                        <Row>{eventHTML}</Row>
                    </div>
                </main>
            </div>
        );
    }
}

export default Events;
