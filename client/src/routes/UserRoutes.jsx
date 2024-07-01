import React from "react";
import {Routes,Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Profile from "../Pages/Profile";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import CreateAc from "../Pages/CreateAc";
import Main from "../Pages/Main";
import Employment from "../Pages/Employment";
import Status from "../Pages/Status";
import InterestedIn from "../Pages/InterestedIn";
import ProfileListing from "../Pages/ProfileListing";

const UserRoutes=()=>{
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/createac" element={<CreateAc/>}/>
            <Route path="/main" element={<Main/>}/>
            <Route path="/employment" element={<Employment/>}/>
            <Route path="/status" element={<Status/>}/>
            <Route path="/interestedin" element={<InterestedIn/>}/>
            <Route path="/profilelisting" element={<ProfileListing/>}/>
        </Routes>
    )
}

export default UserRoutes