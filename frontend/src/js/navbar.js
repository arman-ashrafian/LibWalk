import React from 'react';
import db from "../firebase";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            loggedIn: false
        };
        this.setState(props);
        this.switch_view_admin_home = this.switch_view_admin_home.bind(this)
        this.switch_view_announcements = this.switch_view_announcements.bind(this)
        this.switch_view_calendar = this.switch_view_calendar.bind(this)
        this.switch_view_home = this.switch_view_home.bind(this)
        this.switch_view_login = this.switch_view_login.bind(this)
        this.switch_view_profile = this.switch_view_profile.bind(this)
        this.switch_view_subscriptions = this.switch_view_subscriptions.bind(this)
        this.switch_view_search = this.switch_view_search.bind(this)
        // console.log('Navbar constructor called.', this.props, props);
    }

    componentDidMount() {
        db.auth().onAuthStateChanged(firebaseUser => {
            if( firebaseUser) {
                this.setState({ userId: firebaseUser.uid, loggedIn: true });
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
                <Navbar collapseOnSelect expand="lg">
                    <Navbar.Brand onClick={this.switch_view_home}>LibWalk</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link onClick={this.switch_view_calendar}>Calendar</Nav.Link>
                            <Nav.Link onClick={this.switch_view_announcements}>Announcements</Nav.Link>
                            <Nav.Link onClick={this.switch_view_subscriptions}>Subscriptions</Nav.Link>
                            <Nav.Link onClick={this.switch_view_search}>Search</Nav.Link>
                            
                            {this.state.loggedIn ?
                                <Button variant="outline-primary" size="m" style={{display:"flex",float:"right"}} onClick={this.switch_view_profile}> Profile </Button>            
                            :
                                <Button variant="outline-primary" size="m" onClick={this.switch_view_login} style={{float:"right"}}> Login </Button>           
                            }
                            
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }

    switch_view_admin_home = () => {
        this.props.history.push('/admin_home');
    };

    switch_view_login = () => {
        this.props.history.push('/login');
    };

    switch_view_profile = () => {
        this.props.history.push('/profile');
    };

    switch_view_subscriptions = () => {
        this.props.history.push('/subs');
    };

    switch_view_search = () => {
        this.props.history.push('/search');
    };

    switch_view_calendar = () => {
        this.props.history.push('/calendar');
    };

    switch_view_announcements = () => {
        this.props.history.push('/announcements');

    };

    switch_view_home = () => {
        this.props.history.push('/home');
    };

}

export default NavBar;