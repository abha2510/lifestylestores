import React from 'react'
import{ ChevronRightIcon}from "@chakra-ui/icons"
import ShoesBag from "../Components/Subpages/Shoes&bags";
import {Box,Text} from "@chakra-ui/react"

export default function Shoes(){
   return <div id="Container">
       <Box h={50} w={"100%"} bgColor={"#faa619"} >
            <Text paddingTop={3} color={"white"} fontWeight={"bold"}>
            Classy Attire Sale is Live <ChevronRightIcon/>
            </Text>
            </Box>
   <div id="Main">
      <ShoesBag/>
   </div>
    </div>
   
}