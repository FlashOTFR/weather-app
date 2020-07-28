import React, { useState } from 'react';

const api = {
  key: "44bff4f70925273c0c6a460e19b54f2e",
  base: "https://api.openweathermap.org/data/2.5/"
}


function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

const search = evt => {
  if (evt.key === "Enter") {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => setWeather(result));
  }
}


const dateBuilder = (d) => {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Monday", "Tuesday", "Wednesday", "thursday", "Friday", "Saturday", "Sunday"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year= d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}

  return (
    <div className="app">
      <main>
        
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search...">

          </input>
        </div>
        
        <div className="location-box">
            <div className="location">
              Seattle, US
            </div>
            <div className="date">
                {dateBuilder(new Date())}
            </div>
        </div>

        <div className="weather-box">
          <div className="temp">
            15°c
          </div>

          <div className="weather">Sunny</div>
        </div>
      </main>
    </div>
  );
}

export default App;
