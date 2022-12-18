import React from "react";
import {Routes,Route} from "react-router-dom"
import Women from "../Pages/Women";
import Shoes from "../Pages/Shoes&Bags";
import More from "../Pages/More";
import Men from "../Pages/Men";
import Login from "../Pages/Login";
import Kids from "../Pages/Kids";
import Home from "../Pages/Home";
import Favourite from "../Pages/Favourite";
import Cart from "../Pages/Cart";
import Beauty from "../Pages/Beauty";
import WomenMain from "../Pages/WomenMain";
import Menmain from "../Pages/Menmain";
import Checkout from "../Pages/Checkout";

export default function AllRoutes(){
    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/women" element={<Women/>} />
            <Route path="/shoes" element={<Shoes/>} />
            <Route path="/more" element={<More/>} />
            <Route path="/men" element={<Men/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/kids" element={<Kids/>} />
            <Route path="/favourite" element={<Favourite/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/Beauty" element={<Beauty/>} />
            <Route path="/womenmain" element={<WomenMain/>}/>
            <Route path="/womenmain/:id" element={<WomenMain/>}/>
            <Route path="/menmain" element={<Menmain/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
        </Routes>
        </>
    )
}