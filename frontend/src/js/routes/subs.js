import React from "react";
import NavBar from "../navbar";
import '../../css/mdb.css'
import '../../css/bootstrap.css'
import '../../css/style.min.css'
import '../../css/subs.css'

class Subs extends React.Component {
    constructor(props) {
        super(props);
        console.log('Subs created.')
    }

    render() {
        return (
            <main className='mt-5 pt-5'>
                <div className='container'>
                <h1> SUBS </h1>
                {this.getSubs()}
                </div>
            </main>
        );
    }

    getSubs = () => {
        this.props = {
            ...this.props, ...{
                club_name: "ECE USC",
                club_picture: "https://image.flaticon.com/icons/png/512/564/564276.png",
                club_tags: ["Academic", "Social", 'random tag', 'surface', 'tech']
            }
        };

        return (
            <div className='sub_container'>
                <NavBar {...this.props}/>

                <div className="col-lg-5 col-xl-4 mb-4 sub_container">
                    {/*Featured image*/}
                    <div className="view overlay rounded z-depth-1 sub_img">
                        <img src={this.props.club_picture} className="img-fluid" alt=""/>
                    </div>

                </div>

                <div className="col-lg-7 col-xl-7 ml-xl-4 mb-4 sub_container">
                    <h3 className="mb-3 font-weight-bold dark-grey-text">
                        <strong>{this.props.club_name}</strong>
                    </h3>
                    <p className="grey-text">{this.props.club_description}</p>
                    {this.props.club_tags.map(tag => (
                        // add club tag stuff here
                        <a target="_blank" className="btn btn-danger btn-md">
                            {tag}
                        </a>
                    ))}
                </div>
            </div>);
    }
}

export default Subs;
