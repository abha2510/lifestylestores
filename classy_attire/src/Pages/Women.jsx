import React from 'react';
import Carousel2 from './Carousel2';
import "./Women.css";
import {Link as RouterLink} from "react-router-dom"
import {
    Heading,
    Box,Text
}from "@chakra-ui/react"
import {ChevronRightIcon} from "@chakra-ui/icons"

export default function WomenPage() {
    const dealCorner=[
        {image:"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-Carousel8-3-Women-Desktop-13Dec2022.jpg"},
        {image:"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-Carousel8-1-Women-Desktop-13Dec2022.jpg"},
        {image:"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-Carousel8-2-Women-Desktop-13Dec2022.jpg"},
        {image:"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-Carousel8-4-Women-Desktop-13Dec2022.jpg"},
        {image:"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-Carousel8-5-Women-Desktop-13Dec2022.jpg"},
        {image:"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-Carousel8-6-Women-Desktop-13Dec2022.jpg"},
      ]
 
    const winterEssential=[
        {image:"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-E-1-Women-Desktop-03Nov2022.jpg"},
        {image:"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-E-4-Women-Desktop-03Nov2022.jpg"},
        {image:"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-E-3-Women-Desktop-03Nov2022.jpg"},
        {image:"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-E-2-Women-Desktop-03Nov2022.jpg"},
        {image:"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-E-5-Women-Desktop-03Nov2022.jpg"},
        {image:"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-E-6-Women-Desktop-03Nov2022.jpg"},
    ]
const topBrand=[
    {image:"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-1-Desktop-Women-24Nov2022.jpg"},
    {image:"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-2-Desktop-Women-24Nov2022.jpg"},
    {image:"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-3-Desktop-Women-24Nov2022.jpg"},
    {image:"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-4-Desktop-Women-24Nov2022.jpg"},
    {image:"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-5-Desktop-Women-23Nov2022.jpg"},
    {image:"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-6-Desktop-Women-24Nov2022.jpg"},
    {image:"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-7-Desktop-Women-15Dec2022.jpg"},
    {image:"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-8-Desktop-Women-23Nov2022.jpg"},
    {image:"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-9-Desktop-Women-23Nov2022.jpg"},
    {image:"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-10-Desktop-Women-24Nov2022.jpg"},
    {image:"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-11-Desktop-Women-15Dec2022.jpg"},
    {image:"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-12-Desktop-Women-23Nov2022.jpg"},
]
const topPicks=[
    {image:"https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Women-modblock-oneBythree-D-24Nov2022.jpg"},
    {image:"https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Women-modblock-oneBythree-E-24Nov2022.jpg"},
    {image:"https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Women-modblock-oneBythree-F-24Nov2022.jpg"}
]
const TrendyBottom=[
    {image:"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-F-1-Women-Desktop-07Oct2022.jpg"},
    {image:"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-F-4-Women-Desktop-07Oct2022.jpg"},
    {image:"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-F-3-Women-Desktop-07Oct2022.jpg"},
    {image:"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-F-2-Women-Desktop-07Oct2022.jpg"},
    {image:"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-F-5-Women-Desktop-14Oct2022.jpg"},
    {image:"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-F-6-Women-Desktop-14Oct2022.jpg"},
]
const ActiveWear=[
    {image:"https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-14modularblock-oneBythree-A-Women-15Dec2022.jpg"},
    {image:"https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-14modularblock-oneBythree-B-Women-15Dec2022.jpg"},
    {image:"https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-14modularblock-oneBythree-C-Women-15Dec2022.jpg"},
]
const Ethic=[
    {image:"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-Carousel7-1-Women-Desktop-08Nov2022.jpg"},
    {image:"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-Carousel7-2-Women-Desktop-08Nov2022.jpg"},
    {image:"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-Carousel7-3-Women-Desktop-08Nov2022.jpg"},
    {image:"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-Carousel7-4-Women-Desktop-08Nov2022.jpg"},
    {image:"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-Carousel7-5-Women-Desktop-03Nov2022.jpg"},
    {image:"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-Carousel7-6-Women-Desktop-03Nov2022.jpg"},
]
const Loved=[
    {image:"https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-6modblk-oneBythree-A-Women-09Dec2022.jpg"},
    {image:"https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-6modblk-oneBythree-B-Women-09Dec2022.jpg"},
    {image:"https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-6modblk-oneBythree-C-Women-12Dec2022.jpg"},
  
]
const Curated=[
    {image:"https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-women-modularblock-oneBythree-A-01Dec2022.jpg"},
    {image:"https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-women-modularblock-oneBythree-B-01Dec2022.jpg"},
    {image:"https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-women-modularblock-oneBythree-C-01Dec2022.jpg"},
]
const Occasion=[
    {image:"https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-15modularblock-oneBythree-A-Women-14Dec2022.jpg"},
    {image:"https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-15modularblock-oneBythree-B-Women-14Dec2022.jpg"},
    {image:"https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-15modularblock-oneBythree-C-Women-14Dec2022.jpg"},
]
const Department=[
    {image:"https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-11modblock-oneBythree-A-Women-04March2022A.jpg"},
    {image:"https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-11modblock-oneBythree-B-Women-12April2022.jpg"},
    {image:"https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-11modblock-oneBythree-C-Women-04March2022A.jpg"},
]
  return <div id="Container">
     <Box h={50} w={"100%"} bgColor={"#faa619"} >
            <Text paddingTop={3} color={"white"} fontWeight={"bold"}>
            Classy Attire Sale is Live <ChevronRightIcon/>
            </Text>
            </Box>
    <div id="Main">
        <Carousel2/>
        <Heading className="textc">Deal Corner</Heading>
      <div className='dealcorner'>
        {dealCorner.map((e)=>(     
                     <div><img  src={e.image} alt="" /> </div>      
        ))}
        </div>
        <Heading className="textc">Winterwear Essential</Heading>
      <div className='dealcorner'>
        {winterEssential.map((e)=>(
         <div>
             <RouterLink to="/womenmain">
            <img  src={e.image} alt="" />
            </RouterLink>
            </div>            
        ))}
        </div>
        <RouterLink to="/womenmain">
        <img  
        style={{marginTop:"15px"}}
        src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-10modblock-oneBythree-A-Women-06Dec2022.gif" alt="" />
       </RouterLink>

       <Heading className="textc">Top Trendings Brands</Heading>
      <div className='dealcorner'>
        {topBrand.map((e)=>(
         <div>
            <RouterLink to="/womenmain">
            <img  src={e.image} alt="" />
            </RouterLink>
            </div>            
        ))}
        </div>
        <Heading className="textc">Flas Sale For Today</Heading>
        <img 
        style={{marginTop:"15px"}}
        src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-women-modularblock1-A-13Dec2022A.gif" alt="" />
        
        <Heading className="textc">Top Picks</Heading>
      <div className='topPicks'>
        {topPicks.map((e)=>(
         <div>
             <RouterLink to="/womenmain">
            <img  src={e.image} alt="" />
            </RouterLink>
            </div>            
        ))}
        </div>
        <img 
        style={{marginTop:"15px"}}
        src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-12modblock-oneBythree-A-StripBanner1-24Nov2022.jpg" alt="" />
       
       <Heading className="textc">Trendy Bottom Wear</Heading>
      <div className='dealcorner'>
        {TrendyBottom.map((e)=>(
         <div>
            <RouterLink to="/womenmain">
            <img  src={e.image} alt="" />
            </RouterLink>
            </div>            
        ))}
        </div>
       
    <Heading className="textc">Trendy Bottom Wear</Heading>
      <div className='topPicks'>
        {ActiveWear.map((e)=>(
         <div>
            <RouterLink to="/womenmain">
            <img  src={e.image} alt="" />
            </RouterLink>
            </div>            
        ))}
        </div>
       
    <Heading className="textc">Trending Ethnic Wear</Heading>
      <div className='dealcorner'>
        {Ethic.map((e)=>(
         <div>
            <RouterLink to="/womenmain">
            <img  src={e.image} alt="" />
            </RouterLink>
            </div>            
        ))}
        </div>

        <Heading className="textc">Most Loved Winterwear Styles</Heading>
      <div className='topPicks'>
        {Loved.map((e)=>(
         <div>
             <RouterLink to="/womenmain">
            <img  src={e.image} alt="" />
            </RouterLink>
            </div>            
        ))}
        </div>

        <Heading className="textc">Curated For You</Heading>
      <div className='topPicks'>
        {Curated.map((e)=>(
         <div>
             <RouterLink to="/womenmain">
            <img  src={e.image} alt="" />
            </RouterLink>
            </div>            
        ))}
        </div>

        <Heading className="textc">Occasion Wear Edit</Heading>
      <div className='topPicks'>
        {Occasion.map((e)=>(
         <div>
             <RouterLink to="/womenmain">
            <img  src={e.image} alt="" />
            </RouterLink>
            </div>            
        ))}
        </div>

        <Heading className="textc">Shop By Department</Heading>
      <div className='topPicks'>
        {Department.map((e)=>(
         <div>
             <RouterLink to="/womenmain">
            <img  src={e.image} alt="" />
            </RouterLink>
            </div>            
        ))}
        </div>


        </div>
    </div>
  
}
