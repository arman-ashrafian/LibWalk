import * as React from "react";
import Info from "./clubInfo";

const EachClub = props => (
  <div>
    {/*Grid column*/}

    {/*Featured image*/}
    <div>
      <img src={props.clubPicture} className="img-fluid" />
    </div>

    {/*Grid column*/}
    {/*Grid column*/}
    <div className="col-lg-7 col-xl-7 ml-xl-4 mb-4">
      <h3 className="mb-3 font-weight-bold dark-grey-text">
        <strong>{props.clubName}</strong>
      </h3>
      <p className="grey-text">{props.clubDiscription}</p>
      {/* Show all the tags in of a club*/}
      {props.clubTags.map(tag => (
        <a target="_blank" className="btn btn-danger btn-md">
          {tag}
        </a>
      ))}
    </div>
    {/*Grid column*/}
  </div>
);

export default class Sub extends React.Component {
  render() {
    return (
      <div>
        {Info.map(m => (
          <EachClub {...m}></EachClub>
        ))}
      </div>
    );
  }
}
