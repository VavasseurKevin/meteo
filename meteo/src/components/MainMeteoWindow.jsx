import React from 'react';
import './styles/MainMeteoWindow.css';

function MainMeteoWindow(props) {
    return (
        <div className='main'>
            <p>{props.test}</p>
            {props.children}
        </div>
    );
}

export default MainMeteoWindow