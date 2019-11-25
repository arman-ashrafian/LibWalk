import React from "react";
import '../../css/bootstrap.min.css';
import '../../css/mdb.lite.min.css';
import '../../css/style.min.css';
import NavBar from "../navbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {getClub} from "../cloud";
import { Divider } from "@material-ui/core";

class Orgs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            club_id : "08ty8DCalehP6KbWldvDPkoK9ZA3",
            clubName: '',
            clubReference: '',
            contactEmail: '',
            description: '',
            emailList: [],
            eventList: [],
            pageURL: '',
            pictureURL: '',
            announcements: [],
            tags: []
        }
    }

    componentDidMount() {
        console.log(this.props)
        getClub(this.props.location.state.club_id).then(clubInfo => {
            console.log(clubInfo)
            this.setState({
                clubName: clubInfo['clubName'],
                clubReference: clubInfo['clubReference'],
                contactEmail: clubInfo['contactEmail'],
                description: clubInfo['description'],
                emailList: clubInfo['emailList'],
                eventList: clubInfo['eventList'],
                pageURL: clubInfo['pageURL'],
                pictureURL: clubInfo['pictureURL'],
                announcements: clubInfo['announcements'],
                tags: clubInfo['tags']
            })
        });
    }

    render() {
        return (
            <div>
                <NavBar {...this.props} />
                <main className='mt-5 pt-5'>
                    <div className="container">
                        <Card style={{displaye:"flex"}}>
                            <Card.Img variant="top" src={this.state.pictureURL} />
                            <Card.Body>
                                <Card.Title style={{fontSize:"80px"}}>
                                    <strong> {this.state.clubName} </strong>
                                </Card.Title>
                                <Card.Subtitle className="mb-2 text-muted" style={{fontSize:"20px"}}>
                                    {this.state.tags.map(tag => (
                                        <Button size="sm">
                                            {tag}
                                        </Button>
                                    ))}
                                </Card.Subtitle>
                                <Card.Text>
                                    {this.state.description}
                                </Card.Text>
                                <Card.Subtitle className="mb-2 text-muted" style={{fontSize:"20px"}}>
                                        {this.state.eventList.map(event => (
                                            <Button size="sm">
                                                {event}
                                            </Button>
                                        ))}
                                </Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </div>
                </main>
            </div>
        );
    }
}

export default Orgs;