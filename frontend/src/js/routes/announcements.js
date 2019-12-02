import React from "react";
import "../cloud.js";
import "../../css/notifs.css";
import NavBar from "../navbar";
import db from "../../firebase";
import {accessAnnouncements, getAnnouncements, getUser} from "../cloud";
import Col from "react-bootstrap/Col";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";

class Announcements extends React.Component {
    /**
     * Called whenever this component is constructed.
     * @param props parent component properties.
     */
    constructor(props) {
        super(props);
        this._gotSubs = false;
        this.state = {
            userId: "",
            orgs: [],
            announcements: [],
            eachAnnouncement: [],
        };

    };

    /**
     * Called whenever the component is first mounted, setup code.
     */
    componentDidMount() {
        db.auth().onAuthStateChanged(firebaseUser => {
            // first get the user
            if (firebaseUser && firebaseUser.providerData[0].providerId === "google.com") {
                this.setState({userId: firebaseUser.uid});
                getUser(firebaseUser.uid).then(json => {
                    // failure check
                    if (json === undefined) {
                        console.warn('Firebase was unable to get user from database.');
                        alert("You haven't yet subscribed to any organizations!")
                        this.setState({orgs: []})
                    } else if (!('subscriptions' in json) || (json.subscriptions.length === 0)) {
                        alert("You haven't yet subscribed to any organizations!");
                    } else {
                        this.setState({subs: json.subscriptions, user: json});
                        this._gotSubs = true;
                    }
                }).then(this.getAnnouncements);
            } else {
                console.log("Redirecting to login page, admin should not have announcements.");
            }

        });
    }

    /**
     * Once a user is logged in and we have their subs, get all their announcements.
     */
    getAnnouncements = () => {
        if (this.state.announcements !== []) {
            let org_announcements = [];
            if (this.state.subs !== undefined) {
                // get the announcements for each sub
                this.state.subs.forEach(org => {
                    getAnnouncements(org).then(announcements => {
                        if (announcements !== undefined) {

                            announcements.forEach(announcement => {
                                accessAnnouncements(announcement).then(each => {
                                    if (each !== undefined) {
                                        org_announcements.push(each);
                                        console.log('each ' + JSON.stringify(each) + ' curre announcements ' + JSON.stringify(this.state.announcements));

                                    } else {
                                        console.warn('Got bad announcement from backend. ' + each);
                                    }
                                })
                            });
                        } else {
                            console.log('No announcements for org ' + org + ' announcements: ' + announcements);
                        }
                    });
                })
            }
            this.setState({announcements: org_announcements});
            console.log('Successfully updated announcements into state. ' + JSON.stringify(this.state.announcements));
        } else {
            console.log('Announcements were already pulled, refresh page to re-load them, else using cache.');
        }
        this.render();
    };

    /**
     * Makes the entire grid of announcements for a user's subs.
     * @param announcements
     * @returns {*}
     */
    announcement_grid = (announcements) => {
        let grid_items = [];
        let numcols = 4;
        let numrows = announcements.length / numcols;
        numrows = Math.ceil(numrows);

        announcements.forEach(a => {
            grid_items.push(this.announcement_card(a));
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
            <div key={grid.length}>
                <CardDeck> {grid} </CardDeck>
            </div>
        );
    };

    /**
     * Displays one announcement by making a card.
     * @param announcement
     * @returns {*}
     */
    announcement_card = announcement => {
        const elem = (<div key={announcement.annReference}>
            <Card>
                <Card.Header>{announcement.annDetail}</Card.Header>
                <Card.Body>{announcement.details}</Card.Body>
                <Card.Footer>{announcement.time}</Card.Footer>
            </Card>
        </div>);
        return elem;
    };


    render() {
        if (this.state.orgs === undefined) {
            this.setState({
                orgs: []
            });
        }

        console.log('render called ' + JSON.stringify(this.state.announcements));

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
                                {this.announcement_grid(this.state.announcements)}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }

}

export default Announcements;
