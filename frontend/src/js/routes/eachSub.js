/* eslint-disable */
import React from "react";
import "../../css/subs.css";
import {Divider} from "@material-ui/core";
import {View} from "react-native-web";
import Button from "react-bootstrap/Button";
import {getClub} from "../cloud";

class EachSub extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            club_id: this.props.clubId,
            clubName: "",
            clubDescription: "",
            clubPicture: "",
            clubTags: []
        };
        this.redirectToClubDetail = this.redirectToClubDetail.bind(this);
    }

    componentDidMount() {
        getClub(this.props.clubId).then(json => {
            if (json === undefined) {
                console.warn('firebase error with getClub, quota exceeded.');
                this.setState(
                    {
                        club_id: 'FirebaseQuote Exceeded',
                        clubName: 'FirebaseQuote Exceeded',
                        clubDescription: 'FirebaseQuote Exceeded',
                        clubPicture: '',
                        clubTags: [],
                    }
                );
                alert("Firebase usage exceeded, refresh page in a minute.")
            }

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
        this.props.history.push({
            pathname: "/orgs",
            state: {
                club_id: this.state.club_id
            }
        });
        window.location.reload();
    }

    render() {
        //this.componentDidMount();
        return (
            <div className="sub_container">
                <Divider variant="fullWidth"/>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        marginBottom: "40px",
                        marginTop: "40px"
                    }}
                >
                    <View>
                        <img
                            src={(this.state.clubPicture !== "") ? this.state.clubPicture : "https://ca-times.brightspotcdn.com/dims4/default/9c3ea25/2147483647/strip/true/crop/1600x854+0+0/resize/840x448!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ffd%2Fc6%2Fe58081f27535c976921b49239f35%2Fla-me-0516-ucsd-fundraising-20160516-001"}
                            className="sub_img"/>
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
                                {this.state.clubTags.map((tag, i) => (
                                    // add club tag stuff here
                                    <Button key={i} className="tag" size="sm">
                                        {tag}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </View>
                </View>

                <Divider variant="fullWidth"/>
            </div>
        );
    }
}

export default EachSub;
