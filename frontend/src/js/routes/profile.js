import React, {useState} from "react";
import '../../css/bootstrap.min.css'
import '../../css/mdb.lite.min.css'
import '../../css/style.min.css'
import NavBar from "../navbar";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import {FaUser, FaGraduationCap, FaSchool} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
import db from "../../firebase";
import {getUser, editUser} from "../cloud";

import * as firebase from "firebase";

const auth = firebase.auth();

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.initialState = {
            editMode: false,
            userId:'',
            user: {
                name: '',
                email: '',
                major: '',
                year: '',
            }
        }

        this.state = this.initialState;
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    componentDidMount() {
        getUser('30wStJj7FoaT64BjDhbIr0ujdH32').then(json => {
            this.setState({
                userId: '30wStJj7FoaT64BjDhbIr0ujdH32',
                user: {
                    name: json['name'],
                    email: json['email'],
                    major: json['major'],
                    year: json['year']
                }
            })
        })
        /*
        db.auth().onAuthStateChanged(firebaseUser => {
            if( firebaseUser) {
                this.setState({ userId: firebaseUser.uid });
                // getUser using userId and populate this.state
                getUser({this.state.userId}).then(json => {
                    this.setState({
                    user: {
                        name: json['name'],
                        email: json['email'],
                        major: json['major'],
                        year: json['year']
                    }
                })
        })

            } else {
                alert("Not logged in")
            }
        
        });
        */
    }

    close() {
        this.setState({ editMode: false});
    }

    open() {
        this.setState({ editMode: true});
    }

    async handleEdit(e) {
        e.preventDefault();
        await this.setState({
            user: {
                name: e.target[0].value,
                email: e.target[1].value,
                major: e.target[2].value,
                year: e.target[3].value
            }
        })
        editUser(this.state.userId, this.state.user);
        this.close()
    }

    render() {
        return (
            <main className='mt-5 pt-5'>
                <NavBar {...this.props}/>
                <div className='container centerPage' >
                    <div className="row centerPage">

                        {/*Display User Information*/}
                        <div className="col-sm-12 text-center">
                            <Image src={"https://www.jacobsschool.ucsd.edu/faculty/faculty_bios/photos/300.jpg"} height="150" width="150" roundedCircle />
                        </div>
                        <div className="div-centered ">
                            <h3>
                                <FaUser /> Name : {this.state.user.name}
                            </h3>
                            <h3>
                                <MdEmail /> Email : {this.state.user.email}
                            </h3>
                            <h3>
                                <FaGraduationCap /> Major : {this.state.user.major}
                            </h3>
                            <h3>
                                <FaSchool /> Year : {this.state.user.year}
                            </h3>

                        </div>
                        <div className="col-sm-12">
                        <Button variant="outline-primary" size="lg" onClick={this.open}> 
                            Edit 
                        </Button>
                        </div>
                        <div className="col-sm-12">
                        <Button variant="primary" size="m" onClick={this.switch_view_login}> 
                            Log Out
                        </Button>
                        </div>
                    </div>
                </div>

                <Modal show={this.state.editMode} onHide={this.close} size="m">
                    <Modal.Header closeButton>
                        <Modal.Title > Edit Profile </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                        <Form onSubmit={this.handleEdit}>
                            <Form.Group controlId="formName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="name" placeholder="Enter Name" defaultValue={this.state.user.name}/>
                            </Form.Group>

                            <Form.Group controlId="formEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter Email" defaultValue={this.state.user.email}/>

                            </Form.Group>

                            <Form.Group controlId="formMajor">
                                <Form.Label>Major</Form.Label>
                                <Form.Control type="major" placeholder="Enter Major" defaultValue={this.state.user.major}/>
                            </Form.Group>

                            <Form.Group controlId="formYear">
                                <Form.Label>Year</Form.Label>
                                <Form.Control type="year" placeholder="Enter Year" defaultValue={this.state.user.year}/>
                            </Form.Group>
                            <Button variant="primary" type="submit" >
                                Submit
                            </Button>
                        </Form>

                        </div>
                    </Modal.Body>
                </Modal>
            </main>);
    }

    switch_view_login = () => {
        console.log('Onclick');
		auth.signOut().then((result) => {
			this.setState({
				user: null
			})
		});
        this.props.history.push('/login');
    }

}


export default Profile;