import React from "react";
import {Routes,Route} from "react-router-dom"
import Women from "../Pages/Women";
import Shoes from "../Pages/Shoes&Bags";
import More from "../Pages/More";
import Mens from "../Pages/Men";
import Login from "../Pages/Login";
import Kids from "../Pages/Kids";
import Home from "../Pages/Home";
import Favourite from "../Pages/Favourite";
import Cart from "../Pages/Cart";
import Beauty from "../Pages/Beauty";

export default function AllRoutes(){
    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/women" element={<Women/>} />
            <Route path="/shoes" element={<Shoes/>} />
            <Route path="/more" element={<More/>} />
            <Route path="/mens" element={<Mens/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/kids" element={<Kids/>} />
            <Route path="/favourite" element={<Favourite/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/Beauty" element={<Beauty/>} />
        </Routes>
        </>
    )
}