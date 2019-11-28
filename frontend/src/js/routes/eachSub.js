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
      club_id: this.props.clubId,
      startIndex: 0,
      endIndex: 3,
      clubName: "",
      clubDescription: "",
      clubPicture: "",
      clubTags: []
    };

    this.redirectToClubDetail = this.redirectToClubDetail.bind(this);
  }

  componentDidMount() {
    getClub(this.props.clubId).then(json => {
      console.log(json);
      this.setState({
        club_id: this.props.clubId,
        clubName: json["clubName"],
        clubDescription: json["description"],
        clubPicture: json["pictureURL"],
        clubTags: json["tags"]
      });
    });
  }

  redirectToClubDetail() {
    console.log(this.state.club_id);
    this.props.history.push({
      pathname: "/orgs",
      state: {
        club_id: this.state.club_id
      }
    });
  }

  render() {
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
              <a className="clubName" onClick={this.redirectToClubDetail}>
                {this.state.clubName}
              </a>
              <p className="description">
                {this.state.clubDescription.slice(0, 200) + "..."}
              </p>
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
