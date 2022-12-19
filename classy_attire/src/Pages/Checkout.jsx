import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    HStack,
    Stack,
    Button,
    Heading,
    Text,
    Checkbox,
    Grid,
    Image,
  } from '@chakra-ui/react';
  import { useState ,useEffect } from 'react';
  import ApiCall from '../Components/ApiCall';
  import {Link as RouterLink} from "react-router-dom"
  
  export default function Checkout() {
    const [cartItem, setCartItem] =useState([]);
    const [Counter,setCounter]=useState(1)
    useEffect(() =>{
        ApiCall("cart","get",null)
        .then((response) => {
            setCartItem(response.data)
         // console.log("response",response.data)
        })
    },[]);

    const handlepayment=()=>{
        alert("Order Sucessfully Placed!! Have a nice day :)")
    }
  
    return (
      <Flex
        // minH={'100vh'}
        align={'center'}
        justify={'center'}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6} >  
        <Heading>Shipping Method</Heading>   
          <Box
            rounded={'lg'}
            boxShadow={'lg'}
            p={8} >
            <Stack spacing={6}>
                
              <HStack >
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" placeholder={"Enter First Name"}/>
                  </FormControl>
                </Box>
                <Box >
                  <FormControl id="mobilenumber">
                    <FormLabel>Mobile Number</FormLabel>
                    <Input type="number" placeholder={"Enter Mobile Number"} />
                  </FormControl>
                </Box>
              </HStack>
              <HStack>
                <Box>
                  <FormControl id="pincode" isRequired>
                    <FormLabel>Pincode</FormLabel>
                    <Input type="number" placeholder={"Enter Pincode"} />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="city">
                    <FormLabel>City</FormLabel>
                    <Input type="text" placeholder={"Enter City Name"}/>
                  </FormControl>
                </Box>
              </HStack>
              <HStack>
                <Box>
                  <FormControl id="state" isRequired>
                    <FormLabel>State</FormLabel>
                    <Input type="text" placeholder={"Enter State Name"}/>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="building">
                    <FormLabel>Building name or number</FormLabel>
                    <Input type="text" placeholder={"Enter Building Name"}/>
                  </FormControl>
                </Box>
              </HStack>
              
              <HStack>
                <Box>
                  <FormControl id="street" isRequired>
                    <FormLabel>Street name or number</FormLabel>
                    <Input type="text" placeholder={"Enter Street Name"}/>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="landmark">
                    <FormLabel>Landmark</FormLabel>
                    <Input type="text" placeholder={"Enter Landmark"}/>
                  </FormControl>
                </Box>
              </HStack>
              <Stack p={2}>
                <Text align={'center'}>
                  Adress Type(Optional)
                </Text>
                <Flex justifyContent={"flex-start"}>
                <Checkbox size='lg' colorScheme='orange' defaultUnChecked >
                   Home
                </Checkbox>
                <Checkbox size='lg' colorScheme='orange' defaultUnChecked marginLeft={10}>
                   Office
                </Checkbox>
                </Flex>
                <Checkbox size='lg' colorScheme='orange' defaultUnChecked>
                   Use this as my default shipping adress
                </Checkbox>
                <br />
                <hr />
                <br />
                <Button bg="#faa619" color={"white"} fontWeight="bold">Add Adress & Continue</Button>
                <br />
                <hr />
                <br />
              </Stack>
            </Stack>
          </Box>
          <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
            <Heading>Payment Method</Heading>
            <Grid  rounded={'lg'}
            boxShadow={'lg'}
            p={8}>
                <Checkbox size='lg' colorScheme='orange' defaultUnChecked marginLeft={10}>
                   <Flex>
                  <Image h={10} w={20}src="https://www.howtogeek.com/wp-content/uploads/2020/11/Google-Pay-hero.png?width=1198&trim=1"/>
                 Google pay
                  </Flex>
                </Checkbox>
                <Checkbox size='lg' colorScheme='orange' defaultUnChecked marginLeft={10}>
                    <Flex>
               <Image h={20} w={20} src="https://th.bing.com/th/id/OIP.AXY7P2GoHpUDMnT_LhqRlAHaHa?pid=ImgDet&rs=1"></Image>
              <Text mt={5}>PhonePe</Text> 
               </Flex>
                </Checkbox>
                <Checkbox size='lg' colorScheme='orange' defaultUnChecked marginLeft={10}>
                    <Flex>
                 <Image h={10} w={20} src="https://logosmarcas.net/wp-content/uploads/2020/11/Paytm-Emblema.png"></Image>
                Paytm
                 </Flex>
                </Checkbox>
                <Checkbox size='lg' colorScheme='orange' defaultUnChecked marginLeft={10}>
                    <Flex>
                  <Image h={10} w={10} ml={5} src="https://cdn.iconscout.com/icon/free/png-256/bhim-3-69845.png"></Image>
             <Text mt={2} ml={5}> Bhim</Text>
                  </Flex>
                </Checkbox>
                <Checkbox size='lg' colorScheme='orange' defaultUnChecked marginLeft={10}>
                    <Flex>
                   <Image  h={10} w={10} ml={5} src="https://th.bing.com/th/id/OIP.tm019Auh5djE0Snj_8cj6wHaHa?pid=ImgDet&rs=1"></Image>
              <Text mt={2}>Other UPI App</Text>  
                   </Flex>
                </Checkbox>
                <RouterLink to="/">
                <Button bg="#faa619" color={"white"} fontWeight="bold" w={"100%"} onClick={()=>handlepayment()}>Pay Now</Button>
                </RouterLink>
                </Grid>
          </Stack>
        </Stack>

       <Grid >
        <Stack spacing={8} mx={'right'} maxW={'lg'}  px={7} margin={"auto"} marginRight={150} marginLeft="-242px" marginTop={"-600px"}>   
         {cartItem?.map((prod)=>{
        return(
          <Box rounded={'lg'}
          boxShadow={'lg'}
          ml={"-10px"}
          p={8}>
        <Flex>
        <Text>Total MRP</Text>
        <Text ml={260}>{Counter*prod.price+750}</Text>        
      </Flex>
      <br />
      <Flex>
      <Text>Offer discount</Text>
      <Text ml={220} color={"green"}>-₹ 750</Text>
      </Flex>
      <br />
      <Flex>
      <Text>Shipping charge</Text>
      <Text ml={220} fontWeight={"bold"}>Free</Text>
      </Flex>
      <br />
      <hr />
      <br />
      <Flex>
        <Text fontSize={18} fontWeight={"bold"}>Total</Text>
        <Text ml={290} fontWeight={"bold"}>₹ {Counter*prod.price}</Text>        
      </Flex>
      <br />
      <hr />
      <Flex justifyContent={"space-between"}>
                <Text>Order Summary</Text>
                <Text color="orange">Details</Text>
        </Flex>
        <img mt={10} src="https://i1.lmsin.net/website_images/in/checkout/comodo-secure-icon.svg" alt="" />
     <Text fontSize={13}>Your credit card details are securely encrypted and passed directly to our PCI 
        DSS compliant Payment Gateway for processing. We only store your credit card's last 4 
        digits and the expiration date. Your traffic to this page is 
        secured using either a 256-bit or 128-bit SSL certificate depending on your browser version.</Text>
      
      <Text  fontSize={14} float="left">© 2021 RNA Intellectual Property Limited.</Text>
      <Text  fontSize={14} float="left">Privacy Policy-Terms of Use-Terms & Conditions</Text>
      </Box>
        )
      })}
      
      </Stack>
       </Grid>
      </Flex>
    );
  }