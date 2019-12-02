import React from "react";
import "../../css/orgs.css";
import NavBar from "../navbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { changeClub, editUser, getClub, getUser } from "../cloud";
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

  /* Update user data from Firebase*/
  componentDidMount() {
    getClub(this.props.location.state.club_id).then(clubInfo => {
      this.setState({
        club_id: this.props.location.state.club_id,
        club: clubInfo
      });
    });

    /* Authentication */
    db.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser && firebaseUser.providerData[0].providerId === "google.com") {
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

  /* Check what clubs user subcribe to */
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
    /* Show all the clubs that user subcribe to */
    let showEvents = [];
    showEvents = this.state.club.eventList.map(event => {
      return <EachEvent eventId={event} admin={false} {...this.props} />;
    });

    /* Styling the club discription */
    const clubDescription = {
      fontFamily: "Roboto",
      textAlign: "left",
      fontWeight: "bold",
      fontSize: "16px",
      fontStyle: "italic",
      paddingLeft: "50px",
      paddingRight: "50px"
    };

    return (
      <div className="body">
        <NavBar {...this.props} />
        <div className="container">
          <Card>
            {/*Show club photo*/}
            <Card.Img
              variant="top"
              className="image"
              src={this.state.club.pictureURL}
            />
            <Card.Body>
              {/*Show club name*/}
              <Card.Title>
                <h2 className="clubName"> {this.state.club.clubName} </h2>
              </Card.Title>

              <Card.Subtitle style={{ fontSize: "20px" }}>
                {this.state.club.tags.map(tag => (
                  <Button size="sm">{tag}</Button>
                ))}
              </Card.Subtitle>

              {/* show club description*/}
              <Card.Text style={clubDescription}>
                {this.state.club.description}
              </Card.Text>

              {/*show the subcribe button */}
              {this.state.subscribed ? (
                <Button
                  variant="danger"
                  size="lg"
                  block
                  onClick={this.handleSubscribe}
                  className="sub"
                >
                  Unsubscribe
                </Button>
              ) : (
                <Button
                  variant="success"
                  size="lg"
                  block
                  onClick={this.handleSubscribe}
                  className="sub"
                >
                  Subscribe
                </Button>
              )}

              {/*Show events from the clubs */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap"
                }}
              >
                {showEvents}
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default Orgs;
