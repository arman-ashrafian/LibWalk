import React from "react";
import NavBar from "../navbar";
import "../../css/dopeStyle.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { club_list, getClubs } from "../cloud";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orgs: [],
      search_mode: "Search By Name",
      search_keyword: "",
      results: [],
      searched: false //Remembers if we have searched before
    };

    if (this.state.orgs === undefined) {
      this.state = {
        orgs: []
      }
    }



    this.searchByKeyword = this.searchByKeyword.bind(this);
    this.searchByTags = this.searchByTags.bind(this);
    this.handleSearchSelect = this.handleSearchSelect.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.enterKey = this.enterKey.bind(this);
  }

  componentDidMount() {
    getClubs().then(clubList =>{
      this.setState({
        orgs: clubList["clubs"]
      })
    })

  }

  render() {
    const { orgs } = this.state;

    return (
      <div>
        <NavBar {...this.props} />
        <main className="mt-5 pt-5">
          {/* <SearchBars nameSearch={this.searchByKeyword} tagSearch={this.searchByTags} orgs={this.state.orgs} searchSelect={this.handleSearchSelect}/> */}
          <Container className="mt-0">
            <Row className={"SearchBar"} style={{ marginBottom: "10px" }}>
              <Col sm={12} md={12} lg={12}>
                <Row>
                  <Col sm={0} md={2} lg={2}></Col>
                  <Col sm={12} md={8} lg={8}>
                    <div className="input-group">
                      <input
                        onChange={e =>
                          this.setState({ search_keyword: e.target.value })
                        }
                        className="form-control mr-sm-2"
                        style={{ fontSize: 28 }}
                        type="text"
                        placeholder={this.state.search_mode}
                        onKeyPress={this.enterKey}
                      />
                      <Dropdown
                        onSelect={e => this.handleSearchSelect(e)}
                        as={ButtonGroup}
                      >
                        <Button
                          variant="primary"
                          size="m"
                          onClick={() =>
                            this.handleSearchSubmit(this.state.search_keyword)
                          }
                        >
                          Search
                        </Button>
                        <Dropdown.Toggle
                          split
                          variant="primary"
                          id="dropdown-split-basic"
                          size="sm"
                        />
                        <Dropdown.Menu>
                          <Dropdown.Item eventKey="Search By Name">
                            Name
                          </Dropdown.Item>
                          <Dropdown.Item eventKey="Search By Tag (Ex: Music, Media)">
                            Tag
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </Col>
                  <Col sm={0} md={2} lg={2}></Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </main>
        <div className="container centerPage">
          <div className="row centerPage">
            {/*Rest of the page here*/}
            <div className="home_grid_container">
              {/*Displays a message if there are no results found*/}
              {this.state.searched ? (
                this.state.results.length === 0 ? (
                  <p>No Results Found</p>
                ) : (
                  this.org_grid(this.state.results)
                )
              ) : (
                <p></p>
              )}
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
    if (orgs.length < 4) {
      numcols = orgs.length;
      numrows = 1;
    } else {
      numcols = 4;
      numrows = orgs.length / numcols;
      numrows = Math.ceil(numrows);
    }

    orgs.forEach((e) => {
        grid_items.push(this.org_grid_component(e));
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

  handleSearchSubmit(e) {
    if (this.state.search_mode === "Search By Tag (Ex: Music, Media)") {
      this.searchByTags(e);
    } else {
      this.searchByKeyword(e);
    }
  }

  handleSearchSelect(e) {
    if (e) {
      this.setState({
        search_mode: e
      });
    }
  }

  /* Handle enter key press */
  enterKey(e) {
    if (e.key === "Enter") {
      this.handleSearchSubmit(this.state.search_keyword);
    }
  }

  //Go through the orgs and add a the found orgs to the results
  searchByKeyword(keyword) {
    var searchedOrgs = [];

    //If the keyword is empty, do not do anything
    if (keyword.length === 0) {
      return;
    }

    this.state.orgs.forEach(function(e) {
      var org = Object.values(e)[0];
      if (org.clubName.toLowerCase().includes(keyword.toLowerCase())) {
        searchedOrgs.push(e);
      }
    });

    //Set the results and the searched flag
    this.setState({
      results: searchedOrgs,
      searched: true
    });
  }

  //Searches the clubs based on tags.  tags param is a string of tags
  searchByTags(tagString) {
    var currentOrgs = [...this.state.orgs]; //Current orgs during the algorithm

    //First cut up the string into a list of strings
    var tags = tagString.split(",");
    console.log(tags);
    //If the keyword is empty, do not do anything
    if (tags.length === 0 || tagString.length === 0) {
      return;
    }

    //Iterate through each searched tag
    tags.forEach(function(tag) {
      //Iterate through all orgs still in the list
      var i = currentOrgs.length;
      while (i--) {
        let org = Object.values(currentOrgs[i])[0];
        if (!org.tags) {
          currentOrgs.splice(i, 1);
        } else {
          var match = false;
          org.tags.forEach(function(orgTag) {
            //Check non case sensitive
            if (orgTag.toLowerCase() === tag.toLowerCase().trim()) {
              match = true;
              console.log("match");
            }
          });
          if (!match) {
            //Not in the array.  Remove it from current orgs
            currentOrgs.splice(i, 1);
          }
        }
      }
    });

    //Set the results and the searched flag
    this.setState({
      results: currentOrgs,
      searched: true
    });
  }

  redirectToClubDetails(club_id) {
    this.props.history.push({
      pathname: "/orgs",
      state: {
        club_id: club_id
      }
    });
  }

  org_grid_component = org => {
    org = Object.values(org)[0];
    org.img = org.pictureURL;
  
    return (
      <div>
        {/*<Card style={{width: '18rem'}}>*/}
        <a onClick={() => {this.redirectToClubDetails(org.clubReference)}}>
          <Card
            style={{ width: "20rem", height: "13rem" }}
            className="text-center"
          >
            <Card.Img variant="top" src={org.img} />
            <Card.Body className="text-center">
                <Card.Title>
                  {org.clubName}
                </Card.Title>
            </Card.Body>
          </Card>
        </a>
      </div>
    );
  };
}


export default Search;
