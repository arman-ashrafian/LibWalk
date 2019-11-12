import React from "react";
import NavBar from "../navbar";
import Carousel from 'react-bootstrap/Carousel'

class Home extends React.Component {
    constructor(props) {
        super(props);
        console.log('Home constructor call.')
    }

    render() {
        return (
            <div>
                <NavBar/>

                {/*actual page*/}
                <main className='mt-5 pt-5'>
                    <NavBar {...this.props}/>
                    <h1> Welcome</h1>
                    {this.org_carousel()}
                </main>
            </div>
        );
    }

    org_carousel = () => {
        return (
            <Carousel>

            </Carousel>
        );
    }

}


export default Home;