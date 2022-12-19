import Menactivewear  from '../Components/Subpages/Menactivewear';
import  Menbottomwear  from '../Components/Subpages/Menbottomwear';
import  Mentopwear  from '../Components/Subpages/Mentopwear';
import React from 'react';
import {Box,Text} from '@chakra-ui/react';
import{ ChevronRightIcon}from "@chakra-ui/icons"

export default function Men(){
  return <div id="Container">
      <Box h={50} w={"100%"} bgColor={"#faa619"} >
            <Text paddingTop={3} color={"white"} fontWeight={"bold"}>
            Classy Attire Sale is Live <ChevronRightIcon/>
            </Text>
            </Box>
    <div id="Main">
      <Mentopwear/>
      <Menbottomwear/>
      <Menactivewear/>
    </div>
</div>

}