import React from "react";
import NavBar from "../navbar";
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button";
import {MDBCol, MDBContainer, MDBRow} from "mdbreact";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let orgs = [];

        // todo remove this code once we get clubs form the backend
        for (let i = 1; i < 30; i++) {
            let org = {};
            // org.img = 'https://www.lawrodriguez.com/wp-content/uploads/2013/03/landscape-' + 1 + '-800x400.jpg';
            org.img = 'https://picsum.photos/800/400';
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
        let numcols = 2;
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
                    <div className='home_grid_component'>
                        <Col>
                            {grid_items[i * numcols + j]}
                        </Col>
                    </div>
                )
            }
            let col = <div className='home_grid_component'><Row >{row}</Row></div>;
            grid.push(col);
        }

        return (
            <div className='home_grid_container'>
                <Container>
                    {grid}
                </Container>
            </div>
        );
    };

    org_carousel = (orgs) => {
        orgs = orgs.slice(0, 5);
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
                src={org.img}
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
    org.img = 'https://picsum.photos/200/100';
    return (
        <div className='home_grid_component'>
            <Card style={{width: '18rem'}}>
                <Card.Img variant="top" src={org.img}/>
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