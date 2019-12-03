/* eslint-disable */
import React from "react";
import NavBar from "../navbar";
import "../../css/subs.css";
import EachSub from "./eachSub";
import {getUser} from "../cloud";
import db from "../../firebase";

class Subs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clubPerPage: 3,
            currentPage: 1,
            userId: "",
            subscriptions: [],
            totalPages: 0,
            loadClub: false
        };

        this.setPage = this.setPage.bind(this);
        this.setPageNext = this.setPageNext.bind(this);
        this.setPagePrev = this.setPagePrev.bind(this);
        this.moveFirstPage = this.moveFirstPage.bind(this);
        this.moveLastPage = this.moveLastPage.bind(this);
    }

    /**
     * Called when the subs page is first created, do setup here.
     */
    componentDidMount() {
        db.auth().onAuthStateChanged(firebaseUser => {
            if (
                firebaseUser &&
                firebaseUser.providerData[0].providerId === "google.com"
            ) {
                // getUser using userId and populate this.state
                getUser(firebaseUser.uid).then(json => {
                    if (json === undefined) {
                        this.setState({
                            userId: 'UID error',
                            subscriptions: []
                        });

                        alert("Firebase usage exceeded, refresh page in a minute.");

                        return
                    }
                    this.setState({
                        userId: firebaseUser.uid,
                        subscriptions: json["subscriptions"]
                    });

                    const len = Object.keys(this.state.subscriptions).length;
                    let pages;
                    if (Math.ceil(len / 3) < 1) {
                        pages = 1;
                    } else {
                        pages = Math.ceil(len / 3);
                    }
                    this.setState({
                        totalPages: pages
                    });
                });
            } else {
                console.log("Not logged in");
            }
        });
    }

    /**
     *  Check if the user is subcribe to any clubs
     */
    noClub() {
        if (this.state.subscriptions.length === 0 && this.state.loadClub === true) {
            return <div>You are not subscribed to any orgs</div>;
        }
    }

    /** Function to update page and clubs per page */
    setPage(event) {
        console.log(Number(event.target.id));
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    /** Function to move to the next page */
    setPageNext(event) {
        if (this.state.currentPage < this.state.totalPages) {
            this.setState({
                currentPage: this.state.currentPage + 1
            });
        }
    }

    /** Function to move to the previous page */
    setPagePrev(event) {
        if (this.state.currentPage > 1) {
            this.setState({
                currentPage: this.state.currentPage - 1
            });
        }
    }

    /** Function to move to the first page */
    moveFirstPage(event) {
        if (this.state.currentPage > 1) {
            this.setState({
                currentPage: 1
            });
        }
    }

    /** Function to move to the last page */
    moveLastPage(event) {
        let lastPage = this.state.totalPages;
        if (this.state.currentPage < lastPage) {
            this.setState({
                currentPage: lastPage
            });
        }
    }

    /**
     * Function to do the correct pagination on the subscribers.
     */
    pagination(currentPage, totalPages) {
        const offset = 2;
        const left = currentPage - offset,
            right = currentPage + offset + 1;
        let dummyValue = 0;
        const dummyArray = [];
        const pageNumber = [];

        // Generate the dummyArray
        for (let i = 1; i <= totalPages; i++) {
            if (i === 1 || i === totalPages || (i >= left && i < right)) {
                dummyArray.push(i);
            }
        }

        // Generate the pageNumber array
        for (let i of dummyArray) {
            if (dummyValue) {
                if (i - dummyValue === offset) {
                    pageNumber.push(dummyValue + 1);
                } else if (i - dummyValue !== 1) {
                    pageNumber.push("...");
                }
            }
            pageNumber.push(i);
            dummyValue = i;
        }
        return pageNumber;
    }


    render() {
        let showClubs = [];
        if (this.state.subscriptions.length !== 0) {
            // Update the current page number and the current clubs that will be shown in each page
            const {currentPage, clubPerPage, totalPages} = this.state;
            const endIndex = currentPage * clubPerPage;
            const firstIndex = endIndex - clubPerPage;
            const currentClubs = this.state
                .subscriptions;

            console.log(currentPage, firstIndex, endIndex);
            // Function to render the clubs
            showClubs = currentClubs.map((club, i) => {
                console.log("inside sub page", club);
                return <EachSub key={i} clubId={club} {...this.props} />;
            });

            // Find how many pages for the clubs
            // noinspection JSMismatchedCollectionQueryUpdate
            let pageNumber = [];
            if (totalPages <= 5) {
                for (let i = 1; i <= totalPages; i++) {
                    pageNumber.push(i);
                }
            } else {
                this.pagination(currentPage, totalPages);
            }
        }
        return (
            <div>
                <NavBar {...this.props} />
                <main>
                    <h1 className="h1 text-center mb-5" id="header">
                        {" "}
                        Subscriptions
                    </h1>
                    <div className="container">
                        {showClubs}
                    </div>
                </main>
            </div>
        );
    }
}

export default Subs;
