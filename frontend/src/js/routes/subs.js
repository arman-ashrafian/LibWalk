import React from "react";
import NavBar from "../navbar";
import "../../css/subs.css";
import Info from "../../components/clubInfo";
import EachSub from "./eachSub";
import Pagination from "react-bootstrap/Pagination";
//import { getUser } from "../cloud";

class Subs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clubPerPage: 1,
      currentPage: 1,
      userId: "",
      subscriptions: [],
      clubList: Info,
      totalPages: Math.ceil(Info.length / 1)
    };
    this.setPage = this.setPage.bind(this);
    this.setPageNext = this.setPageNext.bind(this);
    this.setPagePrev = this.setPagePrev.bind(this);
    this.moveFirstPage = this.moveFirstPage.bind(this);
    this.moveLastPage = this.moveLastPage.bind(this);
  }

  componentDidMount() {
    /*getUser("30wStJj7FoaT64BjDhbIr0ujdH32").then(json => {
      this.setState({
        userId: "30wStJj7FoaT64BjDhbIr0ujdH32",
        subscriptions: json["subscriptions"]
      });
    });*/
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
  }

  /* Function to move to the next page */
  setPageNext(event) {
    if (
      this.state.currentPage < Math.ceil(Info.length / this.state.clubPerPage)
    ) {
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
    var lastPage = this.state.totalPages;
    if (this.state.currentPage < lastPage) {
      this.setState({
        currentPage: lastPage
      });
    }
  }

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

  doNothing(event) {
    console.log("Do nothing");
  }

  render() {
    // Update the current page number and the current clubs that will be shown in each page
    const { currentPage, clubPerPage, clubList, totalPages } = this.state;
    const endIndex = currentPage * clubPerPage;
    const firstIndex = endIndex - clubPerPage;
    const currentClubs = clubList.slice(firstIndex, endIndex);

    // Function to render the clubs
    const showClubs = currentClubs.map(club => {
      return <EachSub {...club} />;
    });

    // Find how many pages for the clubs
    let pageNumber = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumber.push(i);
      }
    } else {
      pageNumber = this.pagination(currentPage, totalPages);
    }

    // Load the pagination with the number of page
    let loadPageNumber;
    if (totalPages <= 5) {
      loadPageNumber = pageNumber.map(page => {
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
    } else {
      loadPageNumber = pageNumber.map(page => {
        return (
          <div>
            <Pagination.Item
              key={page}
              id={page}
              active={page === currentPage}
              onClick={page === "..." ? this.doNothing : this.setPage}
            >
              {(page = page === "..." ? <Pagination.Ellipsis /> : page)}
            </Pagination.Item>
          </div>
        );
      });
    }

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
          <Pagination.First onClick={this.moveFirstPage} />
          <Pagination.Prev onClick={this.setPagePrev} />
          {loadPageNumber}
          <Pagination.Next onClick={this.setPageNext} />
          <Pagination.Last onClick={this.moveLastPage} />
        </Pagination>
      </main>
    );
  }
}

export default Subs;
