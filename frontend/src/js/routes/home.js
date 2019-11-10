import React from "react";
import NavBar from "../navbar";

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <NavBar/>
                <h1> HOME PAGE </h1></div>
        );
    }

}


export default Home;