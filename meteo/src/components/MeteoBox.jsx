import React from "react";
import '../styles/MeteoBox.css'
import soleil from '../images/sun.svg'


function MeteoBox (props) {
    return (
        <div className="meteo-box">
            <h1>{props.jour}</h1>
            <img src={soleil} alt='soleil' />
            <span className='temp'>23°C</span>
        </div>
    )
}

export default MeteoBox