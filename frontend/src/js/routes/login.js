import React from 'react';
import '../../css/bootstrap.min.css'
import '../../css/style.min.css'
import '../../css/mdb.min.css'
import Container from 'react-bootstrap/Container'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Image from 'react-bootstrap/Image'
import db from "../../firebase.js";
import * as firebase from "firebase";
import {editUser} from "../cloud";

const auth = firebase.auth();

const googleProvider = new firebase.auth.GoogleAuthProvider();

class Login extends React.Component {
    constructor(props) {
        super(props);
        console.log('Login constructor call.')
        this.state = {
            login: true,
            user: null,
            userId: null
        };
        this.register = this.register.bind(this);
        this.handleLoginWithGoogle = this.handleLoginWithGoogle.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
        this.login = this.login.bind(this);
    }

    view_switch_login = () => {
        this.props.history.push('/home');
    };

    view_switch_admin_login = () => {
        this.props.history.push('/admin_login');
    };

    async handleLoginWithGoogle() {
        try {
            await db
                .auth()
                .signInWithPopup(googleProvider).then((result) => {
                    this.setState({
                        user: result.user,
                        userId: result.uid
                    })
                })

            auth.onAuthStateChanged((user) => {
                if (user && user.providerData[0].providerId === "google.com") {
                    this.setState({userId: user.uid});
                    console.log(user.uid)
                    db.firestore().collection("Users").doc(user.uid).get()
                        .then((doc) => {
                            if (doc.exists) {
                                this.props.history.push('/home');
                            } else {
                                this.registerTime();
                            }
                        });
                }
            });
        } catch (error) {
            alert(error);
        }
    };

    async handleRegister(e) {
        e.preventDefault();
        //Check if the Google account is linked
        if (this.state.user) {
            //Save to database
            await editUser(this.state.user.uid,
                {
                    name: e.target[0].value,
                    email: this.state.user.email,
                    major: e.target[1].value,
                    year: e.target[2].value,
                    subscriptions: []
                })

            this.view_switch_login()

        }
        //Else prompt the user to link their google account
        else {
            alert("Please link your google account");
        }
    };

    register = () => {
        this.setState({login: false})
    };

    login = () => {
        this.setState({login: true})
    };

    registerTime = () => {
        this.setState({login: false})
    };

    render() {
        return (
            <div className='mt-5 pt-5'>
                <Modal.Dialog style={{display: this.state.login ? 'block' : 'none'}}>
                    <Modal.Header>
                        <Modal.Title>Sign In</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Container id="numberOneContainerNA">
                            <form className="text-center p-5" onSubmit={this.view_switch_login}>

                                {/* Sign in with google */}
                                <a onClick={this.handleLoginWithGoogle} href={'#'}><Image
                                    src={require('../../img/google/btnNormal.png')} fluid/></a>

                                <div>
                                    {/* Remember me */}
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input"
                                               id="defaultLoginFormRemember"/>
                                    </div>
                                </div>
                                {/* Register */}
                                <p> Not a member yet?
                                    <a  href={'#'} onClick={this.register} style={{color: "#4169E1"}}> Register</a>
                                </p>
                                <p> Logging in as a student org?
                                    <a  href={'#'} onClick={this.view_switch_admin_login} style={{color: "#4169E1"}}> Admin Log
                                        In </a>
                                </p>
                            </form>
                        </Container>
                    </Modal.Body>
                </Modal.Dialog>

                <Modal.Dialog style={{display: this.state.login ? 'none' : 'block'}}>
                    <Modal.Header>
                        <Modal.Title>Register</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Container id="numberOneContainerNA">
                            <Form className="text-center p-5" onSubmit={this.handleRegister}>
                                {this.state.user ? (
                                    <p><b>Linked to {this.state.user.displayName}</b></p>
                                ) : (
                                    <div>
                                        <p>Link your google account</p>
                                        <a onClick={this.handleLoginWithGoogle}><Image
                                            src={require('../../img/google/btnNormal.png')} fluid/></a>
                                    </div>
                                )}
                                {/* Name */}
                                <Form.Control required type="name" className="form-control mb-4 mt-5"
                                              placeholder="Preferred Name"/>
                                {/* Major */}
                                <Form.Control required type="major" className="form-control mb-4"
                                              placeholder="Major"/>
                                {/* Year */}
                                <Form.Control required type="year" className="form-control mb-4"
                                              placeholder="Year"/>

                                {/* Sign in button */}
                                <button className="btn btn-info btn-block my-4" type="submit">Create Account</button>
                                {/* Register */}
                                <p>Already registered?
                                    <a href={'#'} onClick={this.login}> Login</a>
                                </p>
                            </Form>
                        </Container>
                    </Modal.Body>
                </Modal.Dialog>
            </div>
        );
    }
}

export default Login;
