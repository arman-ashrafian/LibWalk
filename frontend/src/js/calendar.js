import React from "react";

class Calendar extends React.Component {
    render() {
        return (
            <div className='calendar_page'>
                calendar_header()
                calendar_title()
                calendar_week()
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