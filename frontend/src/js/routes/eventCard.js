/* eslint-disable */
import React from "react";
import "../../css/subs.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";


class EventCard extends React.Component {
    constructor(props) {
        super(props);
        // let timestamp = new firebase.firestore.Timestamp(this.props.event.time.seconds, this.props.event.time.nanoseconds);
        // let time = timestamp.toDate().toLocaleTimeString("en-US");
        // let date = timestamp.toDate().toLocaleDateString("en-US");
        // props.event.time = time;
        // props.event.date = date

        this.state = {
            event: props.event,
            showEventDetail: false,
            renderEvent: true
        };

        this.redirectToEventDetail = this.redirectToEventDetail.bind(this);
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

    handleEditEvent = () => {
        this.setState({editEvent: true})
    };


    closeModals = () => {
        this.setState({
            showEventDetail: false
        });
    };


    render() {
        if (this.state.renderEvent) {
            return (
                <div>
                    <Card className="text-center">
                        <Card.Header>
                            <Card.Title style={{fontSize: "30px"}}>
                                <a onClick={this.showEventDetail}>{this.state.event.eventName}</a>
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Subtitle
                                className="mb-2 text-muted"
                                style={{fontSize: "15px", textAlign: "justify-center"}}
                            >
                                📍 {this.state.event.location} <br/>
                                📅 {this.state.event.date} <br/>
                                🕔 {this.state.event.time}
                            </Card.Subtitle>
                            <Card.Text>
                                {this.state.event.description.slice(0, 100) + "..."}
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    {/* Event Detail Modal */}
                    <Modal
                        size="lg"
                        show={this.state.showEventDetail}
                        onHide={this.closeModals}
                        aria-labelledby="example-modal-sizes-title-lg"
                    >
                        <Modal.Header closeButton></Modal.Header>
                        <Modal.Body>
                            <Card border="light">
                                <Card.Img variant="top" src={this.state.event.pictureURL}/>
                                <Card.Body>
                                    <Card.Title style={{fontSize: "2rem", textAlign: "center"}}>
                                        <strong>{this.state.event.eventName}</strong>
                                    </Card.Title>
                                    <Card.Subtitle
                                        className="mb-2 text-muted"
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-around",
                                            alignItems: "center",
                                            fontSize: "20px"
                                        }}
                                    >
                                        📍 {this.state.event.location} &nbsp;&nbsp; 📅{" "}
                                        {this.state.event.date} &nbsp;&nbsp; 🕔 {this.state.event.time}
                                    </Card.Subtitle>
                                    <Card.Text style={{textAlign: "center"}}>
                                        {this.state.event.description}
                                    </Card.Text>
                                    <div style={{textAlign: "center"}}>
                                        <a href={this.state.event.rsvpForm}>
                                            <Button variant="primary" block>
                                                RSVP
                                            </Button>
                                        </a>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Modal.Body>
                    </Modal>
                </div>
            );
        } else {
            return <div></div>
        }
    }
}


export default EventCard;