import React from "react";
// import '../css/style.min.css'
// import '../css/mdb.lite.min.css'
// import '../css/mdb.min.css'
// import '../css/bootstrap.min.css'
import '../css/calendar.css'

class Calendar extends React.Component {
    constructor() {
        super();
        this.props = {
            description: [0, 1, 2, 3, 4, 5, 6, 7, 8]
        }
    }

    render() {
        return (
            <div className='calendar_page'>
                <h1> CALENDAR </h1>
                {/* {this.calendar_header()} */}
                {/* {this.calendar_title()} */}
                {/* {this.calendar_week()} */}
                {this.calendar_header()}
                {this.calendar_title()}
                {this.calendar_week()}
                {this.calendar_week()}
                {this.calendar_week()}
                {this.calendar_week()}
            </div>
        );
    }

    calendar_header() {
        return (<div className="calendar__header">
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
            <div>Sun</div>
        </div>);
    }

    calendar_week() {
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

    calendar_title() {
        return (
            <div class="wow fadeIn">
                <h4 className="h2 text-center mb-5">{this.props.name}</h4>
            </div>
        );
    }

}


export default Calendar;