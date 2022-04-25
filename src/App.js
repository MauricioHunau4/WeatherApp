import React, { useState, useEffect } from 'react';

const api = {
  key: "dcf8f75fbb497255bd21327f08920eea",
  base: "https://api.openweathermap.org/data/2.5/"
}


function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [area, setArea] = useState("");
  const [currencies, setCurrencies] = useState("");
  const [capital, setCapital] = useState("");
  const [demonym, setDemonym] = useState("");
  const [languages, setLanguages] = useState("");
  const [population, setPopulation] = useState("");
  const [flag, setFlag] = useState("")
  const [countryCode, setCountryCode] = useState("")


  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setCountryCode(result.sys.country);
          setQuery('');
        });
    }
  }

  useEffect(() => {
    if (countryCode !== "") {
      fetchApi();
    }
  }, [countryCode]);

  const fetchApi = async () => {
    await fetch(`https://restcountries.com/v2/alpha/${countryCode}`)
      .then(res => res.json())
      .then(data => {
        setFlag(data.flag)
        setArea(data.area)
        setCapital(data.capital)
        setCurrencies(data.currencies[0].name)
        setDemonym(data.demonym)
        setLanguages(data.languages[0].name)
        setPopulation(data.population)
      })
  }


  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 25) ? 'app warm' : 'app') : 'app'}>
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.main != "undefined") ? (
          <div>
            <div className='box'>
              <div>
                <div className="location-box">
                  <div className="location">{weather.name}, {weather.sys.country}</div>
                  <div className="date">{dateBuilder(new Date())}</div>
                </div>
                <div className="weather-box">
                  <div className="temp">
                    {Math.round(weather.main.temp)}°c
                  </div>
                  <div className="weather">{weather.weather[0].main}</div>
                </div>
              </div>
              <div>
                <div className="flags">  <img
                  src={flag}
                  width="256"
                  height="192"
                  alt={weather.name}></img>
                </div>
                
              </div>
            </div>
              <div className='information'>
                <div>
                  <div className='infos'>
                    Capital: {capital}
                  </div>
                  <div className='infos'>
                    Currencie:  {currencies}
                  </div>
                  <div className='infos'>
                    Population: {population}
                  </div>
                </div>
                <div>
                  <div className='infos'>
                    Demonym: {demonym}
                  </div>
                  <div className='infos'>
                    Area: {area} m<sup>2</sup>
                  </div>
                  <div className='infos'>
                    Language: {languages} 
                  </div>
                </div>
              </div>
          </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App; 