import React from "react";
import "../../css/orgs.css";
import NavBar from "../navbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { getClub, getUser, editUser } from "../cloud";
import db from "../../firebase";

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
    } else {
      const newSubs = this.state.user.subscriptions.filter(
        item => item !== this.state.club_id
      );
      await this.setState({
        user: {
          ...this.state.user,
          subscriptions: newSubs
        }
      });
    }
    this.setState({
      subscribed: !this.state.subscribed
    });
    editUser(this.state.user_id, this.state.user);
  }

  render() {
    return (
      <div>
        <NavBar {...this.props} />

        <div className="container">
          <Card style={{ displaye: "flex" }}>
            <Card.Img
              className="image"
              variant="top"
              src={this.state.club.pictureURL}
            />
            <Card.Body>
              <Card.Title className="clubName">
                <h2>{this.state.club.clubName}</h2>
              </Card.Title>

              <Card.Subtitle
                className="mb-2 text-muted"
                style={{ fontSize: "20px" }}
              >
                {this.state.club.tags.map(tag => (
                  <Button size="sm">{tag}</Button>
                ))}
              </Card.Subtitle>
              <Card.Text>{this.state.club.description}</Card.Text>
              <Card.Subtitle
                className="mb-2 text-muted"
                style={{ fontSize: "20px" }}
              >
                {this.state.club.eventList.map(event => (
                  <Button size="sm">{event}</Button>
                ))}
              </Card.Subtitle>

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
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default Orgs;
