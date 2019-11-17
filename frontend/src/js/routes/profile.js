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
import {getUser} from "../cloud";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.initialState = {
            editMode: false,
            userId:'',
            userName: '',
            userEmail: '',
            userMajor: '',
            userYear: '',
            user: ''
        }

        this.state = this.initialState
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }

    componentDidMount() {
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
                console.log("User not logged in")
            }
        });
    }

    close() {
        this.setState({ editMode: false});
    }

    open() {
        this.setState({ editMode: true});
    }

    handleEdit() {
        alert(this.state.userId)
    }

    render() {
        let props = {
            userName: 'Gary G.',
            userEmail: 'ggez@ucsd.edu',
            userMajor: 'CS',
            userYear: 'Super Senior',
            userUrl: "https://www.jacobsschool.ucsd.edu/faculty/faculty_bios/photos/300.jpg",
        };

        this.props = {...this.props, ...props};

        return (
            <main className='mt-5 pt-5'>
                <NavBar {...this.props}/>
                <div className='container centerPage' >
                    <div className="row centerPage">

                        {/*Display User Information*/}
                        <div className="col-sm-12 text-center">
                            <Image src={this.props.userUrl} height="150" width="150" roundedCircle />
                        </div>
                        <div className="div-centered ">
                            <h3>
                                <FaUser /> Name : {this.state.userName}
                            </h3>
                            <h3>
                                <MdEmail /> Email : {this.state.userEmail}
                            </h3>
                            <h3>
                                <FaGraduationCap /> Major : {this.state.userMajor}
                            </h3>
                            <h3>
                                <FaSchool /> Year : {this.state.userYear}
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
                    <Modal.Header centered closeButton>
                        <Modal.Title > Edit Profile </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                        <Form onSubmit={this.handleEdit}>
                            <Form.Group controlId="formName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="name" placeholder="Enter Name" />
                            </Form.Group>

                            <Form.Group controlId="formEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter Email" />
                            </Form.Group>

                            <Form.Group controlId="formMajor">
                                <Form.Label>Major</Form.Label>
                                <Form.Control type="major" placeholder="Enter Major" />
                            </Form.Group>

                            <Form.Group controlId="formYear">
                                <Form.Label>Year</Form.Label>
                                <Form.Control type="year" placeholder="Enter Year" />
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