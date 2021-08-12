
import React, { useContext } from "react";
import Context from "../context/AuthContext";


function About(props){
    const logger=useContext(Context)
    return(
        <div className="about">
            
            <h1>About</h1>
            <div>{logger.LoggedIn?"You are Logedin":"You are not LogedIn"}</div>
            </div>
    );
}


export default About;
