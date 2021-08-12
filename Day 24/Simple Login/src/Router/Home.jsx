"use strict "
import React,{useContext, useState} from "react";
import Context  from "../context/AuthContext";

function Home(props){
    const logger=useContext(Context)
    const  toggleLogin=()=>{
        logger.togglelogin()
     
    }
    return(
        <div className="home">
        <h1>Home</h1>
        <div >Login to acess Dashboard and Profile</div>
        <button onClick={toggleLogin}>{logger.LoggedIn?"Logout":"Login"}</button>


        </div>
    );
}


export default Home;