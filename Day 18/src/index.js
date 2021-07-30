import React from 'react';
import ReactDOM from 'react-dom';
import Calorie from './Components/calorie'
import App from './Components/App.jsx';
import './index.css'

ReactDOM.render(

  <React.StrictMode>
     <div className="full">
    <App />
    <div className="contain">
    <Calorie title="Pizza"  calori=" 56"  />
    <Calorie title="Burger"  calori="49 "/>
    <Calorie title="Coke"  calori="500 " />
    <Calorie title="Fried Rice"  calori=" 90 " />
    <Calorie title="Lassania"  calori=" 200" />
    <Calorie title="Pani Puri"  calori="10 " />
    <Calorie title="Burger"  calori=" 69 " />
    </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);


