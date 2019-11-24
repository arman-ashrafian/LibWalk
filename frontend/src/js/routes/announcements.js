import React from "react";
import "../cloud.js";
import "../../css/notifs.css";
import NavBar from "../navbar";
import db from "../../firebase";
import TimeAgo from "@jshimko/react-time-ago";
import { getUser, getClubs, getAnnouncements } from "../cloud";
import Toast from "react-bootstrap/Toast";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Pagination from "react-bootstrap/Pagination";

class Announcements extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      orgs: []
    };
  }

  componentDidMount() {
    db.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        this.setState({ userId: firebaseUser.uid });
        getUser(firebaseUser.uid).then(json => {
          if ( !('subscriptions' in json) || (json.subscriptions.length === 0) ) {
            alert("YOU HAVE NO SUBSCRIPTIONS DUMMY")
          }
          this.setState({orgs: json.subscriptions});
        })
      } else {
        console.log("Redirecting to login page");
      }
    });
  }

  render() {
    if (this.state.orgs === undefined) {
      this.state = {
        orgs: []
      };
    }

    return (
      <div>
        <NavBar {...this.props} />
        <main className="mt-5 pt-5">
          <div className="container centerPage">
            <div className="row centerPage">
              {/*Display User Information*/}
              <div className="col-sm-12 text-center">
                <h1 className="h1 text-center mb-5">Announcements</h1>
                <h5 className="text-center mb-5">
                  Announcements from organizations you subscribed to are listed
                  below.{" "}
                </h5>
              </div>
              <div className="div-centered">
                {this.club_grid_loop(this.state.orgs)}
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  club_grid_loop = orgs => {
    let grid_items = [];
    let numcols = 4;
    let numrows = 4; //orgs.length / numcols;
    numrows = Math.ceil(numrows);

    orgs.forEach(function(e) {
      grid_items.push(club_grid(e));
    });

    let grid = [];

    for (let i = 0; i <= numrows; i++) {
      let row = [];
      for (let j = 0; j < numcols; j++) {
        row.push(
          <div className="club_grid_component">
            <Col>{grid_items[i * numcols + j]}</Col>
            <div>
              <br />
              <br />
            </div>
          </div>
        );
      }
      grid.push(row);
    }

    return (
      <div>
        <CardDeck> {grid} </CardDeck>
      </div>
    );
  };
}

let club_grid = org => {
  return (
    <Card style={{ width: "80rem", height: "20rem" }} className="text-center">
      <Card.Header>
        <strong style={{ fontSize: 24 }}> {org.clubName}</strong>
        <br />
        <small style={{ fontSize: 16 }}>{org.clubDescription}</small>
      </Card.Header>
      <Card.Body>
        <div className="div-centered">
          <MakeCard />
        </div>
      </Card.Body>
    </Card>
  );
};

function MakeCard() {
  return (
    <Row>
      <Card border="info" style={{ fontSize: 12 }}>
        <Card.Header>
          <strong className="mr-auto" style={{ fontSize: 24 }}>📢</strong>
        </Card.Header>
        <Card.Body>Official Announcement</Card.Body>
        <Card.Footer>
          <strong>Last posted <TimeAgo date="Nov 19, 2019" /></strong>
        </Card.Footer>
      </Card>
      <br />
      <Card border="warning" style={{ fontSize: 12 }}>
        <Card.Header>
          <strong className="mr-auto" style={{ fontSize: 24 }}>📣</strong>
        </Card.Header>
        <Card.Body>Officer Application Is Up</Card.Body>
        <Card.Footer>
            <strong>Last posted <TimeAgo date="Nov 19, 2019" /></strong>
        </Card.Footer>
      </Card>
      <br />
      <Card border="danger" style={{ fontSize: 12 }}>
        <Card.Header>
          <strong className="mr-auto" style={{ fontSize: 24 }}>📌</strong>
        </Card.Header>
        <Card.Body>Official Announcement</Card.Body>
        <Card.Footer>
            <strong>Last posted <TimeAgo date="Nov 19, 2019" /></strong>
        </Card.Footer>
      </Card>
    </Row>
  );
}

export default Announcements;
