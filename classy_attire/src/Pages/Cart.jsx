import { Flex ,Text,Button,Heading,Divider,Stack, Box
  ,FormLabel,Alert,AlertIcon,Input,FormControl,Image,Card, Grid,
  Center
} from '@chakra-ui/react';
import {TriangleDownIcon,TriangleUpIcon} from "@chakra-ui/icons"
import React, { useEffect } from 'react'
import { useState } from 'react'
import ApiCall from '../Components/ApiCall';
// import  handleRemove  from "../Components/Subpages/DeleteItem";
import styles from './Cart.module.css';
import {Link as RouterLink} from "react-router-dom"

export default function Cart(){
    const [cartItem, setCartItem] =useState([]);
    const [Counter,setCounter]=useState(1)
    
    
    useEffect(() =>{
        ApiCall("cart","get",null)
        .then((response) => {
            setCartItem(response.data)
         // console.log("response",response.data)
        })
    },[]);

  const  handleRemove=(data)=>{
      ApiCall("cart_remove","post",data)
      .then((response) => {
        console.log(response)
        setCartItem([]);
        
      })
  }
    const handleSub=()=>{
        if(Counter===0){
            return;
        }
        setCounter(Counter-1)
    };
    const handleAdd=()=>{
        setCounter(Counter+1)
    }


  return (
    <div >
      <Flex>
      <div> 
      <Heading fontSize={20} textAlign={'left'} marginLeft={20}>Your Shopping Basket</Heading>
      <br />
      <Divider/>
      <br />
      <Heading fontSize={16} textAlign={'left'} marginLeft={20}>{cartItem.length} Product</Heading>
      <br />
   {cartItem.length===0?<Image 
   border={"0px solid gray"}
   w={"500px"}
   ml={300}
   mr={20}
   src="https://www.lifestylestores.com/_next/image?url=%2Fstatic%2Ficons%2Fempty-basket.svg&w=384&q=75"/>
   
   :cartItem?.map((prod)=>{
        return(
          <div>
            {
              <div >
                <div className={styles.cart_box}>
                  <img className={styles.cart_imgs} src={prod.img[0]} />
                  <img className={styles.cart_imgs} src={prod.img[1]} />
                  {/* <img className={styles.cart_imgs} src={prod.img[2]} /> */}
                  <div className={styles.cart_price_btn}>
                  <div className={styles.cut}>{Counter*prod.price+750}/-</div>
                    <div className={styles.cart_price}>{`Price : ₹ ${prod.price}`}</div>
                  </div>

                  <div className={styles.prod_brand}>Brand: {prod.brand}</div>
             
             <Text>Total Price:{Math.floor(Counter*prod.price)}</Text>
            
              <Flex ml={70}>
             <Button disabled={Counter===0} onClick={()=>handleSub(1)} marginBottom={5} color={"#faa619"} size="sm"><TriangleDownIcon/></Button>
             <h1 pt={10}>Qty:{Counter}</h1>
             <Button onClick={()=>handleAdd(1)}color={"#faa619"} size="sm"><TriangleUpIcon/></Button>
             </Flex>
                  <Center cursor={"pointer"} height='60px'justifyContent={"space-evenly"} w={"190%"} border={"0.5px solid gray"} color={"#faa619"}
                   onClick={()=>handleRemove()}>
                   Remove
                <Divider orientation='vertical' />
                  Move to Favourites
              </Center>

                </div>    
              </div>
            }
          </div>
        )
          })
    }
    </div>
   <Stack marginRight={"100px"} marginTop={"120px"} border= "1px solid rgb(181, 172, 172)" > 
    <Flex
      align={'right'}
      justify={'center'}>
      <Stack mx={'right'} maxW={'lg'} py={12} px={6}>
        <Box
          rounded={'lg'}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <Flex>
              <FormLabel>Deliver To</FormLabel>
              <Input w={200} type="Enter Pincode" />
              <Button>Check</Button>
              </Flex>
            </FormControl>
           <Alert status='error'>
      <AlertIcon />
    There was an error processing your request
    </Alert>
  
          </Stack>
        </Box>
      </Stack>
    </Flex>
    <Stack spacing={8} mx={'right'} maxW={'lg'} py={12} px={6} margin={"auto"} >
        <Box
          rounded={'lg'}
          boxShadow={'lg'}
          marginTop={"-100px"}
          p={8}>
          <Flex>
          <Image w={20} src="https://www.lifestylestores.com/static/icons/gift-box.png"></Image>
          <div>
          <h1 >Offer For You!!</h1>
          <p ml={20}>Choose and apply voucher</p>
          <p> in 2 simple steps.</p>
          </div>
          <Text mt={5} ml={10} color={"#faa619"}>Select</Text>
          </Flex>
        </Box>
      </Stack>
      <Stack spacing={8} mx={'right'} maxW={'lg'}  px={7} margin={"auto"}>  
         {cartItem?.map((prod)=>{
        return(
          <Box rounded={'lg'}
          boxShadow={'lg'}
          marginTop={"-70px"}
          p={8}>
        <Flex>
        <Text>Total MRP</Text>
        <Text ml={250}>{Counter*prod.price+750}</Text>        
      </Flex>
      <br />
      <Flex>
      <Text>Offer discount</Text>
      <Text ml={210} color={"green"}>-₹ 750</Text>
      </Flex>
      <br />
      <Flex>
      <Text>Shipping charge</Text>
      <Text ml={210} fontWeight={"bold"}>Free</Text>
      </Flex>
      <br />
      <hr />
      <br />
      <Flex>
        <Text fontSize={18} fontWeight={"bold"}>Total</Text>
        <Text ml={290} fontWeight={"bold"}>₹ {Counter*prod.price}</Text>        
      </Flex>
      <RouterLink to="/checkout">
      <Button w={"100%"} bg={"#faa619"} color={"white"} fontWeight={"bold"} _hover={"gray"}>Checkout now</Button>
      </RouterLink>
      </Box>
        )
      })}
      
      </Stack>
      </Stack> 
      </Flex>
    </div>

 
  )
}

