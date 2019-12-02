import React from "react";
import "../cloud.js";
import "../../css/notifs.css";
import NavBar from "../navbar";
import db from "../../firebase";
import {accessAnnouncements, getAnnouncements, getUser} from "../cloud";
import CardDeck from "react-bootstrap/CardDeck";
import EachAnn from "./eachAnn";

class Announcements extends React.Component {
    /**
     * Called whenever this component is constructed.
     * @param props parent component properties.
     */
    constructor(props) {
        super(props);
        this.state = {
            userId: "",
            orgs: [],
            announcements: {},
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
                        alert("Firebase usage exceeded, refresh page in a minute.")
                        this.setState({orgs: []})
                    } else if (!('subscriptions' in json) || (json.subscriptions.length === 0)) {
                        alert("You haven't yet subscribed to any organizations!");
                    } else {
                        this.setState({subs: json.subscriptions, user: json});
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
        let announcements_list = {};
        if (this.state.announcements !== {}) {
            if (this.state.subs !== undefined) {
                // get the announcements for each sub
                this.state.subs.forEach(org => {
                    announcements_list[org] = [];
                    getAnnouncements(org).then(announcements => {
                        if (announcements !== undefined) {
                            announcements.forEach(announcement => {
                                accessAnnouncements(announcement).then(each => {
                                    if (each !== undefined) {
                                        announcements_list[org].push(each);
                                        this.setState({announcements: announcements_list});
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
            this.setState({});
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
        // dict of club: announcement pairs
        let grid_items = {};

        Object.keys(announcements).forEach(clubname => {
            grid_items[clubname] = [];
        });

        Object.keys(announcements).forEach((clubref) => {
            // convert the first 3 announcements
            announcements[clubref].slice(0, 3).forEach(ann => {
                grid_items[clubref].push(this.announcement_card(clubref, ann));
            });
        });

        // jsx rows to be rendered
        let grid = [];

        Object.entries(grid_items).forEach((k, v) => {
            grid.push(v)
        });

        return (
            <div>
                <div key={grid.length}>
                    <CardDeck>{Object.values(grid_items)}</CardDeck>
                </div>
            </div>
        );
    };

    /**
     * Displays one announcement by making a card.
     * @param announcement
     * @returns {*}
     */
    announcement_card = (clubref, announcement) => {
        return(<EachAnn announcement={announcement} clubRef={clubref} {...this.props} />);
    };

    render() {
        return (
            <div>
                <NavBar {...this.props} />
                <main className="mt-1 pt-5">
                    <div className="container centerPage">
                        <div className="row centerPage">
                            {/*Display User Information*/}
                            <div className="col-sm-12 text-center">
                                <h1 className="h1 text-center mb-2">Announcements</h1>
                                <h5 className="mb-5">📢 Below Are The Announcements From Organizations You Subscribed To 📢</h5>
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
