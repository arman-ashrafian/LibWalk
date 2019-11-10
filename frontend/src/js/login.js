import React from 'react';
import '../css/bootstrap.css'
import '../css/style.css'
import '../css/mdb.lite.css'
// import popper from 'popper';
// import '../js/bootstrap_js/popper.min'
// import '../js/bootstrap_js/bootstrap.min'
// import '../js/bootstrap_js/jquery-3.4.1.min'
// import '../js/bootstrap_js/mdb.min'
/**
 * The login page with google authentication.
 * @returns {jsx code for rendering}
 */
function login_screen() {

    // todo set up database authentication here
    // todo edit the fields of the form. Currently thinking about major and year (could have a text field and dropdown).
    // todo optional: do remember me button

    return (
        <form className="text-center border border-light p-5" action="#!">
            <p className="h4 mb-4">Sign in</p>
            {/* Email */}
            <input type="email" id="defaultLoginFormEmail" className="form-control mb-4" placeholder="E-mail"/>
            {/* Password */}
            <input type="password" id="defaultLoginFormPassword" className="form-control mb-4" placeholder="Password"/>
            <div className="d-flex justify-content-around">
                <div>
                    {/* Remember me */}
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="defaultLoginFormRemember"/>
                        <label className="custom-control-label" htmlFor="defaultLoginFormRemember">Remember me</label>
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
            <a href="#" className="mx-2" role="button"><i className="fab fa-facebook-f light-blue-text"/></a>
            <a href="#" className="mx-2" role="button"><i className="fab fa-twitter light-blue-text"/></a>
            <a href="#" className="mx-2" role="button"><i className="fab fa-linkedin-in light-blue-text"/></a>
            <a href="#" className="mx-2" role="button"><i className="fab fa-github light-blue-text"/></a>
        </form>);
}

export default login_screen;