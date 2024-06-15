import React from "react";
import { Route,Routes } from "react-router-dom";
import Dashboard from "../AdminPages/Dashboard";


const AdminRoutes=()=>{
    return (
        <Routes>
            <Route path="/" element={<Dashboard/>}/>
        </Routes>
    )
 
}

export default AdminRoutes