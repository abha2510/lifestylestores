import React from 'react'
import  Kidsboys  from '../Components/Subpages/KidsBoys'
import Kidsgirls from '../Components/Subpages/KidsGirls'
import{ ChevronRightIcon}from "@chakra-ui/icons"
import {Box,Text} from "@chakra-ui/react"
export default function KidsPage() {

  return <div id="Container">
     <Box h={50} w={"100%"} bgColor={"#faa619"} >
            <Text paddingTop={3} color={"white"} fontWeight={"bold"}>
            Classy Attire Sale is Live <ChevronRightIcon/>
            </Text>
            </Box>
    <div id="Main">
        <Kidsgirls/>
        <Kidsboys/>
        </div>
  </div>
}
