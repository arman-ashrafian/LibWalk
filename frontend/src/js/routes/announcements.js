import React from "react";
import NavBar from "../navbar";
import Toast from 'react-bootstrap/Toast'
import '../../css/announcements.css'
import {getClubs} from "../cloud";
import Col from "react-bootstrap/Col";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";


class Announcements extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            orgs: []
        };

        // GET /getClubs & set the state when the api response is recieved
        getClubs().then((json) => {
            this.setState({orgs: json.clubs});
        });

        if(this.state.orgs === undefined) {
            this.state = {
                orgs: []
            };
        }
    }

    render() {
        if(this.state.orgs === undefined) {
            this.state = {
                orgs: []
            }
        }

        return (

            <main className='mt-5 pt-5'>
                <NavBar {...this.props}/>
                <div className='container centerPage' >
                    <div className="row centerPage">

                        {/*Display User Information*/}
                        <div className="col-sm-12 text-center">
                            <h1 className="h1 text-center mb-5">Notifications</h1>
                            <h5 className="text-center mb-5">Messages from organizations you subscribe to are listed
                                below. </h5>
                        </div>
                        <div className="div-centered ">
                            {this.club_grid_loop(this.state.orgs)}
                        </div>
                    </div>
                </div>
            </main>
        );
    }

    club_grid_loop = (orgs) => {
        let grid_items = [];
        let numcols = 4;
        let numrows = 3;
        numrows = Math.ceil(numrows);

        orgs.forEach(function (e) {
            grid_items.push(club_grid(e));
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
}
    let club_grid = (org) => {
        return (
            <Card border="info" style={{width: '20rem', height: '28rem'}} className='text-center'>
                <Card.Header>{org.clubName}</Card.Header>
                <Card.Body>
                    <Toast>
                        <Toast.Header>
                            <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                            <strong className="mr-auto">Notification</strong>
                            <small>just now</small>
                        </Toast.Header>
                        <Toast.Body>First meeting tomorrow 11/11/2019.</Toast.Body>
                    </Toast>

                    <Toast>
                        <Toast.Header>
                            <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                            <strong className="mr-auto">Notification</strong>
                            <small>2 seconds ago</small>
                        </Toast.Header>
                        <Toast.Body>Come tomorrow for free boba.</Toast.Body>
                    </Toast>

                    <Toast>
                        <Toast.Header>
                            <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                            <strong className="mr-auto">Notification</strong>
                            <small>5 minutes ago</small>
                        </Toast.Header>
                        <Toast.Body>Pizza Night</Toast.Body>
                    </Toast>
                </Card.Body>
            </Card>
        )
    };

export default Announcements;