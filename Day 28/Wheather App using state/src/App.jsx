// import 'bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {useState } from "react"
function App() {
  const [place,setPlace]=useState("");
  const [placeData,setPlaceData]=useState({});
  const updatePlaceData = () => {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=e0c416034cbf48dc852153122210908&q=${place}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setPlaceData(data);
      });
  };
  return (
    <div className="App">
     <div className="container"></div>
     <div className="row"></div>
     <div className="col-12 form">
       <input type="text"  value={place}  onChange={(e)=>{
      setPlace(e.target.value)  
      }}
       />
       <button className="btn btn-primary" onClick={updatePlaceData}>Sumbit</button>
     </div>
     <div className="col-12 wheather ">
       <div className="card">
      {placeData.location ? (
        <div>
          <img src={placeData.current.condition.icon} alt="" />
           <div className="temp">{placeData.current.temp_c}°</div>
           <div className="place">{placeData.location.name}</div>
          <div className="container">
            <div className="row">
              <div className="col-3">
                <div className="title">Wind now</div>
                <div className="data">
                {placeData.current.wind_kph}
                </div>

              </div>
              <div className="col-3">
              <div className="title">Humidity</div>
              <div className="data">{placeData.current.humidity}</div>
              </div>
              <div className="col-3">
              <div className="title">Precipitation</div>
              <div className="data">{placeData.current.precip_in}</div>
              </div>
            </div>
          </div>
          
          
          </div>
      ):(
        <h2>Place Not Found</h2>
      )}
       </div>
     </div>
    </div>
  );
}

export default App;
