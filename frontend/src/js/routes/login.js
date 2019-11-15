import React from 'react';
import '../../css/bootstrap.min.css'
import '../../css/style.min.css'
import '../../css/mdb.min.css'
import NavBar from "../navbar";


class Login extends React.Component {
    constructor(props) {
        super(props);
        console.log('Login constructor call.')
    }

    view_switch_login = () => {
        console.log('profile switched pages');
        this.props.history.push('/home');
    };

    render() {
        return (
            <div className='mt-5 pt-5'>
                <NavBar {...this.props}/>
                <div>
                    <form className="text-center border border-light p-5" onSubmit={this.view_switch_login}>
                        <p className="h4 mb-4">Sign in</p>
                        {/* Email */}
                        <input type="email" id="defaultLoginFormEmail" className="form-control mb-4"
                               placeholder="E-mail"/>
                        {/* Password */}
                        <input type="password" id="defaultLoginFormPassword" className="form-control mb-4"
                               placeholder="Password"/>
                        <div className="d-flex justify-content-around">
                            <div>
                                {/* Remember me */}
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input"
                                           id="defaultLoginFormRemember"/>
                                    <label className="custom-control-label" htmlFor="defaultLoginFormRemember">Remember
                                        me</label>
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
                            <a href>Register</a>
                        </p>
                        {/* Social login */}
                        <p>or sign in with:</p>
                        <a href="#" className="mx-2" role="button"><i
                            className="fab fa-facebook-f light-blue-text"/></a>
                        <a href="#" className="mx-2" role="button"><i className="fab fa-twitter light-blue-text"/></a>
                        <a href="#" className="mx-2" role="button"><i
                            className="fab fa-linkedin-in light-blue-text"/></a>
                        <a href="#" className="mx-2" role="button"><i className="fab fa-github light-blue-text"/></a>
                    </form>
                </div>
            </div>);
    }
}

export default Login;
