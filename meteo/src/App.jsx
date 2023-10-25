import React, { useEffect, useState } from 'react';
import './styles/App.css';
import MainMeteoWindow from './components/MainMeteoWindow';
import MeteoBox from './components/MeteoBox';
import VilleInput from './components/VilleInput';
import axios from 'axios';



function App() {

  const [ville, setVille] = useState('undefined');
  const [dataDay1, setDataDay1] = useState([]);
  const [dataDay2, setDataDay2] = useState([]);
  const [dataDay3, setDataDay3] = useState([]);
  const [dataDay4, setDataDay4] = useState([]);
  const [dataDay5, setDataDay5] = useState([]);

  const handleSetVille = (e) => {
    setVille(e.target.value);
  }


  const getWeather = async() => {
  try {
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${ville}&APPID=0a2cd64736fdab36d1bc29b00e681d6e`);    
    const api_data = response.data;
    
      if(api_data.cod === '200') {
        console.log(api_data);
      }
      else {
        console.error('Erreur de réponse de l\'API');
      }
    } catch (error) {
      console.error('Erreur lors de l\'appel API:', error);
    }
  };  

  // Effectuer des opérations après chaque mise à jour de la ville 
  useEffect(()=>{
    if(ville !== 'undefined') {
    getWeather();
  }
  })
 


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
