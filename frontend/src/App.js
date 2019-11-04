import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import firebase from "firebase";
import { firebaseConfig } from "./firebaseConfig";
import Home from './routes/Home'
import Login from './routes/Login'

firebase.initializeApp({
  apiKey: firebaseConfig.apiKey,
  authDomain: firebaseConfig.authDomain
});

export default class App extends React.Component {
  state = { isSignedIn: false };
  

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user });
      console.log("user", user);
    });
  };

  render() {
    return (
      <div className="App">
        <Router>

          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <h1>Lib Walk</h1>
          </Link>

          <button>
            <Link to="/login">Login</Link>
          </button>

          <Switch>

            <Route exact path="/">
              {this.state.isSignedIn? (<Home />) : (<Login />)}
            </Route>

            <Route path="/login">
              <Login />
            </Route>

          </Switch>

        </Router>
      </div>
    );
  }
}