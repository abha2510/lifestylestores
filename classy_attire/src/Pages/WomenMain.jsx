import React from 'react'
import  Womenbags  from '../Components/Subpages/Womenbags'
import  Womenbottom  from '../Components/Subpages/Womenbottom'
import  WomenTopWear  from '../Components/Subpages/WomentopWear'
import "./Women.css";

export default function WomenMain(){
   return <div id="Container">
   <div id="Main">
        <WomenTopWear/>
        <Womenbags/>
        <Womenbottom/>
   </div>
    </div>
   
}