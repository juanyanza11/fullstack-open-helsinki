/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "axios";

export default function Country({ country }) {
  const [weather, setWeather] = useState({});


  const params = {
    appid: import.meta.env.VITE_WEATHER_API_KEY,
    q: country.capital[0],
    units: "metric",
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://api.openweathermap.org/data/2.5/weather", { params });
        setWeather(res.data);
      } catch (err) {
        setWeather({});
      }
    };

    fetchData();
  }, []);


  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>
        capital {country.capital}
        <br />
        area {country.area}
      </p>
      <h3>languages:</h3>
      <ul>
        {Object.entries(country.languages).map(([languageCode, language]) => (
          <li key={languageCode}>{language}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt={country.name.common} width={120} />

      {weather && weather.main && weather.weather && weather.wind && (
        <div>
          <h1>Weather in {country.capital}</h1>
          temperature: {weather.main.temp} Celsius
          <br />
          <img
            src={
              "http://openweathermap.org/img/wn/" +
              weather.weather[0].icon +
              "@2x.png"
            }
            alt={weather.weather[0].main}
          />
          <br />
          wind {weather.wind.speed} m/s
        </div>
      )}
    </div>
  );
}
