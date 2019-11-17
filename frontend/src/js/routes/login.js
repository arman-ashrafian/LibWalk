import React from 'react';
import '../../css/bootstrap.min.css'
import '../../css/style.min.css'
import '../../css/mdb.min.css'
import NavBar from "../navbar";
import Container from 'react-bootstrap/Container'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Image from 'react-bootstrap/Image'
import db from "../../firebase.js";
import * as firebase from "firebase";

const auth = firebase.auth();

const provider2 = new firebase.auth.GoogleAuthProvider();
		
class Login extends React.Component {
    constructor(props) {
        super(props);
        console.log('Login constructor call.')
		this.state = { login : true}; 
		this.registerTime = this.registerTime.bind(this);
		this.handleLoginWithGoogle = this.handleLoginWithGoogle.bind(this);
		this.loginTime = this.loginTime.bind(this);
    }

    view_switch_login = () => {
        console.log('profile switched pages');
        this.props.history.push('/home');
    };
	
	handleLoginWithGoogle = () => {
          try{
                  db
                    .auth()
                    .signInWithPopup(provider2).then((result) => {
						this.setState({
						user: result.user
						})
					});
            } catch (error){
                alert(error);
            }
    };
	
	registerTime = () =>{

		this.setState({login: false})
	};
	
	loginTime = () =>{

		this.setState({login: true})
	};
	
	componentDidMount(){
		auth.onAuthStateChanged((user) => {
			if(user){
				this.props.history.push('/home');
			}
		})
	}
	
    render() {
        return (
            <div className='mt-5 pt-5'>
                <NavBar {...this.props}/>
                <div>
                    
                </div>
				<Modal.Dialog style={{display: this.state.login ? 'block' : 'none'}}> 
					<Modal.Header>
						<Modal.Title>Sign In</Modal.Title>
					</Modal.Header>

					<Modal.Body >
						<Container id="numberOneContainerNA">
							<form className="text-center p-5" onSubmit={this.view_switch_login}>
						
							{/* Sign in with google */}
							<a onClick={this.handleLoginWithGoogle}><Image src={require('../../img/google/btnNormal.png')} fluid /></a>
           
                            <div>
                                {/* Remember me */}
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input"
                                           id="defaultLoginFormRemember"/>
                                </div>
                            </div>
                        {/* Register */}
                        <p>Not a member? 
                            <a onClick={this.registerTime}> Register</a>
                        </p>
                    </form>
						</Container>
					</Modal.Body>

					{/*
					<Modal.Footer>
						<Button variant="secondary">Register</Button>
						<Button variant="primary">Login</Button>
					</Modal.Footer>
					*/}
				</Modal.Dialog>
				
				<Modal.Dialog style={{display: this.state.login ? 'none' : 'block'}}> 
					<Modal.Header>
						<Modal.Title>Register</Modal.Title>
					</Modal.Header>

					<Modal.Body >
						<Container id="numberOneContainerNA">
							<Form className="text-center p-5">
								{/* Name */}
								<Form.Control type="name" className="form-control mb-4"
									   placeholder="Name"/>
								{/* Major */}
								<Form.Control type="major" className="form-control mb-4"
									   placeholder="Major"/>
								{/* Year */}
								<Form.Control type="year" className="form-control mb-4"
									   placeholder="Year"/>
							
								{/* Sign in button */}
								<button className="btn btn-info btn-block my-4" type="submit">Create Account</button>
								{/* Register */}
								<p>Already registered?
									<a onClick={this.loginTime}> Login</a>
								</p>
								{/* 
								<p>or sign in with:</p>
								<a href="#" className="mx-2" role="button"><i
									className="fab fa-facebook-f light-blue-text"/></a>
								<a href="#" className="mx-2" role="button"><i className="fab fa-twitter light-blue-text"/></a>
								<a href="#" className="mx-2" role="button"><i
									className="fab fa-linkedin-in light-blue-text"/></a>
								<a href="#" className="mx-2" role="button"><i className="fab fa-github light-blue-text"/></a>
								*/}
							</Form>
						</Container>
					</Modal.Body>

					{/*
					<Modal.Footer>
						<Button variant="secondary">Register</Button>
						<Button variant="primary">Login</Button>
					</Modal.Footer>
					*/}
				</Modal.Dialog>
            </div>);
    }
}

export default Login;
