import React from "react";
import "../../css/subs.css";
import { Divider } from "@material-ui/core";
import { View } from "react-native-web";
import { MDBBtn } from "mdbreact";

class EachSub extends React.Component {
  constructor(props) {
    super(props);
    this.states = {
      startIndex: 0,
      endIndex: 3
    };
  }
  render() {
    const random_color = () => {
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
    };

    return (
      <div className="sub_container">
        <Divider variant="fullWidth" />
        <View
          className="small_container"
          style={{ flexDirection: "row", justifyContent: "center" }}
        >
          <View>
            {/*Featured image*/}
            <img src={this.props.clubPicture} className="sub_img" alt="" />
          </View>

          <View>
            <div className="information">
              <h3 className="clubName">
                <strong>{this.props.clubName}</strong>
              </h3>
              <p className="description">{this.props.clubDescription}</p>
              <div className="tags">
                {this.props.clubTags.map(tag => (
                  // add club tag stuff here
                  <MDBBtn className="tag" color={random_color()}>
                    {tag}
                  </MDBBtn>
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
