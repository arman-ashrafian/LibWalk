import React from 'react';


function login_screen() {
    return (
        <div className="card">
            <div>
                <h5 className="card-header info-color white-text text-center py-4">
                    <strong>Sign in</strong>
                </h5>
            </div>
            <div className="card-body px-lg-5 pt-0">
                <form className="text-center" style={{color: '#757575'}} action="#!">
                    <div className="md-form">
                        <input type="email" id="materialLoginFormEmail" className="form-control"/>
                        <label htmlFor="materialLoginFormEmail">E-mail</label>
                    </div>
                    <div className="md-form">
                        <input type="password" id="materialLoginFormPassword" className="form-control"/>
                        <label htmlFor="materialLoginFormPassword">Password</label>
                    </div>
                    <div className="d-flex justify-content-around">
                        <div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="materialLoginFormRemember"/>
                                <label className="form-check-label" htmlFor="materialLoginFormRemember">Remember
                                    me</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <a href>Forgot password?</a>
                    </div>
                    <button className="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0"
                            type="submit">Sign in
                    </button>
                    <p>Not a member?
                        <a href>Register</a>
                    </p>
                    <p>or sign in with:</p>
                    <a type="button" className="btn-floating btn-fb btn-sm">
                        <i className="fab fa-facebook-f"/>
                    </a>
                    <a type="button" className="btn-floating btn-tw btn-sm">
                        <i className="fab fa-twitter"/>
                    </a>
                    <a type="button" className="btn-floating btn-li btn-sm">
                        <i className="fab fa-linkedin-in"/>
                    </a>
                    <a type="button" className="btn-floating btn-git btn-sm">
                        <i className="fab fa-github"/>
                    </a>
                </form>
            </div>
        </div>
    );
};

export default login_screen;