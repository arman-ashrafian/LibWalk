import React from 'react'
import NavBar from "../navbar";
import {getClubs} from "../cloud";

import db from "../../firebase.js";

function get_user_uid() {
    let uid = 'none';
    db.auth().onAuthStateChanged(firebaseUser => {
            uid = firebaseUser.uid;
            console.log('firebaseUser', firebaseUser);
        }
    );

}

function check_login_type() {
    return "admin";
    let user_provider = 'none';
    db.auth().onAuthStateChanged(firebaseUser => {
            user_provider = firebaseUser.providerId;
            console.log('firebaseUser', firebaseUser);
        }
    );

    switch (user_provider) {
        case "Google":
            return "user";
        case "none":
            throw new Error();
        default:
            return "admin";
    }
}

class AdminHome extends React.Component {
    render() {

        if (check_login_type() === 'user') {
            this.view_switch_login();
        }

        let club = this.get_club_data();
        return (
            <div>
                {/*create navigation bar*/}
                <NavBar {...this.props}/>

                {/*start the rest of the page*/}
                <main className='mt-5 pt-5'>
                    <h2 className="h1 text-center mb-5">club.name</h2>
                    <h5 className="text-center mb-5">club.desc</h5>
                </main>
            </div>
        );
    }

    /***
     * Finds the club from the state of the component
     * @returns {*}
     */
    get_club_data = () => {
        let uid = get_user_uid();
        return this.state.orgs[uid];
    };

    /**
     * If the user is not authorized as an admin, then we just take them to the home page.
     */
    view_switch_login = () => {
        console.log('WARN: Unauthorized user tried to access admin page.');
        this.props.history.push('/home');
    };

    constructor(props) {
        super(props);
        console.log('AdminHome element created with props', props);

        // get data from firebase
        getClubs().then((json) => {
            this.setState({orgs: json.clubs});
        });

        if (this.state.orgs === undefined) {
            this.state = {
                orgs: []
            };
        }
    };
}

export default AdminHome;