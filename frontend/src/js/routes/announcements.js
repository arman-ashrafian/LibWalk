import React from "react";
import "../cloud.js";
import "../../css/notifs.css";
import NavBar from "../navbar";
import db from "../../firebase";
import TimeAgo from "@jshimko/react-time-ago";
import {accessAnnouncements, getAnnouncements, getUser} from "../cloud";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";

class Announcements extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userId: "",
            orgs: [],
            announcements: [],
            annDetail: "",
            time: "",
            annReference: ""
        };
        this.club_grid_loop = this.club_grid_loop.bind(this);
    };

    componentDidMount() {
        db.auth().onAuthStateChanged(firebaseUser => {
            if (firebaseUser && firebaseUser.providerData[0].providerId === "google.com") {
                this.setState({userId: firebaseUser.uid});
                getUser(firebaseUser.uid).then(json => {
                    if (!('subscriptions' in json) || (json.subscriptions.length === 0)) {
                        alert("You haven't yet subscribed to any organizations!")
                    }
                    //ADD THIS BACK LATER
                    this.setState({orgs: json.subscriptions});
                    console.log(this.state.orgs)

                });
                getAnnouncements("7udUJPGbD4bAaxAdjzq7JCGnqI42").then(anns => {
                    if ((anns === undefined) || (anns.length === 0)) {
                        this.setState({announcements: ''});
                    }
                    this.setState({announcements: anns});
                    console.log(this.state.announcements)
                });

                accessAnnouncements("7udUJPGbD4bAaxAdjzq7JCGnqI42Acapella Recruit").then(annInfo => {
                    if ((annInfo === undefined)) {
                        this.setState({
                            annDetail: '',
                            time: '',
                            annReference: ''
                        })
                    } else {
                        this.setState({
                            annDetail: annInfo['annDetail'],
                            time: annInfo['time'],
                            annReference: annInfo['annReference']
                        })
                    }
                    console.log(this.state.annDetail)
                });

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

    club_grid_loop = (clubs) => {
        let grid_items = [];
        let numcols = 4;
        let numrows = clubs.length / numcols;
        numrows = Math.ceil(numrows);

        clubs.forEach(function (e) {
            grid_items.push(club_grid(e));
            console.log('club pushed in announcements' + e);

            getAnnouncements(e).then(anns => {
                if ((anns === undefined) || (anns.length === 0)) {
                    this.setState({announcements: ''});
                } else {
                    this.setState({announcements: anns});
                    console.log('got announcements' + this.state.announcements)
                }
            });
        });

        let grid = [];

        for (let i = 0; i <= numrows; i++) {
            let row = [];
            for (let j = 0; j < numcols; j++) {
                row.push(
                    <div className="club_grid_component">
                        <Col>{grid_items[i * numcols + j]}</Col>
                        <div>
                            <br/>
                            <br/>
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
    // org = Object.values(org)[0];
    return (
        <Card style={{width: "80rem", height: "20rem"}} className="text-center">
            <Card.Header>
                <strong style={{fontSize: 24}}> {org.clubName}</strong>
                <br/>
                <small style={{fontSize: 16}}>{org.clubDescription}</small>
            </Card.Header>
            <Card.Body>
                <div className="div-centered">
                    <Row>
                        <Card border="info" style={{fontSize: 12}}>
                            <Card.Header>
                                <strong className="mr-auto" style={{fontSize: 24}}>📢</strong>
                            </Card.Header>
                            <Card.Body>{111}</Card.Body>
                            <Card.Footer>
                                <strong>Last posted <TimeAgo date="Nov 25, 2019"/></strong>
                            </Card.Footer>
                        </Card>
                        <br/>
                        <Card border="warning" style={{fontSize: 12}}>
                            <Card.Header>
                                <strong className="mr-auto" style={{fontSize: 24}}>📣</strong>
                            </Card.Header>
                            <Card.Body>{222}</Card.Body>
                            <Card.Footer>
                                <strong>Last posted <TimeAgo date="Nov 19, 2019"/></strong>
                            </Card.Footer>
                        </Card>
                        <br/>
                        <Card border="danger" style={{fontSize: 12}}>
                            <Card.Header>
                                <strong className="mr-auto" style={{fontSize: 24}}>📌</strong>
                            </Card.Header>
                            <Card.Body>{333}</Card.Body>
                            <Card.Footer>
                                <strong>Last posted <TimeAgo
                                    date="Tue Nov 26 2019 22:30:14 GMT-0800 (Pacific Standard Time)"/></strong>
                            </Card.Footer>
                        </Card>
                    </Row>
                </div>
            </Card.Body>
        </Card>
    );
};

export default Announcements;

//This function get the "announcements" field inside Clubs
// getAnnouncements(this.state.orgs).then(anns => {
//     if ((anns === undefined)) {
//         this.setState({
//             announcements: ''
//         })
//     } else {
//         this.setState({
//             announcements: anns['announcements']
//         })
//     }
// });
// //This function get the announcement details inside Announcements
// accessAnnouncements(this.state.orgs.announcements).then(annInfo => {
//     if ((annInfo === undefined)) {
//         this.setState({
//             annDetail: '',
//             time: '',
//             annReference: ''
//         })
//     } else {
//         this.setState({
//             annDetail: annInfo['annDetail'],
//             time: annInfo['time'],
//             annReference: annInfo['annReference']
//         })
//     }
// });
