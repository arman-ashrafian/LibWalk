import React from "react";
import '../../css/bootstrap.min.css'
import '../../css/index.css'
import '../../css/mdb.lite.min.css'
import '../../css/style.min.css'
// import '../../css/'
// import '../../css/'
// import '../../css/'

function show_user_profile(props) {
    props = {
        userName: 'kaus',
        userEmail: 'you cant have my email.',
        userMajor: 'CS',
        userYear: 'Senior',
        userUrl: "https://images-na.ssl-images-amazon.com/images/I/61MCdgpt%2BmL._SX425_.jpg",
    };

    return (
        <div className="row">
            {/*Display an image*/}
            <div className="col-sm-4 text-center">
                <img src={props.userUrl}
                     onError="src='http://ucsdguardian.org/wp-content/uploads/2015/04/sun-god-with-glasses.png'"
                     height={300} width={300}/>
            </div>

            {/*Display User Information*/}
            <div className="col-sm-4 text-left">
                <h1 style={{textDecoration: 'underline'}}>
                    My Information
                </h1>
                <h3>
                    {props.userName}
                </h3>
                <h3>
                    {props.userEmail}
                </h3>
                <h3>
                    {props.userMajor}
                </h3>
                <h3>
                    {props.userYear}
                </h3>

            </div>
            <div className="col-sm-4">

                <h1 style={{textDecoration: 'underline'}}>
                    Settings
                </h1>
                <button onClick="do nothing">
                    Logout
                </button>

            </div>

        </div>);
}


export default show_user_profile;