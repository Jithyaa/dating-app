import React from "react";
import {Routes,Route } from "react-router-dom";
import UserRoutes from './UserRoutes'

const RoutesConfig=()=>{
    return(
       
            <Routes>
                <Route path="/user/*" element={<UserRoutes/>}/>
            </Routes>
        
    )
}

export default RoutesConfig