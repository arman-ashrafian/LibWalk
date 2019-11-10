import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import '../css/App.css';
import Home from "./routes/home";
import Announcements from "./routes/announcements";
import Search from "./routes/search";
import Subs from "./routes/subs";
import Login from "./routes/login";
import draw_calendar from "./routes/calendar";
import show_user_profile from "./routes/profile";

function App() {
    return (
        <Router>
            <div className="App">
                <Route exact path="/login" component={Login} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/announcements" component={Announcements} />
                <Route exact path="/calendar" component={draw_calendar} />
                <Route exact path="/search" component={Search} />
                <Route exact path="/subs" component={Subs} />
                <Route exact path="/profile" component={show_user_profile} />
            </div>
        </Router>
    );
}



export default App;
