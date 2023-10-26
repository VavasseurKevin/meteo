import React, { useEffect, useState, useCallback } from "react";
import "./styles/App.css";
import MainMeteoWindow from "./components/MainMeteoWindow";
import MeteoBox from "./components/MeteoBox";
import VilleInput from "./components/VilleInput";
import axios from "axios";

function App() {
  const [ville, setVille] = useState(undefined);
  const [jours, setJours] = useState(new Array(5).fill(null));

  const updateState = useCallback(
    (data) => {
      console.log("updateState is called");
      console.log("Data received:", data);
      console.log(data);

      const newVille = data.city.name;
      const newJours = [];
      const dayIndices = getDayIndices(data);

      for (let i = 0; i < 5; i++) {
        newJours.push({
          date: data.list[dayIndices[i]].dt_txt,
          weather_desc: data.list[dayIndices[i]].weather[0].description,
          icon: data.list[dayIndices[i]].weather[0].icon,
          temp: data.list[dayIndices[i]].main.temp,
        });
      }

      setVille(newVille);
      setJours(newJours);
    },
    [setVille, setJours]
  );
  console.log(jours);

  const getMeteo = useCallback(
    async (ville) => {
      const apiKey = "0a2cd64736fdab36d1bc29b00e681d6e";
      const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${ville}&APPID=${apiKey}`;

      try {
        const response = await axios.get(apiUrl);
        const apiData = response.data;

        if (apiData.cod === 200) {
          console.log("Ville non trouvée:", ville);
          console.log(apiData);
          return false;
        } else {
          console.log("Ville  trouvée:", ville);
          updateState(apiData);
          console.log(apiData);
          return true;
        }
      } catch (error) {
        console.error("API call failed:", error);
        return false;
      }
    },
    [updateState]
  );

  
  const getDayIndices = (data) => {
    const dayIndices = [0];
    let index = 0;
  
    for (let i = 0; i < 5; i++) {
      let currentItem = data.list[index]; // Utilisez 'let' ici au lieu de 'const'
      if (currentItem && currentItem.dt_txt) {
        let tmp = currentItem.dt_txt.slice(8, 10);
        while (tmp === currentItem.dt_txt.slice(8, 10) ) {
          index++;
          if (index < data.list.length) {
            currentItem = data.list[index];
          } else {
            break; // Sortir de la boucle si nous avons atteint la fin des données
          }
        }
        if (currentItem) {
          dayIndices.push(index);
        }
      }
    }
  
    return dayIndices;
  };
  
  

  useEffect(() => {
    // Fetch data when the component mounts or 'ville' changes
    if (ville) {
      getMeteo(ville);
    }
  }, [ville, getMeteo]);

  return (
    <div className="App">
      <header className="App-header">
        <MainMeteoWindow ville={ville} data={jours[0]}>
          <VilleInput ville={ville} getMeteo={getMeteo} />
          <ul
            className="meteo-box-list"
            style={{ display: ville ? "visible" : "hidden" }}
          >
            {jours.slice(1).map((jour, index) => (
              <li key={index}>
                <MeteoBox {...jour} />
              </li>
            ))}
          </ul>
        </MainMeteoWindow>
      </header>
    </div>
  );
}

export default App;
