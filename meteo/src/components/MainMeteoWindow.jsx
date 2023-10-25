import React from 'react';
import '../styles/MainMeteoWindow.css';
import soleil from '../images/sun.svg';

function MainMeteoWindow(props) {
    return (
        <div className='main'>
            <div className='inner-main'>
                <img
                    src={soleil}
                    alt='soleil'
                    style={{display : props.ville ? 'block' : 'none'}}
                />

                <div className='aujourdhui'
                     style={{ display: props.ville ? 'flex' : 'none' }}
                >
                <h1>{props.ville}</h1>
                <p>27°C</p>
                <p>Précipitation : 30%</p>
                </div>
            </div>
            {props.children}
        </div>
    );
}

export default MainMeteoWindow