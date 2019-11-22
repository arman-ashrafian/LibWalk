import React from 'react';
import db from "../firebase";

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
        return (
            <div className='NavBar'>
                <header>
                    {/* Fixed Navbar */}
                    <nav className="navbar fixed-top navbar-expand-lg navbar-light white scrolling-navbar">
                        <div className="container">
                            {/* Icon in the top left */}
                            <a className="navbar-brand" onClick={this.switch_view_home} target="_blank">
                                <strong className="blue-text">LibWalk</strong>
                            </a>
                            {/* container for collapsing */}
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"/>
                            </button>
                            {/* Navigation Links */}
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                {/* Left Facing  */}
                                <ul className="navbar-nav mr-auto">
                                    {/*<li className="nav-item">*/}
                                    {/*    <a className="nav-link"*/}
                                    {/*       onClick={this.switch_view_profile}>Profile*/}
                                    {/*    </a>*/}
                                    {/*</li>*/}
                                    <li className="nav-item">
                                        <span className="sr-only">(current)</span>
                                        <a className="nav-link" onClick={this.switch_view_calendar}
                                           target="_blank">Calendar</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" onClick={this.switch_view_announcements}
                                           target="_blank">Announcements</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link waves-effect" onClick={this.switch_view_subscriptions}
                                           target="_blank">Subscriptions</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link waves-effect" onClick={this.switch_view_search}
                                           target="_blank">Search</a>
                                    </li>

                                </ul>
                                {/* Right */}
                                <ul className="navbar-nav nav-flex-icons">
                                    <li className="nav-item">
                                        

                                        {this.state.loggedIn ?
                                            <a className="nav-link border rounded waves-effect "
                                                onClick={this.switch_view_profile}
                                                target="_blank" >
                                                <i className="fa fa-user mr-2"/>Profile
                                            </a>              
                                        :
                                            <a className="nav-link border rounded waves-effect "
                                                onClick={this.switch_view_login}
                                                target="_blank" >
                                                <i className="fa fa-user mr-2"/>Login
                                            </a>           
                                        }
                                        
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        )
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