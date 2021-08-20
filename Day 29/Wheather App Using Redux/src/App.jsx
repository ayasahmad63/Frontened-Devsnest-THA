// import 'bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {useState } from "react"
import Form from './Components/Forn'
import WeatherCard from './Components/WeatherCard'


function App() {
 
  return (
    <div className="App">
    < Form />
    <WeatherCard />
    
    </div>
  );
}

export default App;
