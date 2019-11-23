import React from "react";
import NavBar from "../navbar";
import '../../css/dopeStyle.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { MDBCol, MDBInput, MDBBtn, MDBSelect } from "mdbreact"

//This will be at the top of the page and will show two search bars, one for name and one for tags
function SearchBars(){
    return(
        <Container className='mt-0'>
            <Row className={"SearchBar"} style={{marginBottom: '10px'}}>
                <Col sm={12} md={12} lg={12}>
                    <Row>
                        <Col sm={0} md={2} lg={2}>
                        </Col>
                        <Col sm={12} md={8} lg={8}>
                            <div className="input-group">
                                <input className="form-control mr-sm-2" type="text" placeholder="Search by tags..." aria-label="Search by tags..." />
                                <MDBBtn color="blue" rounded size="md" type="submit" className="pull-right mt-0">
                                    Search
                                </MDBBtn>
                            </div>
                        </Col>
                        <Col sm={0} md={2} lg={2}>
                        </Col>

                    </Row>
                </Col>
            </Row>
            <Row  className={"SearchBar"}>
                <Col sm={12} md={12} lg={12}>
                    <Row>
                        <Col sm={0} md={2} lg={2}>
                        </Col>
                        <Col sm={12} md={8} lg={8}>
                            <div className="input-group">
                                <input className="form-control mr-sm-2" type="text" placeholder="Search by tags..." aria-label="Search by tags..." />
                                <MDBBtn color="blue" rounded size="md" type="submit" className="pull-right mt-0">
                                    Search
                                </MDBBtn>
                            </div>
                        </Col>
                        <Col sm={0} md={2} lg={2}>
                        </Col>

                    </Row>
                </Col>
            </Row>
        </Container>

    );
}

class Search extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <NavBar {...this.props}/>
                <main className='mt-5 pt-5'>
                    <SearchBars />
                </main>
            </div>
        );
    }
}


export default Search;