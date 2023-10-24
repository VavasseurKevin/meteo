import React from 'react';
import './styles/App.css';
import MainMeteoWindow from './components/MainMeteoWindow';
import MeteoBox from './components/MeteoBox';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainMeteoWindow>
          <ul className='meteo-box-list'>
            <li><MeteoBox/></li>
            <li><MeteoBox/></li>
            <li><MeteoBox/></li>
            <li><MeteoBox/></li>
            <li><MeteoBox/></li>
          </ul>
        </MainMeteoWindow>
      </header>
    </div>
  );
}

export default App;
