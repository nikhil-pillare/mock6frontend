import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({children}) {
let token= localStorage.getItem("token")
   
    if(token){
       return children
    }else{
        alert("login please!!")
    }


  return <Navigate to={"/signIn"}/>;
}

export default PrivateRoute;