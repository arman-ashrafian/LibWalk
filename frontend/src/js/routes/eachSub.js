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
                console.warn('firebase error with getClub, quota exceeded.')
                this.setState(
                    {
                        club_id: 'FirebaseQuote Exceeded',
                        clubName: 'FirebaseQuote Exceeded',
                        clubDescription: 'FirebaseQuote Exceeded',
                        clubPicture: '',
                        clubTags: [],
                    }
                );
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
                        <img src={this.state.clubPicture} className="sub_img"/>
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
