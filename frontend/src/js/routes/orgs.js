import React from "react";
import "../../css/bootstrap.min.css";
import "../../css/mdb.lite.min.css";
import "../../css/style.min.css";
import NavBar from "../navbar";
import Button from "react-bootstrap/Button";
import ToggleButton from "react-bootstrap/ToggleButton";
import Card from "react-bootstrap/Card";
import { getClub, changeClub, getUser, editUser } from "../cloud";
import db from "../../firebase";
import EachEvent from "./eachEvent";

class Orgs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      club_id: "",
      club: {
        clubName: "",
        clubReference: "",
        contactEmail: "",
        description: "",
        emailList: [],
        eventList: [],
        pageURL: "",
        pictureURL: "",
        announcements: [],
        tags: []
      },
      subscribed: false,
      user_id: "",
      user: {}
    };

    this.handleSubscribe = this.handleSubscribe.bind(this);
  }

  componentDidMount() {
    getClub(this.props.location.state.club_id).then(clubInfo => {
      this.setState({
        club_id: this.props.location.state.club_id,
        club: clubInfo
      });
    });

    db.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        // getUser using userId and check if they're already subscribed
        getUser(firebaseUser.uid).then(json => {
          this.setState({
            user_id: firebaseUser.uid,
            subscribed: json["subscriptions"].includes(this.state.club_id),
            user: json
          });
        });
      } else {
        console.log("Not logged in");
      }
    });
  }

  async handleSubscribe() {
    if (!this.state.subscribed) {
      this.state.user.subscriptions.push(this.state.club_id);
      this.state.club.emailList.push(this.state.user_id);
    } else {
      const newSubs = this.state.user.subscriptions.filter(
        item => item !== this.state.club_id
      );
      const newEmailList = this.state.club.emailList.filter(
        item => item !== this.state.user_id
      );
      console.log(newEmailList);
      await this.setState({
        user: {
          ...this.state.user,
          subscriptions: newSubs
        },
        club: {
          ...this.state.club,
          emailList: newEmailList
        }
      });
    }
    this.setState({
      subscribed: !this.state.subscribed
    });
    editUser(this.state.user_id, this.state.user);
    changeClub(this.state.club_id, this.state.club);
  }

  render() {
    let showEvents = [];
    showEvents = this.state.club.eventList.map(event => {
      return <EachEvent eventId={event} {...this.props} />;
    });
    return (
      <div>
        <NavBar {...this.props} />
        <main className="mt-5 pt-5">
          <div className="container">
            <Card style={{ displaye: "flex" }}>
              <Card.Img variant="top" src={this.state.club.pictureURL} />
              <Card.Body>
                <Card.Title style={{ fontSize: "80px" }}>
                  <strong> {this.state.club.clubName} </strong>
                </Card.Title>
                {this.state.subscribed ? (
                  <Button
                    variant="danger"
                    size="lg"
                    block
                    onClick={this.handleSubscribe}
                  >
                    Unsubscribe
                  </Button>
                ) : (
                  <Button
                    variant="success"
                    size="lg"
                    block
                    onClick={this.handleSubscribe}
                  >
                    Subscribe
                  </Button>
                )}
                <Card.Subtitle
                  className="mb-2 text-muted"
                  style={{ fontSize: "20px" }}
                >
                  {this.state.club.tags.map(tag => (
                    <Button size="sm">{tag}</Button>
                  ))}
                </Card.Subtitle>
                <Card.Text>{this.state.club.description}</Card.Text>
                <div style={{ display: "flex" }}>{showEvents}</div>
              </Card.Body>
            </Card>
          </div>
        </main>
      </div>
    );
  }
}

export default Orgs;
