import React from "react";
import NavBar from "../navbar";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import CardDeck from "react-bootstrap/CardDeck";
import {club_list} from "../cloud";
//import {getClubs} from "../cloud"
import Pagination from "react-bootstrap/Pagination";

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            orgs: club_list,
            currentPage: 1,
            clubPerPage: 9,
            totalPages: Math.ceil(club_list.length / 9)
        };

        this.setClubPerPage = this.setClubPerPage.bind(this);
        this.setPageNext = this.setPageNext.bind(this);
        this.setPagePrev = this.setPagePrev.bind(this);
        this.moveFirstPage = this.moveFirstPage.bind(this);
        this.moveLastPage = this.moveLastPage.bind(this);

        // GET /getClubs & set the state when the api response is recieved
        /*getClubs().then(json => {
          this.setState({
            orgs: json.clubs,
            totalPages: Math.ceil(json.clubs.length / 9)
          });
        });*/

        if (this.state.orgs === undefined) {
            this.state = {
                orgs: []
            };
        }
    }

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

    render() {
        /* Update the number of clubs to show per page and from what range to what range */
        const {clubPerPage, currentPage, orgs, totalPages} = this.state;
        const endInd = currentPage * clubPerPage;
        const startInd = endInd - clubPerPage;

        // Choose the subarray of clubs to show in orgs array
        const currentClubs = orgs.slice(startInd, endInd);

        /* Function to produce the correct pagination */
        const pagination = (currentPage, totalPages) => {
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
        };

        // Call pagination function to get all the pages for pagination
        const pageNumber = pagination(currentPage, totalPages);

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
                        {(page = page === "..." ? <Pagination.Ellipsis/> : page)}
                    </Pagination.Item>
                </div>
            );
        });

        return (
            <div>
                <NavBar/>
                actual page
                <main className="mt-5 pt-5">
                    <div className="container centerPage">
                        <div className="row centerPage">
                            <NavBar {...this.props} />
                            {/*<h1> Welcome</h1>*/}
                            {/* org carousel here*/}
                            <div>
                                {/*console.log(JSON.stringify(this.state.orgs))*/}
                                {/*this.org_carousel(this.state.orgs)*/}
                            </div>

                            {/*Rest of the page here*/}
                            <div className="home_grid_container">
                                {this.org_grid(currentClubs)}
                            </div>
                        </div>
                    </div>
                </main>
                <Pagination className="pagination" size="lg">
                    <Pagination.First onClick={this.moveFirstPage}/>
                    <Pagination.Prev onClick={this.setPagePrev}/>
                    {loadPageNumber}
                    <Pagination.Next onClick={this.setPageNext}/>
                    <Pagination.Last onClick={this.moveLastPage}/>
                </Pagination>
            </div>
        );
    }

    org_grid = orgs => {
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
                    <div className="home_grid_component">
                        <Col>{grid_items[i * numcols + j]}</Col>
                        <div>
                            <br/>
                        </div>
                    </div>
                );
            }
            grid.push(row);
        }

        return (
            <div>
                <CardDeck> {grid} </CardDeck>
            </div>
        );
    };

    /*  org_carousel = orgs => {
      orgs = orgs.slice(0, 5);
      let carousel_items = [];
      orgs.forEach(function(e) {
        carousel_items.push(one_carousel_item(e));
      });

      return (
        <div className="carousel">
          <Carousel>{carousel_items}</Carousel>
        </div>
      );
    };
  }

  let one_carousel_item = org => {
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
    );*/
}

let org_grid_component = org => {
    org = Object.values(org)[0];
    console.log(JSON.stringify(org));
    org.img = "https://picsum.photos/150/50";

    return (
        <div>
            {/*<Card style={{width: '18rem'}}>*/}
            <Card style={{width: "20rem", height: "36rem"}} className="text-center">
                <Card.Img variant="top" src={org.img}/>
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

export default Home;

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}
