import React, { useState } from 'react';
import './styles/App.css';
import MainMeteoWindow from './components/MainMeteoWindow';
import MeteoBox from './components/MeteoBox';
import VilleInput from './components/VilleInput';



function App() {

  const [ville, setVille] = useState('nom de la ville');

  const handleSetVille = (e) => {
    setVille(e.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <MainMeteoWindow test={ville}>
          <VilleInput setVille={handleSetVille}/>
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
