import React from "react";
import '../../css/calendar.css'


function draw_calendar(props) {
    return (
        <div className='calendar_page'>
            <h1> CALENDAR </h1>
            {calendar_header(props)}
            {calendar_title(props)}
            {calendar_week(props)}
            {calendar_week(props)}
            {calendar_week(props)}
            {calendar_week(props)}
        </div>
    );
}

function calendar_header(props) {
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

function calendar_week(props) {
    return (
        <div className="calendar__week">
            <div className="calendar__day day">{props.description[0]}</div>
            <div className="calendar__day day">{props.description[1]}</div>
            <div className="calendar__day day">{props.description[2]}</div>
            <div className="calendar__day day">{props.description[3]}</div>
            <div className="calendar__day day">{props.description[4]}</div>
            <div className="calendar__day day">{props.description[5]}</div>
            <div className="calendar__day day">{props.description[6]}</div>
        </div>
    );
}

function calendar_title(props) {
    return (
        <div className="wow fadeIn">
            <h4 className="h2 text-center mb-5">{props.name}</h4>
        </div>
    );
}



export default draw_calendar;