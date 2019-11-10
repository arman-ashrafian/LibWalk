//TG Meeting Notes and Memorable
var NewComponent = React.createClass({
  render: function() {
    return (
      <div className="row mt-3 wow fadeIn">
        {/*Grid column*/}
        <div className="col-lg-5 col-xl-4 mb-4">
          {/*Featured image*/}
          <div className="view overlay rounded z-depth-1">
            <img src="{this.props.imageURL}" className="img-fluid" alt="" />
          </div>
        </div>
        {/*Grid column*/}
        {/*Grid column*/}
        <div className="col-lg-7 col-xl-7 ml-xl-4 mb-4">
          <h3 className="mb-3 font-weight-bold dark-grey-text">
            <strong>{this.props.name}</strong>
          </h3>
          <p className="grey-text">{this.props.description}</p>
          <a target="_blank" className="btn btn-primary btn-md">Eight
          </a>
          <a target="_blank" className="btn btn-secondary btn-md">Tags
          </a>
          <a target="_blank" className="btn btn-danger btn-md">Is
          </a>
          <a target="_blank" className="btn btn-success btn-md">A
          </a>
          <a target="_blank" className="btn btn-info btn-md">Large
          </a>
          <a target="_blank" className="btn btn-default btn-md">Amount
          </a>
          <a target="_blank" className="btn btn-warning btn-md">Of
          </a>
          <a target="_blank" className="btn btn-primary btn-md">Tags
          </a>
        </div>
        {/*Grid column*/}
      </div>
    );
  }
});
