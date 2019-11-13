var userProfile = React.createClass({
    render: function() {
      return (

        <div className="row">

          <div className="col-sm-4 text-center">
            <img src={this.props.userUrl} onerror="this.src='http://ucsdguardian.org/wp-content/uploads/2015/04/sun-god-with-glasses.png'" height={300} width={300} />
          </div>

          <div className="col-sm-4 text-left">

            <h1 style={{textDecoration: 'underline'}}>
              My Information
            </h1>
            <h3>
              {this.props.userName}
            </h3>
            <h3>
              {this.props.userEmail}
            </h3>
            <h3>
              {this.props.userMajor}
            </h3>
            <h3>
              {this.props.userYear}
            </h3>

          </div>
          <div className="col-sm-4">

            <h1 style={{textDecoration: 'underline'}}>
              Settings
            </h1>
            <button onclick="do nothing">
              Logout
            </button>

          </div>

        </div>

      );
    }
  });