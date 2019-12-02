import React from "react";
import "../../css/bootstrap.min.css";
import "../../css/mdb.lite.min.css";
import "../../css/style.min.css";
import NavBar from "../navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {getUserEvents} from "../cloud";
import db from "../../firebase";
import EventCard from "./eventCard";
import Spinner from "react-bootstrap/Spinner";

/**
 * This class defines the Events component.
 */
class Events extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userId: "",
            events: null
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
    
    redirectToEventDetail() {
    this.props.history.push({
        pathname: "/events",
        state: {
            event_id: this.state.event.eventReference
        }
    });
    }

    showEventDetail = () => {
        this.setState({showEventDetail: true})
    };

    render() {
        // render the events
        let event = {};
        let eventHTML = [];
        for (const eventKey in this.state.events) {
            event = this.state.events[eventKey];
            eventHTML.push(
            <Row style={{padding: '1em'}}>
                <Col md={{ span: 6, offset: 3 }}>
                <EventCard event={event} {...this.props} />
                </Col>
            </Row>
            );
        }


        return (
            <div>
                <NavBar {...this.props} />
                <main>
                    <h1 className="h1 text-center mb-5" id="header">
                        {" "}
                        Events
                    </h1>
                    {
                        (this.state.events === null) ?
                            <div style={{padding: '1em'}}>
                                <Spinner animation="border" variant="info"/>
                            </div>
                        :
                            eventHTML
                    }
                </main>
            </div>
        );
    }
}

export default Events;
