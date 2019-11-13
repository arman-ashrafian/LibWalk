var NewComponent = React.createClass({
  render: function() {
    return (

      <div className="calendar__week">
	
        <div className="calendar__day day">{this.props.description[0]}</div>
        <div className="calendar__day day">{this.props.description[1]}</div>
        <div className="calendar__day day">{this.props.description[2]}</div>
        <div className="calendar__day day">{this.props.description[3]}</div>
        <div className="calendar__day day">{this.props.description[4]}</div>
        <div className="calendar__day day">{this.props.description[5]}</div>
        <div className="calendar__day day">{this.props.description[6]}</div>

      </div>
    );
  }
});
