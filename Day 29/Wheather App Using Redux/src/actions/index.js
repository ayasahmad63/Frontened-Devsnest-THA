import { Dispatch } from "react";


const updatePlace=(place)=>{
    return {
        type:"UPDATE_PLACE",
        payload:place,
    
    }
}
const updatePlaceData=(place)=>{
    return(dispach)=>{
        fetch(
                `https://api.weatherapi.com/v1/current.json?key=e0c416034cbf48dc852153122210908&q=${place}`
              )
                .then((res) => res.json())
                .then((data) => {
                  console.log(data)
                  dispatch({
                      type:"UPDATE_PLACE_DATA",
                      payload:data,
                  });
                });
    };
}

export {updatePlace,updatePlaceData};
