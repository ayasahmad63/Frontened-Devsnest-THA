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
    <Calorie title="Pizza"  calori="you have consumed 56 cals today" />
    <Calorie title="Burger"  calori="you have consumed 69 cals today"/>
    <Calorie title="Coke"  calori="you have consumed 500 cals today" />
    <Calorie title="Fried Rice"  calori="you have consumed 90 cals today" />
    <Calorie title="Lassania"  calori="you have consumed 200 cals today" />
    <Calorie title="Pani Puri"  calori="you have consumed 10 cals today" />
    <Calorie title="Burger"  calori="you have consumed 69 cals today" />
    </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);


