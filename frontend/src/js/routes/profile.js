import React from "react";
import '../../css/bootstrap.min.css'
import '../../css/index.css'
import '../../css/mdb.lite.min.css'
import '../../css/style.min.css'
import NavBar from "../navbar";

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let props = {
            userName: 'kaus',
            userEmail: 'you cant have my email.',
            userMajor: 'CS',
            userYear: 'Senior',
            userUrl: "https://images-na.ssl-images-amazon.com/images/I/61MCdgpt%2BmL._SX425_.jpg",
        };

        this.props = {...this.props, ...props};

        return (
            <div className="row">
                {/*Display an image*/}
                <div className="col-sm-4 text-center">
                    <img src={this.props.userUrl}
                         onError="src='http://ucsdguardian.org/wp-content/uploads/2015/04/sun-god-with-glasses.png'"
                         height={300} width={300}/>
                </div>

                {/*Display User Information*/}
                <div className="col-sm-4 text-left">
                    <h1 style={{textDecoration: 'underline'}}>
                        My Information
                    </h1>
                    <h3>
                        {this.props.userName}
                    </h3>
                    <h3>
                        {this.props.userEmail}
                    </h3>
                    <h3>
                        {this.props.userMajor}
                    </h3>
                    <h3>
                        {this.props.userYear}
                    </h3>

                </div>
                <div className="col-sm-4">

                    <h1 style={{textDecoration: 'underline'}}>
                        Settings
                    </h1>
                        <button onClick={this.switch_view_login()}>
                        Logout
                    </button>

                </div>

            </div>);
    }

    switch_view_login = () => {
        console.log('Onclick');
        this.props.history.push('/login');
    }

}

export default Profile;