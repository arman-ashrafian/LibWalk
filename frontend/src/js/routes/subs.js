import React from "react";
import NavBar from "../navbar";
import "../../css/subs.css";
import { Divider } from "@material-ui/core";
import Info from "../../components/clubInfo";
import EachSub from "./eachSub";
import Pagination from "react-bootstrap/Pagination";
import { getUser } from "../cloud";

class Subs extends React.Component {
  constructor(props) {
    super(props);
    this.states = {
      startIndex: 0,
      endIndex: 3,
      userId: "",
      subscriptions: []
    };
    console.log("Subs created.");
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

  render() {
    var headerStyle = {
      marginTop: "150px",
      marginBottom: "100px",
      fontWeight: "bold",
      textAlign: "center",
      fontSize: "65px"
    };

    let active = 4;
    let items = [];
    for (let number = 1; number <= 10; number++) {
      items.push(
        <Pagination.Item key={number} active={number === active}>
          {number}
        </Pagination.Item>
      );
    }

    const paginationBasic = (
      <div>
        <Pagination size="lg">{items}</Pagination>
        <br />
      </div>
    );

    return (
      <main>
        <NavBar {...this.props} />
        <div className="container">
          <h1 style={headerStyle}> Subscriptions</h1>
          <Divider variant="fullWidth" />
          {/*Display each sub container*/}
          {Info.slice(this.states.startIndex, this.states.endIndex).map(m => (
            <EachSub {...m} />
          ))}
        </div>

        {/*<Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item active>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item disabled>{14}</Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>*/}
        {paginationBasic}
      </main>
    );
  }
}

export default Subs;
