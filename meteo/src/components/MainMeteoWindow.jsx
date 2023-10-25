import React from 'react';
import '../styles/MainMeteoWindow.css';
import soleil from '../images/soleil.png';

function MainMeteoWindow(props) {
    return (
        <div className='main'>
            <div className='inner-main'>
                <img
                    src={soleil}
                    alt='soleil'
                    style={{display : props.ville ? 'visible' : 'hidden'}}
                />

                <div className='aujourdhui'
                     style={{ display: props.ville ? 'visible' : 'hidden' }}
                >
                <span>Aujourd'hui</span>
                <h1>{props.ville}</h1>
                <p>Température : 27°C</p>
                <p>Pluie : 30%</p>
                </div>
            </div>
            {props.children}
        </div>
    );
}

export default MainMeteoWindow