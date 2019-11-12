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
                    {/*{this.test_carousel()}*/}
                </main>
            </div>
        );
    }

    org_carousel = () => {
        let orgs = [];

        // todo remove this code once we get clubs form the backend
        for (let i = 1; i < 8; i++) {
            let org = {};
            org.img = 'https://www.lawrodriguez.com/wp-content/uploads/2013/03/landscape-' + 1 + '-800x400.jpg';
            org.alt = '' + i;

            org.name = 'Org Number ' + i;
            org.desc = 'Org Description';
            orgs.push(org);
        }

        let carousel_items = [];
        orgs.forEach(function (e) {
            carousel_items.push(one_carousel_item(e));
        });

        return (
            <div>
                <Carousel>
                    {carousel_items}
                </Carousel>
            </div>
        );
    };
}


let one_carousel_item = (org) => {
    console.log('called one carousel item with args', org);
    return (
        <Carousel.Item>
            <img
                className="d-block w-100"
                // src={org.img}
                alt={org.alt}
                src='https://www.lawrodriguez.com/wp-content/uploads/2013/03/landscape-1-800x400.jpg'
            />
            <Carousel.Caption>
                <h3>{org.name}</h3>
                <p>{org.desc}</p>
            </Carousel.Caption>
        </Carousel.Item>
    );
};


export default Home;