import React from "react";
import { Route,Routes } from "react-router-dom";
import Dashboard from "../AdminPages/Dashboard";
import UserManagement from "../AdminPages/UserManagement";


const AdminRoutes=()=>{
    return (
        <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/usermgnt" element={<UserManagement/>}/>
        </Routes>
    )
 
}

export default AdminRoutes