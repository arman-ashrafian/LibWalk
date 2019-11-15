
import React from 'react';
import '../../css/bootstrap.min.css'
import '../../css/style.min.css'
import '../../css/mdb.min.css'
import '../../css/dopeStyle.css'
import Container from 'react-bootstrap/Container'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import NavBar from "../navbar";
const changeClubURL = 'https://us-central1-libwalk-721c2.cloudfunctions.net/changeClub'
const localChangeClub = (e) => {
	const{email, password} = e.target.elements;
	return fetch( changeClubURL, {mode: 'cors', method: 'POST', body: {"email": email, "password": password}})
		.then((resp) => resp.json());
};


class AdminLogin extends React.Component {
    constructor(props) {
        super(props);
		this.state = {
			login: true
		};
        console.log('Admin login constructor call.');
		this.state = { login : true}; 
		this.registerTime = this.registerTime.bind(this);
    }
	/*const handleSignIn = (event) => {
		alert("Pressed Sign In ")
		event.preventDefault();
		const{email, password} = event.target.elements;
		
	}*/
	
	registerTime = () =>{

		this.setState({login: false})
	};
	
	loginTime = () =>{

		this.setState({login: true})
	};

    render() {
        return (
            <div className='mt-5 pt-5'>
                <NavBar {...this.props}/>
				<Modal.Dialog style={{display: this.state.login ? 'block' : 'none'}}> 
					<Modal.Header closeButton>
						<Modal.Title>Sign In</Modal.Title>
					</Modal.Header>

					<Modal.Body >
						<Container id="numberOneContainerNA">
							<Form className="text-center p-5" onSubmit={localChangeClub}>
								{/* Email */}
								<Form.Control type="email" id="defaultLoginFormEmail" className="form-control mb-4"
									   placeholder="E-mail"/>
								{/* Password */}
								<Form.Control type="password" id="defaultLoginFormPassword" className="form-control mb-4"
									   placeholder="Password"/>
								<div className="d-flex justify-content-around">
									<div>
										{/* Remember me */}
										<div className="custom-control custom-checkbox">
											<Form.Control type="checkbox" className="custom-control-input"
												   id="defaultLoginFormRemember"/>
											<Form.Label className="custom-control-label" htmlFor="defaultLoginFormRemember"> Remember me
											</Form.Label>
										</div>
									</div>
									<div>
										{/* Forgot password */}
										<a href>Forgot password?</a>
									</div>
								</div>
								{/* Sign in button */}
								<button className="btn btn-info btn-block my-4" type="submit">Sign in</button>
								{/* Register */}
								<p>Not a member?
									<a onClick={this.registerTime}> Register</a>
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
				
				<Modal.Dialog style={{display: this.state.login ? 'none' : 'block'}}> 
					<Modal.Header closeButton>
						<Modal.Title>Register</Modal.Title>
					</Modal.Header>

					<Modal.Body >
						<Container id="numberOneContainerNA">
							<Form className="text-center p-5" onSubmit={localChangeClub}>
								{/* Name */}
								<Form.Control type="name" className="form-control mb-4"
									   placeholder="Name"/>
								{/* Email */}
								<Form.Control type="email" id="defaultLoginFormEmail" className="form-control mb-4"
									   placeholder="E-mail"/>
								{/* Major */}
								<Form.Control type="major" className="form-control mb-4"
									   placeholder="Major"/>
								{/* Year */}
								<Form.Control type="year" className="form-control mb-4"
									   placeholder="Year"/>
								{/* Password */}
								<Form.Control type="password" id="defaultLoginFormPassword" className="form-control mb-4"
									   placeholder="Password"/>
							
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

export default AdminLogin;
