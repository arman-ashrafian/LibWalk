import React from "react";
import "../../css/subs.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { getEvent } from "../cloud";
import { MdEdit } from "react-icons/md";
import Modal from "react-bootstrap/Modal";

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
      eventTime: "",
      showEventDetail: false
    };

    this.redirectToEventDetail = this.redirectToEventDetail.bind(this);
  }

  componentDidMount() {
    getEvent(this.props.eventId).then(json => {
      this.setState({
        event_id: this.props.clubId,
        eventName: json["eventName"],
        eventDescription: json["description"],
        eventPicture: json["pictureURL"],
        eventLocation: json["location"],
        eventRSVP: json["rsvpForm"],
        eventTime: json["time"],
        eventDate: json["date"]
      });
    });
    console.log(typeof this.state.eventTime);
  }

  redirectToEventDetail() {
    this.props.history.push({
      pathname: "/events",
      state: {
        event_id: this.state.event_id
      }
    });
  }

  showEventDetail = () => {
    this.setState({ showEventDetail: true });
    console.log(this.showEventDetail);
  };

  // Action Methods
  /**
   * Changes the state for helping render certain elements.
   */

  closeEventDetail = () => {
    this.setState({ showEventDetail: false });
  };

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
              <a onClick={this.showEventDetail}>{this.state.eventName}</a>
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Subtitle
              className="mb-2 text-muted"
              style={{ fontSize: "15px", textAlign: "justify-center" }}
            >
              📍 {this.state.eventLocation} <br />
              📅 {this.state.eventDate} <br />
              🕔 {this.state.eventTime}
            </Card.Subtitle>
            <Card.Text>
              {this.state.eventDescription.slice(0, 100) + "..."}
            </Card.Text>
          </Card.Body>
        </Card>

        <Modal
          size="lg"
          show={this.state.showEventDetail}
          onHide={this.closeEventDetail}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <Card border="light" style={{ display: "flex" }}>
              <Card.Img variant="top" src={this.state.eventPicture} />
              <Card.Body>
                <Card.Title style={{ fontSize: "80px", textAlign: "center" }}>
                  <strong>{this.state.eventName}</strong>
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
                  📍 {this.state.eventLocation} &nbsp;&nbsp; 📅{" "}
                  {this.state.eventDate} &nbsp;&nbsp; 🕔 {this.state.eventTime}
                </Card.Subtitle>
                <Card.Text style={{ textAlign: "justify" }}>
                  {this.state.eventDescription}
                </Card.Text>
                <div style={{ textAlign: "center" }}>
                  <a href={this.state.eventRSVP}>
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
  }
}

export default EachEvent;
