import React from "react";
import NavBar from "../navbar";
import "../../css/subs.css";
import { Divider } from "@material-ui/core";
import Info from "../../components/clubInfo";
import EachSub from "./eachSub";
import Pagination from "react-bootstrap/Pagination";
import { getUser } from "../cloud";
//import { start } from "repl";
//import LoadPagination from "./pagination";

class Subs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clubPerPage: 3,
      currentPage: 1,
      userId: "",
      subscriptions: [],
      clubList: Info
    };
    this.setPage = this.setPage.bind(this);
  }

  componentDidMount() {
    getUser("30wStJj7FoaT64BjDhbIr0ujdH32").then(json => {
      this.setState({
        userId: "30wStJj7FoaT64BjDhbIr0ujdH32",
        subscriptions: json["subscriptions"]
      });
    });

    /*db.auth().onAuthStateChanged(firebaseUser => {
        if( firebaseUser) {
            this.setState({ userId: firebaseUser.uid });
            // getUser using userId and populate this.state
            getUser({this.state.userId}).then(json => {
                this.setState({
                user: {
                    name: json['name'],
                    email: json['email'],
                    major: json['major'],
                    year: json['year']
                }
            })
    })
        } else {
            alert("Not logged in")
        }
    
    });*/
  }

  /* Check if the user is subcribe to any clubs  */
  noClub() {
    if (this.state.clubList.length === 0) {
      return <div>You are currently not following any clubs</div>;
    }
  }

  /* Function to update page and clubs per page */
  setPage(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
    //this.states.currentPage = Number(event.target.id);
  }

  render() {
    // Update the current page number and the current clubs that will be shown in each page
    const { currentPage, clubPerPage, clubList } = this.state;
    const endIndex = currentPage * clubPerPage;
    const firstIndex = endIndex - clubPerPage;
    const currentClubs = clubList.slice(firstIndex, endIndex);

    // Function to render the clubs
    const showClubs = currentClubs.map(club => {
      return <EachSub {...club} />;
    });

    // Find how many pages for the clubs
    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(Info.length / clubPerPage); i++) {
      pageNumber.push(i);
    }

    // Load the pagination with the number of page
    const loadPageNumber = pageNumber.map(page => {
      return (
        <div>
          <Pagination.Item
            key={page}
            id={page}
            active={page === currentPage}
            onClick={this.setPage}
          >
            {page}
          </Pagination.Item>
        </div>
      );
    });

    return (
      <main>
        <NavBar {...this.props} />
        <h1 className="header"> Subscriptions</h1>
        {this.noClub()}
        <div className="container">
          {/*Display each sub container*/}
          {showClubs}
        </div>
        <Pagination className="pagination" size="lg">
          {loadPageNumber}
        </Pagination>
      </main>
    );
  }
}

export default Subs;
