import React, { useState } from 'react';
import './App.css';
import WeatherDisplay from './pages/WeatherDisplay';
import DiaryToWrite from './pages/DiaryToWrite';
import DiaryList from './pages/DiaryList';

function App() {
  const [weather, setWeather] = useState({})
  const [state, setState] = useState([])

  return (
    <div className="App">
      <h1>Diary</h1>
      <WeatherDisplay setWeather = {setWeather} weather={weather}/>
      <DiaryToWrite state={state} setState={setState}/>
      <DiaryList state={state} setState={setState}/>
      {/* {state.title} */}
    </div>
  );
}

export default App;
