import React, { Component } from "react";
import NavBar from "../navbar";
//import "../../css/mdb.css";
//import "../../css/bootstrap.css";
//import "../../css/style.min.css";
import "../../css/subs.css";
import { Divider } from "@material-ui/core";
import { View } from "react-native-web";
import { MDBBtn } from "mdbreact";

class Subs extends React.Component {
  constructor(props) {
    super(props);
    console.log("Subs created.");
  }

  render() {
    var headerStyle = {
      marginTop: "50px",
      marginBottom: "100px",
      fontWeight: "bold",
      textAlign: "center",
      fontSize: "65px"
    };

    return (
      <main className="mt-5 pt-5">
        <div className="container">
          <h1 style={headerStyle}> Subscriptions</h1>
          <Divider />

          {this.getSubs()}
        </div>
      </main>
    );
  }

  getSubs = () => {
    this.props = {
      ...this.props,
      ...{
        club_name: "ECE USC",
        club_picture:
          "https://i.barkpost.com/wp-content/uploads/2015/02/featmeme.jpg?q=70&fit=crop&crop=entropy&w=808&h=500",
        club_tags: ["Academic", "Social", "random tag", "surface", "tech"],
        club_description: "This is Undergraduate Student Council"
      }
    };

    return (
      <div className="sub_container">
        <NavBar {...this.props} />
        <View
          className="small_container"
          style={{ flexDirection: "row", justifyContent: "center" }}
        >
          <View>
            {/*Featured image*/}
            <img src={this.props.club_picture} className="sub_img" alt="" />
          </View>

          <View>
            <div className="information">
              <h3 className="clubName">
                <strong>{this.props.club_name}</strong>
              </h3>
              <p className="description">{this.props.club_description}</p>
              {this.props.club_tags.map(tag => (
                // add club tag stuff here
                <MDBBtn color="amber">{tag}</MDBBtn>
              ))}
            </div>
          </View>
        </View>

        <Divider />
      </div>
    );
  };
}

export default Subs;
