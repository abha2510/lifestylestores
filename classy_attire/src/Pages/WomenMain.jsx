import React from 'react'
import  Womenbags  from '../Components/Subpages/Womenbags'
import  Womenbottom  from '../Components/Subpages/Womenbottom'
import  WomenTopWear  from '../Components/Subpages/WomentopWear'
import "./Women.css";
import {Box,Heading,Button} from '@chakra-ui/react';
import{ ChevronRightIcon}from "@chakra-ui/icons"
import axios from 'axios';


export default function WomenMain(price){
     
     axios.get(`http://localhost:3000/womenmain?_sort=${price}`);


   return <div id="Container">
 <Box h={100} w={"100%"}  >
     
            <Heading p={8} bg={"gray.100"} fontWeight={"bold"}>
            Sweatshirts & Hoodies <ChevronRightIcon/>
            </Heading>
            </Box>
   <div id="Main">
    
        <WomenTopWear/>
        <Box h={100} w={"100%"}  >
            <Heading p={8} bg={"gray.100"} fontWeight={"bold"}>
            Bags & Slings <ChevronRightIcon/>
            </Heading>
            </Box>
        <Womenbags/>
        <Box h={100} w={"100%"}  >
            <Heading p={8} bg={"gray.100"} fontWeight={"bold"}>
            Bottom <ChevronRightIcon/>
            </Heading>
            </Box>
        <Womenbottom/>
   </div>
    </div>
   
}