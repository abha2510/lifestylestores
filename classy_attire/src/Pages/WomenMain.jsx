import React from 'react'
import  Womenbags  from '../Components/Subpages/Womenbags'
import  Womenbottom  from '../Components/Subpages/Womenbottom'
import  WomenTopWear  from '../Components/Subpages/WomentopWear'
import "./Women.css";
import {Box,Text} from '@chakra-ui/react';
import{ ChevronRightIcon}from "@chakra-ui/icons"

export default function WomenMain(){
   return <div id="Container">
 <Box h={50} w={"100%"} bgColor={"#faa619"} >
            <Text paddingTop={3} color={"white"} fontWeight={"bold"}>
            Classy Attire Sale is Live <ChevronRightIcon/>
            </Text>
            </Box>
   <div id="Main">
        <WomenTopWear/>
        <Womenbags/>
        <Womenbottom/>
   </div>
    </div>
   
}