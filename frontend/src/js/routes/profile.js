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

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.initialState = {
            editMode: false,
            userId:'',
            user: {
                userName: '',
                userEmail: '',
                userMajor: '',
                userYear: '',
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
                    userName: json['name'],
                    userEmail: json['email'],
                    userMajor: json['major'],
                    userYear: json['year']
                }
            })
        })
        /*
        db.auth().onAuthStateChanged(firebaseUser => {
            if( firebaseUser) {
                this.setState({ userId: firebaseUser.uid });
                alert(this.state.userId)
                // getUser using userId and populate this.state
                getUser(this.state.userId).then(json => {
                    this.setState({
                        userName: json['name'],
                        userEmail: json['email'],
                        userMajor: json['major'],
                        userYear: json['year']
                    })
                })

                console.log(this.state.userName)

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

    handleEdit() {
        alert("Submitted")
        //editUser(this.state.userId, this.state.user)

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
                                <FaUser /> Name : {this.state.user.userName}
                            </h3>
                            <h3>
                                <MdEmail /> Email : {this.state.user.userEmail}
                            </h3>
                            <h3>
                                <FaGraduationCap /> Major : {this.state.user.userMajor}
                            </h3>
                            <h3>
                                <FaSchool /> Year : {this.state.user.userYear}
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
                                <Form.Control type="name" placeholder="Enter Name" defaultValue={this.state.user.userName}/>
                            </Form.Group>

                            <Form.Group controlId="formEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter Email" defaultValue={this.state.user.userEmail}/>
                            </Form.Group>

                            <Form.Group controlId="formMajor">
                                <Form.Label>Major</Form.Label>
                                <Form.Control type="major" placeholder="Enter Major" defaultValue={this.state.user.userMajor}/>
                            </Form.Group>

                            <Form.Group controlId="formYear">
                                <Form.Label>Year</Form.Label>
                                <Form.Control type="year" placeholder="Enter Year" defaultValue={this.state.user.userYear}/>
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
        this.props.history.push('/login');
    }

}


export default Profile;