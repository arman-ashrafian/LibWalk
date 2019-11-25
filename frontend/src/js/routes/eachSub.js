import React from "react";
import "../../css/subs.css";
import { Divider } from "@material-ui/core";
import { View } from "react-native-web";
//import { MDBBtn } from "mdbreact";
import Button from "react-bootstrap/Button";
import { getClub } from "../cloud";

class EachSub extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startIndex: 0,
      endIndex: 3,
      clubName: "",
      clubDescription: "",
      clubPicture: "",
      clubTags: []
    };
  }

  componentDidMount() {
      getClub(this.props.clubId).then(json => {
          console.log(json)
          this.setState({
              clubName: json['clubName'],
              clubDescription: json['description'],
              clubPicture: json['pictureURL'],
              clubTags: json['tags']
          });
      });
  }

  render() {
    /*const random_color = () => {
      var colors = [
        "elegant",
        "unique",
        "pink",
        "purple",
        "deep-purple",
        "indigo",
        "light-blue",
        "cyan",
        "dark-green",
        "light-green",
        "yellow",
        "amber",
        "deep-orange",
        "brown",
        "blue-grey"
      ];
      var number = Math.floor(Math.random() * colors.length);
      return colors[number];
    };*/
    console.log(this.state.clubTags)

    return (
      <div className="sub_container">
        <Divider variant="fullWidth" />
        <View
          className="small_container"
          style={{ flexDirection: "row", justifyContent: "center" }}
        >
          <View>
            {/*Featured image*/}
            <img src={this.state.clubPicture} className="sub_img" alt="" />
          </View>

          <View>
            <div className="information">
              <h4 className="clubName">
                {this.state.clubName}
              </h4>
              <p className="description">{this.state.clubDescription}</p>
              <div className="tags">
                {this.state.clubTags.map(tag => (
                  // add club tag stuff here
                  <Button className="tag" /*color={random_color()}*/ size="sm">
                    {tag}
                  </Button>
                ))}
              </div>
            </div>
          </View>
        </View>

        <Divider variant="fullWidth" />
      </div>
    );
  }
}

export default EachSub;
