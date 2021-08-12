
import React,{useContext} from "react";
import { 
    Route, Redirect
} from "react-router-dom";
import Context from "../context/AuthContext";


function Profile(props){
    const logger=useContext(Context)
    return(
        <div className="profile">
         <Route>
           {
               logger.LoggedIn?"Welcome to Profile":<Redirect to="/" />
           }
         </Route>
        
        
        </div>
    );
}


export default Profile;