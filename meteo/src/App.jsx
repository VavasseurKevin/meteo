import React, { useEffect, useState } from 'react';
import './styles/App.css';
import MainMeteoWindow from './components/MainMeteoWindow';
import MeteoBox from './components/MeteoBox';
import VilleInput from './components/VilleInput';
import axios from 'axios'



function App() {

  const [ville, setVille] = useState('undefined');
  const [dataDay1, setDataDay1] = useState([]);
  const [dataDay2, setDataDay2] = useState([]);
  const [dataDay3, setDataDay3] = useState([]);
  const [dataDay4, setDataDay4] = useState([]);
  const [dataDay5, setDataDay5] = useState([]);

  // Effectuer des opérations après chaque mise à jour de la ville 
  useEffect(()=>{
    getWeather();
  })
  const handleSetVille = (e) => {
    setVille(e.target.value);
  }

  const getWeather = () => {

  };  

  return (
    <div className="App">
      <header className="App-header">
        <MainMeteoWindow ville={ville}>
          <VilleInput ville={ville} setVille={handleSetVille}/>
          <ul className='meteo-box-list' style={{display:ville ? 'visible' : 'hidden'}}>
            <li><MeteoBox jour='Demain'/></li>
            <li><MeteoBox jour='Demain 2'/></li>
            <li><MeteoBox jour='Demain 3'/></li>
            <li><MeteoBox jour='Demain 4'/></li>
          </ul>
        </MainMeteoWindow>
      </header>
    </div>
  );
}

export default App;
