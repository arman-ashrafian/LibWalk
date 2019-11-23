import React from "react";
import NavBar from "../navbar";
import '../../css/dopeStyle.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { MDBCol, MDBInput, MDBBtn, MDBSelect } from "mdbreact"
import Pagination from "react-bootstrap/Pagination";
import {club_list} from "../cloud";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";

//This will be at the top of the page and will show two search bars, one for name and one for tags
function SearchBars(props){
    //This will hold the current value of the input fields
    var textValueKeyword = "";
    return(
        <Container className='mt-0'>
            <Row className={"SearchBar"} style={{marginBottom: '10px'}}>
                <Col sm={12} md={12} lg={12}>
                    <Row>
                        <Col sm={0} md={2} lg={2}>
                        </Col>
                        <Col sm={12} md={8} lg={8}>
                            <div className="input-group">
                                <input onChange={(e) => textValueKeyword=e.target.value} className="form-control mr-sm-2" type="text" placeholder="Search by name..." aria-label="Search by tags..." />
                                <MDBBtn onClick={() => props.nameSearch(textValueKeyword)} color="blue" rounded size="md" type="submit" className="pull-right mt-0">
                                    Search
                                </MDBBtn>
                            </div>
                        </Col>
                        <Col sm={0} md={2} lg={2}>
                        </Col>

                    </Row>
                </Col>
            </Row>
            <Row  className={"SearchBar"} style={{marginBottom: '50px'}}>
                <Col sm={12} md={12} lg={12}>
                    <Row>
                        <Col sm={0} md={2} lg={2}>
                        </Col>
                        <Col sm={12} md={8} lg={8}>
                            <div className="input-group">
                                <input onChange={(e) => textValueKeyword=e.target.value} className="form-control mr-sm-2" type="text" placeholder="Search by tags..." aria-label="Search by tags..." />
                                <MDBBtn onClick={() => props.tagSearch(textValueKeyword)} color="blue" rounded size="md" type="submit" className="pull-right mt-0">
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

function searchResults(){

}

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orgs: club_list,
            results: [],
            searched: false,    //Remembers if we have searched before
            currentPage: 1,
            clubPerPage: 9,
            totalPages: Math.ceil(club_list.length / 9)
        };

        if (this.state.orgs === undefined) {
            this.state = {
                orgs: []
            };
        }

        this.setClubPerPage = this.setClubPerPage.bind(this);
        this.setPageNext = this.setPageNext.bind(this);
        this.setPagePrev = this.setPagePrev.bind(this);
        this.moveFirstPage = this.moveFirstPage.bind(this);
        this.moveLastPage = this.moveLastPage.bind(this);
        this.searchByKeyword = this.searchByKeyword.bind(this);
        this.searchByTags = this.searchByTags.bind(this);
    }



    render() {
        const { clubPerPage, currentPage, orgs, totalPages } = this.state;
        const endInd = currentPage * clubPerPage;
        const startInd = endInd - clubPerPage;

        // Choose the subarray of clubs to show in orgs array
        const currentClubs = orgs.slice(startInd, endInd);

        // Call pagination function to get all the pages for pagination
        const pageNumber = this.pagination(currentPage, totalPages);

        // Load pagination
        const loadPageNumber = pageNumber.map(page => {
            return (
                <div>
                    <Pagination.Item
                        key={page}
                        id={page}
                        active={page === currentPage}
                        onClick={page === "..." ? this.doNothing : this.setClubPerPage}
                    >
                        {(page = page === "..." ? <Pagination.Ellipsis /> : page)}
                    </Pagination.Item>
                </div>
            );
        });

        return (
            <div>
                <NavBar {...this.props}/>
                <main className='mt-5 pt-5'>
                    <SearchBars nameSearch={this.searchByKeyword} tagSearch={this.searchByTags} orgs={this.state.orgs}/>
                </main>
                <div className="container centerPage">
                    <div className="row centerPage">
                        {/*Rest of the page here*/}
                        <div className="home_grid_container">
                            {/*Displays a message if there are no results found*/}
                            {this.state.searched ? (this.state.results.length == 0 ? <p>No Results Found</p> : this.org_grid(this.state.results)) : <p>Go ahead.  Search something...</p>}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    org_grid = orgs => {
        let grid_items = [];
        var numcols = 4;
        var numrows = 1;
        //Change the number of cols to properly accomodate small results
        if(orgs.length < 4){
            numcols = orgs.length;
            numrows = 1;
        }
        else{
            numcols = 4;
            numrows = orgs.length / numcols;
            numrows = Math.ceil(numrows);
        }

        orgs.forEach(function(e) {
            grid_items.push(org_grid_component(e));
        });

        let grid = [];

        for (let i = 0; i <= numrows; i++) {
            let row = [];
            for (let j = 0; j < numcols; j++) {
                row.push(
                    <div className="home_grid_component">
                        <Col>{grid_items[i * numcols + j]}</Col>
                        <div>
                            <br />
                        </div>
                    </div>
                );
            }
            grid.push(row);
        }

        return (
            <Container>
                <CardDeck> {grid} </CardDeck>
            </Container>
        );
    };

    setClubPerPage(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    /* Function to move to the next page */
    setPageNext(event) {
        //currentPage += 1;
        if (this.state.currentPage < this.state.totalPages) {
            this.setState({
                currentPage: this.state.currentPage + 1
            });
        }
    }

    /* Function to move to the previous page */
    setPagePrev(event) {
        if (this.state.currentPage > 1) {
            this.setState({
                currentPage: this.state.currentPage - 1
            });
        }
    }

    /* Function to move to the first page */
    moveFirstPage(event) {
        if (this.state.currentPage > 1) {
            this.setState({
                currentPage: 1
            });
        }
    }

    /* Function to move to the last page */
    moveLastPage(event) {
        if (this.state.currentPage < this.state.totalPages) {
            this.setState({
                currentPage: this.state.totalPages
            });
        }
    }

    doNothing(event) {
        console.log("Do nothing");
    }

    /* Function to produce the correct pagination */
    pagination(currentPage, totalPages) {
        const offset = 2;
        const left = currentPage - offset,
            right = currentPage + offset + 1;
        let dummyValue = 0;
        const dummyArray = [];
        const pageNumber = [];

        // Generate the dummyArray
        for (let i = 1; i <= totalPages; i++) {
            if (i === 1 || i === totalPages || (i >= left && i < right)) {
                dummyArray.push(i);
            }
        }

        // Generate the pageNumber array
        for (let i of dummyArray) {
            if (dummyValue) {
                if (i - dummyValue === offset) {
                    pageNumber.push(dummyValue + 1);
                } else if (i - dummyValue !== 1) {
                    pageNumber.push("...");
                }
            }
            pageNumber.push(i);
            dummyValue = i;
        }
        return pageNumber;
    }

    //Go through the orgs and add a the found orgs to the results
    searchByKeyword(keyword){
        var searchedOrgs = [];

        //If the keyword is empty, do not do anything
        if(keyword.length == 0){
            return;
        }

        this.state.orgs.forEach(function(e){
            var org = Object.values(e)[0];
            if(org.clubName.toLowerCase().includes(keyword.toLowerCase())) {
                searchedOrgs.push(e)
            }
        });

        //Set the results and the searched flag
        this.setState({
            results: searchedOrgs,
            searched: true
        })
    }

    //Searches the clubs based on tags.  tags param is a string of tags
    searchByTags(tagString){
        var currentOrgs = [...this.state.orgs];   //Current orgs during the algorithm

        //First cut up the string into a list of strings
        var tags = tagString.split(/(?:,| )+/);
        console.log(tags)
        //If the keyword is empty, do not do anything
        if(tags.length == 0 || tagString.length == 0){
            return;
        }

        //Iterate through each searched tag
        tags.forEach(function(tag){
            //Iterate through all orgs still in the list
            var i = currentOrgs.length;
            while(i--){
                let org = Object.values(currentOrgs[i])[0];
                if(!org.tags){
                    currentOrgs.splice(i,1);
                }
                else{
                    var match = false;
                    org.tags.forEach(function(orgTag){
                        //Check non case sensitive
                        if(orgTag.toLowerCase() == tag.toLowerCase()){
                            match = true;
                        }
                    });
                    if(!match){
                        //Not in the array.  Remove it from current orgs
                        currentOrgs.splice(i,1);
                    }
                }

            }
        });

        //Set the results and the searched flag
        this.setState({
            results: currentOrgs,
            searched: true
        })
    }
}

let org_grid_component = org => {
    org = Object.values(org)[0];
    console.log(JSON.stringify(org));
    org.img = "https://picsum.photos/150/50";

    return (
        <div>
            {/*<Card style={{width: '18rem'}}>*/}
            <Card style={{ width: "20rem", height: "36rem"}} className="text-center">
                <Card.Img variant="top" src={org.img} />
                <Card.Body>
                    <Card.Title>{org.clubName}</Card.Title>
                    <Card.Text>
                        <small className="scroll-box">
                            {org.description.slice(0, 450)}
                        </small>
                    </Card.Text>
                    <Button variant="primary" href={org.pageURL}>
                        Org Home
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
};


export default Search;