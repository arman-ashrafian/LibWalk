import React from "react";
import NavBar from "../navbar";

class Home extends React.Component {
    constructor(props) {
        super(props);
        console.log('Home constructor call.')
    }

    render() {
        return (
            <div>
                <NavBar {...this.props}/>
                <h1> HOME PAGE </h1></div>
        );
    }

}


export default Home;