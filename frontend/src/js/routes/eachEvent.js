import React from "react";
import "../../css/subs.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { getEvent, changeEvent } from "../cloud";
import { MdEdit } from "react-icons/md";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

class EachEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        event: {
            eventName: "",
            location: "",
            date: "",
            time: "",
            pictureURL: "",
            description: "",
            rsvpForm: "",
            eventReference: this.props.eventId
        },
        showEventDetail: false,
        editEvent: false
    };

    this.redirectToEventDetail = this.redirectToEventDetail.bind(this);
    this.handleEditEvent = this.handleEditEvent.bind(this);
    this.handleSubmitEdit = this.handleSubmitEdit.bind(this);
  }

    componentDidMount() {
        getEvent(this.props.eventId).then(json => {
            this.setState({
                event: {
                    eventName: json["eventName"],
                    description: json["description"],
                    pictureURL: json["pictureURL"],
                    location: json["location"],
                    rsvpForm: json["rsvpForm"],
                    time: json["time"],
                    date: json["date"],
                    eventReference: json['eventReference']
                }
            });
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

    handleEditEvent = () => {
        this.setState({editEvent: true})
    }

    closeModals = () => {
        this.setState({ 
            showEventDetail: false, 
            editEvent: false
        });
    };

    /**
     * Handles what happens when you change a clubs event details
     *
     */
    async handleSubmitEdit(e) {
        e.preventDefault();
        console.log("edit event")
        await this.setState({
            event: {
                ...this.state.event,
                eventName: e.target[0].value,
                location: e.target[1].value,
                date: e.target[2].value,
                time: e.target[3].value,
                pictureURL: e.target[4].value,
                description: e.target[5].value,
                rsvpForm: e.target[6].value,
            }
        })
        await changeEvent(this.state.event.eventReference, this.state.event);
        this.closeModals();
    }

  render() {
    return (
      <div>
        <Card className="text-center" style={{ width: "18rem" }}>
          <Card.Header>
            {this.props.admin ? (
              <a
                onClick={this.handleEditEvent}
                style={{ fontSize: "15px", float: "right", margin: "0" }}
              >
                <MdEdit />
              </a>
            ) : null}
            <Card.Title style={{ fontSize: "30px" }}>
              <a onClick={this.showEventDetail}>{this.state.event.eventName}</a>
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Subtitle
              className="mb-2 text-muted"
              style={{ fontSize: "15px", textAlign: "justify-center" }}
            >
              📍 {this.state.event.location} <br />
              📅 {this.state.event.date} <br />
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
              <Card.Img variant="top" src={this.state.event.pictureURL} />
              <Card.Body>
                <Card.Title style={{ fontSize: "2rem", textAlign: "center" }}>
                  <strong>{this.state.event.eventName}</strong>
                </Card.Title>
                <Card.Subtitle
                  className="mb-2 text-muted"
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    fontSize: "25px"
                  }}
                >
                  📍 {this.state.event.location} &nbsp;&nbsp; 📅{" "}
                  {this.state.event.date} &nbsp;&nbsp; 🕔 {this.state.event.time}
                </Card.Subtitle>
                <Card.Text style={{ textAlign: "justify" }}>
                  {this.state.event.description}
                </Card.Text>
                <div style={{ textAlign: "center" }}>
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

        {/* Edit Event Modal */}
        <Modal
            size="lg"
            show={this.state.editEvent}
            onHide={this.closeModals}
            aria-labelledby="example-modal-sizes-title-lg"
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    Edit Event
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form onSubmit={this.handleSubmitEdit}>
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Event Name" defaultValue={this.state.event.eventName}/>
                    </Form.Group>

                    <Form.Group controlId="formPlace">
                        <Form.Label>Location</Form.Label>
                        <Form.Control type="text" placeholder="Enter Event Location" defaultValue={this.state.event.location}/>
                    </Form.Group>

                    <Form.Group controlId="formTime">
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="date" defaultValue={this.state.event.date}/>
                    </Form.Group>

                    <Form.Group controlId="formTime">
                        <Form.Label>Time (12-hr format) </Form.Label>
                        <Form.Control type="time" defaultValue={this.state.event.time}/>
                    </Form.Group>

                    <Form.Group controlId="formPic">
                        <Form.Label>Picture URL</Form.Label>
                        <Form.Control type="url" placeholder="Enter Event Picture URL" defaultValue={this.state.event.pictureURL}/>
                    </Form.Group>

                    <Form.Group controlId="formDetails">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeholder="Enter Event Descriptions" defaultValue={this.state.event.description}/>
                    </Form.Group>

                    <Form.Group controlId="formRSVP">
                        <Form.Label>RSVP (Google Form, TypeForm, SurveyMonkey, others...)</Form.Label>
                        <Form.Control type="url" placeholder="Enter RSVP URL" defaultValue={this.state.event.rsvpForm}/>
                    </Form.Group>
                    {/*todo add form verification*/}
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
      </div>
    );
  }
}


export default EachEvent;
