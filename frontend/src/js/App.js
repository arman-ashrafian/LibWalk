import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import '../css/App.css';
import Home from "./routes/home";
import Announcements from "./routes/announcements";
import Search from "./routes/search";
import Subs from "./routes/subs";
import Login from "./routes/login";
import Calendar from "./routes/calendar";
import Profile from "./routes/profile";
import NavBar from "./navbar";

function App() {
    return (
        <Router>
            <div className="App">
                <Route exact path="/" component={NavBar} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/announcements" component={Announcements} />
                <Route exact path="/calendar" component={Calendar} />
                <Route exact path="/search" component={Search} />
                <Route exact path="/subs" component={Subs} />
                <Route exact path="/profile" component={Profile} />
            </div>
        </Router>
    );
}



export default App;
