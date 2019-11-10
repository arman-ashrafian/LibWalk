import React from "react";
import NavBar from "../navbar";

// import Sub from "../../components/sub";

class Subs extends React.Component {
    constructor(props) {
        super(props);
        console.log('Subs created.')
    }

    render() {
        return (
            <div>
                <h1> SUBS </h1>
                {this.getSubs()}
            </div>
        );
    }

    getSubs = () => {
        this.props = {
            ...this.props, ...{
                club_name: "ECE USC",
                club_picture: "https://image.flaticon.com/icons/png/512/564/564276.png",
                club_tags: ["Academic", "Social"]
            }
        };

        return (
            <div>
                <NavBar {...this.props}/>

                <div className="col-lg-5 col-xl-4 mb-4">
                    {/*Featured image*/}
                    <div className="view overlay rounded z-depth-1">
                        <img src={this.props.club_picture} className="img-fluid" alt=""/>
                    </div>

                </div>

                <div className="col-lg-7 col-xl-7 ml-xl-4 mb-4">
                    <h3 className="mb-3 font-weight-bold dark-grey-text">
                        <strong>{this.props.club_name}</strong>
                    </h3>
                    <p className="grey-text">{this.props.club_description}</p>
                    {this.props.club_tags.map(tag => (
                        <a target="_blank" className="btn btn-danger btn-md">
                            {tag}
                        </a>
                    ))}
                </div>
            </div>);
    }
}

export default Subs;
