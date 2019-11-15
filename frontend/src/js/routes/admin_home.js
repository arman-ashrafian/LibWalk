import React from 'react'
import NavBar from "../navbar";
import {getClubs} from "../cloud";

import db from "../firebase";

function check_login_type() {
    if (db.auth().currentuser.provider === 'Google')
        return 'admin';
    else
        return 'user';
}

class AdminHome extends Component {
    render() {

        if (check_login_type() === 'user') {
            this.view_switch_login();
        }

        return (
            <div>
                {/*create navigation bar*/}
                <NavBar {...this.props}/>

                {/*start the rest of the page*/}
                <main className='mt-5 pt-5'>
                    <h2 className="h1 text-center mb-5">Notifications</h2>
                    <h5 className="text-center mb-5">Messages from organizations you subscribe to are listed
                        below. </h5>
                </main>
            </div>
        );
    }

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
        })
    };


}