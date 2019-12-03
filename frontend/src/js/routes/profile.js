import React from "react";
import '../../css/bootstrap.min.css'
import '../../css/mdb.lite.min.css'
import '../../css/style.min.css'
import NavBar from "../navbar";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import {FaGraduationCap, FaSchool, FaUser} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
import db from "../../firebase";
import {editUser, getUser} from "../cloud";

import * as firebase from "firebase";

const auth = firebase.auth();

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.initialState = {
            editMode: false,
            userId: '',
            user: {
                name: '',
                email: '',
                major: '',
                year: '',
                subscriptions: []
            }
        }

        this.state = this.initialState;
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    componentDidMount() {
        db.auth().onAuthStateChanged(firebaseUser => {
            if (firebaseUser && firebaseUser.providerData[0].providerId === "google.com") {
                console.log(firebaseUser.uid)
                // getUser using userId and populate this.state
                getUser(firebaseUser.uid).then(json => {
                    if (json === undefined) {
                        this.setState({
                            userId: firebaseUser.uid,
                            user: {
                                name: 'Failure getUser()',
                                email: 'Failure getUser()',
                                major: 'Failure getUser()',
                                year: 'Failure getUser()',
                                subscriptions: 'Failure getUser()',
                            }
                        })

                    } else {
                        this.setState({
                            userId: firebaseUser.uid,
                            user: {
                                name: json['name'],
                                email: json['email'],
                                major: json['major'],
                                year: json['year'],
                                subscriptions: json['subscriptions']
                            }
                        })

                    }
                })
            } else {
                console.log("Redirecting to login page")
            }

        });
    }

    close() {
        this.setState({editMode: false});
    }

    open() {
        this.setState({editMode: true});
    }

    async handleEdit(e) {
        e.preventDefault();
        await this.setState({
            user: {
                name: e.target[0].value,
                email: e.target[1].value,
                major: e.target[2].value,
                year: e.target[3].value,
                subscriptions: this.state.user.subscriptions
            }
        })
        editUser(this.state.userId, this.state.user);
        this.close()
    }

    render() {
        return (
            <div>
                <NavBar {...this.props}/>
                <main className='mt-5 pt-5'>
                    <div className='container centerPage'>
                        <div className="row centerPage">

                            {/*Display User Information*/}
                            <div className="col-sm-12 text-center">
                                <Image src={"https://students.ucsd.edu/_images/icons-logos/UCSD-tritons300.jpg"}
                                       height="150" width="150" roundedCircle/>
                            </div>

                            {/* Show spinner if user is not loaded */}
                            {(this.state.user.name === '') ?
                                <div style={{padding: '1em'}}>
                                    <Spinner animation="border" variant="info"/>
                                </div>
                                :
                                // Show user info
                                <div className="div-centered ">
                                    <h3>
                                        <FaUser/> Name : {this.state.user.name}
                                    </h3>
                                    <h3>
                                        <MdEmail/> Email : {this.state.user.email}
                                    </h3>
                                    <h3>
                                        <FaGraduationCap/> Major : {this.state.user.major}
                                    </h3>
                                    <h3>
                                        <FaSchool/> Year : {this.state.user.year}
                                    </h3>
                                </div>
                            }

                            <div className="col-sm-12">
                                <Button variant="outline-primary" size="lg" onClick={this.open}>
                                    Edit
                                </Button>
                            </div>
                            <div className="col-sm-12">
                                <Button variant="primary" size="m" onClick={this.switch_view_logout}>
                                    Log Out
                                </Button>
                            </div>
                        </div>
                    </div>

                    <Modal show={this.state.editMode} onHide={this.close} size="m">
                        <Modal.Header closeButton>
                            <Modal.Title> Edit Profile </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div>
                                <Form onSubmit={this.handleEdit}>
                                    <Form.Group controlId="formName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="name" placeholder="Enter Name"
                                                      defaultValue={this.state.user.name}/>
                                    </Form.Group>

                                    <Form.Group controlId="formEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Enter Email"
                                                      defaultValue={this.state.user.email}/>

                                    </Form.Group>

                                    <Form.Group controlId="formMajor">
                                        <Form.Label>Major</Form.Label>
                                        <Form.Control type="major" placeholder="Enter Major"
                                                      defaultValue={this.state.user.major}/>
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>School Year</Form.Label>
                                        <Form.Control as="select" required className="form-control mb-4"
                                            defaultValue={this.state.user.year}>
                                            <option>Freshman</option>
                                            <option>Sophomore</option>
                                            <option>Junior</option>
                                            <option>Senior</option>
                                            <option>Graduate</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>

                            </div>
                        </Modal.Body>
                    </Modal>
                </main>
            </div>);
    }

    switch_view_logout = () => {
        console.log('Onclick');
        auth.signOut().then((result) => {
            this.setState({
                user: null
            })
        });
        this.props.history.push('/home');
    }

}


export default Profile;
