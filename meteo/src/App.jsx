import React, { useEffect, useState } from 'react';
import './styles/App.css';
import MainMeteoWindow from './components/MainMeteoWindow';
import MeteoBox from './components/MeteoBox';
import VilleInput from './components/VilleInput';
import axios from 'axios';



function App() {

  const [ville, setVille] = useState(undefined);
  const [dataDay1, setDataDay1] = useState([]);
  const [dataDay2, setDataDay2] = useState([]);
  const [dataDay3, setDataDay3] = useState([]);
  const [dataDay4, setDataDay4] = useState([]);
  const [dataDay5, setDataDay5] = useState([]);

  const updateState = (newVille) => {
    setVille(newVille);
    console.log(newVille);
  };


  const getMeteo = async (ville) => {
    const apiKey = '0a2cd64736fdab36d1bc29b00e681d6e';
    const apiUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${ville}&APPID=${apiKey}`;
  
    try {
      const response = await axios.get(apiUrl);
      const apiData = response.data;
  
      if (apiData.cod === 200) {
        updateState(ville);
        console.log(apiData);
        return { success: true, data: apiData };
      }
    } catch (error) {
      console.error('API call failed:', error);
    }
  
    return { success: false, error: 'API call failed' };
  };
  

  useEffect(() => {
    // Fetch data when the component mounts or 'ville' changes
    if (ville) {
      getMeteo(ville);
    }
  }, [ville]);

  return (
    <div className="App">
      <header className="App-header">
        <MainMeteoWindow ville={ville}>
          <VilleInput ville={ville}  getMeteo={getMeteo} setVille={updateState}/>
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
