import React from "react";
import '../../css/calendar.css'

class Calendar extends React.Component {
    constructor(props) {
        super(props) ;
        this.setState(this.props);
        this.props = {...this.props, description : [0, 1, 2, 3, 4, 5, 6 , 7 , 8, 9]};
        console.log('Calendar set its state to', this.props );
    }

    render() {
        return this.draw_calendar();
    }

    draw_calendar() {
        return (
            <div className='calendar_page'>
                <h1> CALENDAR </h1>
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
                {/*<div className="calendar__day day">{this.props.description[0]}</div>*/}
                {/*<div className="calendar__day day">{this.props.description[1]}</div>*/}
                {/*<div className="calendar__day day">{this.props.description[2]}</div>*/}
                {/*<div className="calendar__day day">{this.props.description[3]}</div>*/}
                {/*<div className="calendar__day day">{this.props.description[4]}</div>*/}
                {/*<div className="calendar__day day">{this.props.description[5]}</div>*/}
                {/*<div className="calendar__day day">{this.props.description[6]}</div>*/}


                <div className="calendar__day day">{'Test'}</div>
                <div className="calendar__day day">{'Test'}</div>
                <div className="calendar__day day">{'Test'}</div>
                <div className="calendar__day day">{'Test'}</div>
                <div className="calendar__day day">{'Test'}</div>
                <div className="calendar__day day">{'Test'}</div>
                <div className="calendar__day day">{'Test'}</div>
            </div>
        );
    }

    calendar_title(props) {
        return (
            <div className="wow fadeIn">
                <h4 className="h2 text-center mb-5">{this.props.name}</h4>
            </div>
        );
    }


}

export default Calendar;