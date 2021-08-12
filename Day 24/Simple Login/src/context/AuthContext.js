"use strict"

import React,{ useState}from 'react'
const Context=React.createContext( )
export default Context;



export  function AuthContext({children}) {
    const [LoggedIn,setLoggedIn]=useState(false)
    const [LoadIn,setLoadIn]=useState(false)
    
    const logger={
        LoggedIn:LoggedIn,
        LoadIn:LoadIn,
      
        togglelogin:()=>{
            setLoggedIn(!LoggedIn)
        }
    }
    return (
        <Context.Provider value={logger}>
             {children}
        </Context.Provider>
    );
}  
