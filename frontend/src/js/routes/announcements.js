import React, { useState } from "react";
import NavBar from "../navbar";
<<<<<<< HEAD
import Toast from 'react-bootstrap/Toast'

import '../../css/notifs.css'
import {getUser, getAnnouncements} from "../cloud";
=======
import Toast from "react-bootstrap/Toast";
import ToastHeader from "react-bootstrap/ToastHeader";
import ToastBody from "react-bootstrap/ToastBody";
import "../../css/notifs.css";
import { getClubs } from "../cloud";
>>>>>>> 53ad9844204ef241430fc952539d685c77905009
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Pagination from "react-bootstrap/Pagination";
<<<<<<< HEAD
import '../cloud.js'
import TimeAgo from '@jshimko/react-time-ago';
import db from "../../firebase";

class Announcements extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userId: "",
            orgs: []
        };

        // GET /getClubs & set the state when the api response is recieved
        getUser(this.state.userId).then((json) => {
            this.setState({orgs: json.subscriptions});
        });

        if(this.state.orgs === undefined) {
            this.state = {
                orgs: []
            };
        }
    };

    componentDidMount() {
        db.auth().onAuthStateChanged(firebaseUser => {
            if( firebaseUser) {
                this.setState({ userId: firebaseUser.uid });
            } else {
                console.log("Redirecting to login page")
            }

        });
    }

    render() {
        if(this.state.orgs === undefined) {
            this.state = {
                orgs: []
            }
        }
=======
import "../cloud.js";
import TimeAgo from "@jshimko/react-time-ago";

class Announcements extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      orgs: []
    };

    // GET /getClubs & set the state when the api response is recieved
    getClubs().then(json => {
      this.setState({ orgs: json.clubs });
    });
>>>>>>> 53ad9844204ef241430fc952539d685c77905009

    if (this.state.orgs === undefined) {
      this.state = {
        orgs: []
      };
    }
  }

  render() {
    if (this.state.orgs === undefined) {
      this.state = {
        orgs: []
      };
    }

    return (
      <div>
        <main className="mt-5 pt-5">
          <NavBar {...this.props} />
          <div className="container centerPage">
            <div className="row centerPage">
              {/*Display User Information*/}
              <div className="col-sm-12 text-center">
                <h1 className="h1 text-center mb-5">Announcements</h1>
                <h5 className="text-center mb-5">
                  Announcements from organizations you subscribe to are listed
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

<<<<<<< HEAD
    let club_grid = (org) => {
        return (
            <Card border="info" style={{width: '20rem', height: '40rem'}} className='text-center'>
                <Card.Header><strong>{org.clubName}</strong></Card.Header>
                <Card.Body>
                    <div className="div-centered">
                        <MakeCard />
                    </div>
                </Card.Body>
            </Card>
        )
    };

    function MakeCard() {
        return (
            <Col>
                <Card style={{fontSize: 12}}>
                    <Card.Header>
                        <strong className="mr-auto">Notification</strong>
                    </Card.Header>
                    <Card.Body>Pizza Night</Card.Body>
                    <Card.Footer>Last posted <TimeAgo date='Nov 19, 2019' /></Card.Footer>
                </Card>
                <br />
                <Card style={{fontSize: 12}}>
                    <Card.Header>
                        <strong className="mr-auto">Notification</strong>
                    </Card.Header>
                    <Card.Body> Free Boba Tomorrow Night</Card.Body>
                    <Card.Footer>Last posted <TimeAgo date='Nov 19, 2019' /></Card.Footer>
                </Card>
                <br />
                <Card style={{fontSize: 12}}>
                    <Card.Header>
                        <strong className="mr-auto">Notification</strong>
                    </Card.Header>
                    <Card.Body>First Meeting Starts @ 12pm on 11/11/2019</Card.Body>
                    <Card.Footer>Last posted <TimeAgo date='Nov 19, 2019' /></Card.Footer>
                </Card>
            </Col>
        );
    }
=======
let club_grid = org => {
  return (
    <Card
      border="info"
      style={{ width: "20rem", height: "26rem" }}
      className="text-center"
    >
      <Card.Header>{org.clubName}</Card.Header>
      <Card.Body>
        <MakeToast />
      </Card.Body>
    </Card>
  );
};

function MakeToast() {
  const [showA, setShowA] = useState(true);
  const [showB, setShowB] = useState(true);
  const [showC, setShowC] = useState(true);

  const toggleShowA = () => setShowA(!showA);
  const toggleShowB = () => setShowB(!showB);
  const toggleShowC = () => setShowC(!showC);

  return (
    <Col>
      <Toast show={showA} onClose={toggleShowA}>
        <Toast.Header>
          <strong className="mr-auto">Notification</strong>
          <small>
            <TimeAgo date="Nov 19, 2019" />
          </small>
        </Toast.Header>
        <Toast.Body>Pizza Night</Toast.Body>
      </Toast>

      <Toast show={showB} onClose={toggleShowB}>
        <Toast.Header>
          <strong className="mr-auto">Notification</strong>
          <small>
            <TimeAgo date="Nov 19, 2019" />
          </small>
        </Toast.Header>
        <Toast.Body> Free Boba Tomorrow Night</Toast.Body>
      </Toast>

      <Toast show={showC} onClose={toggleShowC}>
        <Toast.Header>
          <strong className="mr-auto">Notification</strong>
          <small>
            <TimeAgo date="Nov 19, 2019" />
          </small>
        </Toast.Header>
        <Toast.Body>First Meeting Starts @ 12pm on 11/11/2019</Toast.Body>
      </Toast>
    </Col>
  );
}
>>>>>>> 53ad9844204ef241430fc952539d685c77905009

export default Announcements;
