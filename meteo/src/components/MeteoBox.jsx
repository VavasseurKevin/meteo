import React from "react";
import '../styles/MeteoBox.css'
import soleil from '../images/sun.svg'


function MeteoBox () {
    return (
        <div className="meteo-box">
            <image src={soleil} alt='soleil' />
            <h1>Jour X</h1>
        </div>
    )
}

export default MeteoBox