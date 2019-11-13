import React from "react";
import NavBar from "../navbar";
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import CardDeck from "react-bootstrap/CardDeck";

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        this.orgs = [];
        let orgs = this.orgs;
        // todo remove this code once we get clubs form the backend
        for (let i = 1; i < 100; i++) {
            let org = {};
            org.img = 'https://picsum.photos/800/400';
            org.alt = '' + i;

            org.name = 'Org Number ' + i;

            org.desc = 'Org Description: ' + makeid(Math.ceil(Math.random() * 180));
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
                    <div className='home_grid_container'>
                        {this.org_grid(orgs)}
                    </div>
                </main>
            </div>
        );
    }

    componentDidMount() {
    }

    org_grid = (orgs) => {
        shuffle(orgs); // todo add timer to auto shuffle as described here https://stackoverflow.com/questions/42094060/changing-shuffling-text-every-1-5-second-in-a-react-component
        let grid_items = [];
        let numcols = 4;
        let numrows = orgs.length / numcols;
        numrows = Math.ceil(numrows);

        orgs.forEach(function (e) {
            grid_items.push(org_grid_component(e));
        });

        let grid = [];

        for (let i = 0; i <= numrows; i++) {
            let row = [];
            for (let j = 0; j < numcols; j++) {
                row.push(
                    <div className='home_grid_component'>
                        <Col>
                            {grid_items[i * numcols + j]}
                        </Col>
                    </div>
                )
            }
            grid.push(row)
        }

        return (
            <div>
                <CardDeck> {grid} </CardDeck>
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
    org.img = 'https://picsum.photos/150/50';
    return (
        <div>
            {/*<Card style={{width: '18rem'}}>*/}
            <Card bg='dark' text='white' style={{width: '26rem', height: '28rem'}} className='text-center'>
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

function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnop   qrstuvwxyz0123456789 _!@#$%^&     ';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};

export default Home;


function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}