import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../css/App.css";
import Home from "./routes/home";
import Announcements from "./routes/announcements";
import Search from "./routes/search";
import Subs from "./routes/subs";
import Login from "./routes/login";
import Calendar from "./routes/calendar";
import Profile from "./routes/profile";
import AdminHome from "./routes/admin_home"
<<<<<<< HEAD
import NavBar from "./navbar";
import AdminLogin from "./routes/adminlogin";
=======
import Events from "./routes/events";
import NavBar from "./navbar";
>>>>>>> 8244dda1235244a17acd20dc42d41c7dfa1b155e

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/announcements" component={Announcements} />
        <Route exact path="/calendar" component={Calendar} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/subs" component={Subs} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/admin_home" component={AdminHome} />
	<Route exact path="/adminlogin" component={AdminLogin} />
	<Route exact path="/events" component={Events} />
      </div>
    </Router>
  );
}

export default App;
