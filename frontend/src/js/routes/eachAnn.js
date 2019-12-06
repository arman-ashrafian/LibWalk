/* eslint-disable */
import React from "react";
import { getClub } from "../cloud";
import Card from "react-bootstrap/Card";
import TimeAgo from "@jshimko/react-time-ago";

/**
 * Defines a component for an announcement. Should only be seen in announcements.js.
 */
class EachAnn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      announcement: this.props.announcement,
      clubRef: this.props.clubRef,
      club: {}
    };
  }

  /**
   * Called when the component is rendered, setup code here.
   */
  componentDidMount() {
    getClub(this.state.clubRef).then(json => {
      if (json === undefined) {
      }
      this.setState({
        club: json
      });
    });
  }

  render() {
    return (
      <div key={this.state.announcement.annReference}>
        <Card
          className="ml-5 mb-5"
          border="warning"
          style={{ fontSize: 14, width: "25rem", height: "10rem" }}
        >
          <Card.Header style={{ backgroundColor: "#006A96", color: "white" }}>
            <strong className="mr-auto">
              {" "}
              📣{this.state.club.clubName} 📣{" "}
            </strong>
          </Card.Header>
          <Card.Body>{this.state.announcement.annDetail}</Card.Body>
          <Card.Footer>
            <strong>
              {" "}
              Last posted <TimeAgo date={this.state.announcement.time} />{" "}
            </strong>
          </Card.Footer>
        </Card>
      </div>
    );
  }
}

export default EachAnn;
