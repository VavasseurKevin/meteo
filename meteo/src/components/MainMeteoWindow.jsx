import React from 'react';
import '../styles/MainMeteoWindow.css';
import soleil from '../images/01d.png';

function MainMeteoWindow(props) {
    
    return (
        <div className='main'>
            <div className='inner-main'>
                <img
                    src={props.data ? require(`../images/${props.data.icon}.png`) : require('../images/01d.png')}
                    alt='soleil'
                    style={{ visibility: props.ville ? 'visible' : 'hidden' }}
                />

                <div className='aujourdhui'
                     style={{ visibility: props.ville ? 'visible' : 'hidden' }}
                >
                <span>Aujourd'hui</span>
                <h1>{props.ville}</h1>
                <p>Température : {props.data ? Math.round(props.data.temp - 273.15) : 0}°C</p>
                <p>Pluie : {props.data ? props.data.weather_desc.toLowerCase() : ''}</p>
                </div>
            </div>
            {props.children}
        </div>
    );
}

export default MainMeteoWindow;
