import React from "react";
import '../styles/MeteoBox.css'
import soleil from '../images/01n.png'

function getDay(date) {
    const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayNumber = new Date(date).getDay();
    return weekday[dayNumber];
}

function MeteoBox (props) {
    console.log('props.date:', props.date);
    console.log('props.temp:', props.temp);
    return (
        <div className="meteo-box">
            <h1>{props.date ? getDay(props.date) : ''}</h1>
            <img src={props.icon ? require(`../images/${props.icon}.png`) : require('../images/01n.png')}
                    alt='soleil'/>
            <span className='temp'>{props.temp ? `${Math.round(props.temp - 273.15)}°C` : ''}</span>
        </div>
    )
}

export default MeteoBox