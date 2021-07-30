import React from 'react'
import  './calorie.css' 


function calorie(props) {
    const {title,calori}=props;
 

    //   70< GREEN
    //     70-200 ORANGE
    // 200> red

     const CAL_COLOR=calori<=70? 'green':calori>=200?'red':'orange';
    return (

     <div className="box">
        
       <div className="container">
       <div className="cal-color"  style={{backgroundColor:CAL_COLOR}}></div>
           <h1>{title}</h1>
           <h3>You have consumed <strong style={{backgroundColor:CAL_COLOR}}> {calori}</strong>Calories today</h3>
           {
               calori>=200 &&<p style={{backgroundColor:CAL_COLOR}}>  Don't eat Such thing</p>,
               calori<=70 &&<p style={{backgroundColor:CAL_COLOR}}>  Good you can eat it</p>
           }
       </div>
       </div>
    )
}

export default calorie

