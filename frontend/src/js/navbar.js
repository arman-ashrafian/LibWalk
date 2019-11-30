import React from 'react';
import db from "../firebase";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class NavBar extends React.Component {
    componentWillUnmount() {
        this._isMounted = false;
    }

    constructor(props) {
        super(props);

        this.state = {
            userId: '',
            loggedIn: false,
            some: ''
        };

        if (this._isMounted) {
            this.setState(props);
        }

        this.switch_view_admin_home = this.switch_view_admin_home.bind(this);
        this.switch_view_announcements = this.switch_view_announcements.bind(this);
        this.switch_view_home = this.switch_view_home.bind(this);
        this.switch_view_login = this.switch_view_login.bind(this);
        this.switch_view_profile = this.switch_view_profile.bind(this);
        this.switch_view_subscriptions = this.switch_view_subscriptions.bind(this);
        this.switch_view_search = this.switch_view_search.bind(this);
    }

    /**
     * Function is called every time the navbar is mounted. Logic manages hiding or viewing certain
     * buttons (login, ...) by setting the application state.
     */
    componentDidMount() {
        this._isMounted = true;
        db.auth().onAuthStateChanged(firebaseUser => {
            if (firebaseUser) {
                this.setState({userId: firebaseUser.uid, loggedIn: true});
                // getUser using userId and populate this.state
            } else {
                console.log("Not logged in")
            }
        })
    };

    render() {
        //interesting
        return (
            <div>
                <Navbar style={{backgroundColor: '#006A96'}} collapseOnSelect expand="lg" variant="dark">
                    {/* navbar.brand href is empty string so the cursor remains an arrow when hovering */}
                    <Navbar.Brand href=" " onClick={this.switch_view_home}>LibWalk</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link onClick={this.switch_view_events}>Events</Nav.Link>
                            <Nav.Link onClick={this.switch_view_announcements}>Announcements</Nav.Link>
                            <Nav.Link onClick={this.switch_view_subscriptions}>Subscriptions</Nav.Link>
                            <Nav.Link onClick={this.switch_view_search}>Search</Nav.Link>
                        </Nav>
                        <Form inline>
                            {this.state.loggedIn ?
                                <Button onClick={this.switch_view_profile} variant="outline-light"> Profile </Button>
                                :
                                <Button onClick={this.switch_view_login} variant="outline-light"> Login </Button>
                            }
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }

    /**
     * Routes the user to the admin home page.
     */
    switch_view_admin_home = () => {
        this.props.history.push('/admin_home');
    };

    /**
     * Routes the user to the login page.
     */
    switch_view_login = () => {
        this.props.history.push('/login');
    };

    /**
     * Routes the user to the profile page.
     */
    switch_view_profile = () => {
        this.props.history.push('/profile');
    };

    /**
     * Routes the user to a subs page.
     */
    switch_view_subscriptions = () => {
        this.props.history.push('/subs');
    };

    /**
     * Routes the user to a search page.
     */
    switch_view_search = () => {
        this.props.history.push('/search');
    };

    /**
     * Routes the user to the events page.
     */
    switch_view_events = () => {
        this.props.history.push('/events');
    };

    /**
     * Routes the user to the announcements page.
     */
    switch_view_announcements = () => {
        this.props.history.push('/announcements');

    };

    /**
     * Routes the user to the home page.
     */
    switch_view_home = () => {
        this.props.history.push('/home');
    };
}

export default NavBar;