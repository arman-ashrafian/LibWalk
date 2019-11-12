import React from "react";
import NavBar from "../navbar";
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button";
import {MDBCol, MDBContainer, MDBRow} from "mdbreact";

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let orgs = [];

        // todo remove this code once we get clubs form the backend
        for (let i = 1; i < 5; i++) {
            let org = {};
            org.img = 'https://www.lawrodriguez.com/wp-content/uploads/2013/03/landscape-' + 1 + '-800x400.jpg';
            org.alt = '' + i;

            org.name = 'Org Number ' + i;
            org.desc = 'Org Description';
            orgs.push(org);
        }

        return (
            <div>
                <NavBar/>
                actual page
                <main className='mt-5 pt-5'>
                    <NavBar {...this.props}/>
                    {/*<h1> Welcome</h1>*/}
                    {/* org carousel here*/}
                    <div>
                        {this.org_carousel(orgs)}
                    </div>

                    {/*Rest of the page here*/}
                    {this.org_grid(orgs)}
                </main>
            </div>
        );
    }


    org_grid = (orgs) => {
        let grid_items = [];
        let numcols = 5;
        let numrows = orgs.length / numcols;
        numrows = Math.ceil(numrows);

        orgs.forEach(function (e) {
            grid_items.push(org_grid_component(e));
        });

        let grid = [];

        for (let i = 0; i <= numrows; i++) {
            let row = [];
            for (let j = 0; j <= numcols; j++) {
                row.push(
                    <div>
                        <MDBCol>
                            {grid_items[i * numcols + j]}
                        </MDBCol>
                    </div>
                )
            }
            let col = <div><MDBRow>{row}</MDBRow></div>;
            console.log('col', col);
            grid.push(col);
        }

        return (
            <div className='home_grid_container'>
                <MDBContainer>
                    {grid}
                </MDBContainer>
            </div>
        );
    };

    org_carousel = (orgs) => {
        let carousel_items = [];
        orgs.forEach(function (e) {
            carousel_items.push(one_carousel_item(e));
        });

        return (
            <div className='carousel'>
                <Carousel>
                    {carousel_items}
                </Carousel>
            </div>
        );
    };
}


let one_carousel_item = (org) => {
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

let org_grid_component = (org) => {
    org.link = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    return (
        <div className='home_grid_component'>
            <Card style={{width: '18rem'}}>
                <Card.Img variant="top" src={org.img + "/100px180"}/>
                <Card.Body>
                    <Card.Title>{org.name}</Card.Title>
                    <Card.Text>
                        {org.desc}
                    </Card.Text>
                    <Button variant="primary" href={org.link}>Org Home</Button>
                </Card.Body>
            </Card>
        </div>
    )
};

export default Home;