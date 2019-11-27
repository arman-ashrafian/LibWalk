import React from "react";
import "../../css/subs.css";
import Card from "react-bootstrap/Card";

import {getEvent} from "../cloud";

class EachEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            event_id: this.props.eventId,
            eventName: "",
            eventDescription: "",
            eventPicture: "",
            eventLocation: "",
            eventRSVP: "",
            eventTime: ""
        };

        this.redirectToEventDetail = this.redirectToEventDetail.bind(this)
    }

    componentDidMount() {
        getEvent(this.props.eventId).then(json => {
            console.log(json)
            this.setState({
                event_id: this.props.clubId,
                eventName: json['eventName'],
                eventDescription: json['description'],
                eventPicture: json['pictureURL'],
                eventLocation: json['location'],
                eventRSVP: json['rsvpForm'],
                eventTime: json['time']
            });
        });
    }

    redirectToEventDetail() {
        console.log(this.state.club_id)
        this.props.history.push({
            pathname: "/events",
            state: {
                event_id: this.state.event_id,
            }
        });
    }

    render() {
        return (
            <Card className="text-center" style={{width: '18rem'}}>
                <Card.Header style={{fontSize: "20px"}}> {this.state.eventName} </Card.Header>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted" style={{fontSize: "15px"}}>
                        📍 {this.state.eventLocation} | 🕔
                    </Card.Subtitle>
                    <Card.Text>{this.state.eventDescription}</Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default EachEvent;
