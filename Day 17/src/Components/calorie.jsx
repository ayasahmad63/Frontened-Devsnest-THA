import React from 'react'
import  './calorie.css' 


function calorie(props) {
    const {title,calori}=props;
    return (
       <div className="container">
           <h1>{title}</h1>
           <h3>{calori}</h3>
       </div>
    )
}

export default calorie
