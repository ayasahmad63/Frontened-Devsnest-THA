import { useSelector  } from "react-redux";


const WeatherCard=()=>{
    const placeData={};
    return(
        <div className="containe">
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
    )
}

export default WeatherCard