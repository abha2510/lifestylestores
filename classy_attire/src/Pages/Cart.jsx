import { Flex ,Text,Button} from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useState } from 'react'
import ApiCall from '../Components/ApiCall';
import  handleRemove  from "../Components/Subpages/DeleteItem";
import styles from './Cart.module.css'

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
    <div>
      <h3>Orders Details</h3>
    {
      cartItem?.map((prod)=>{
        return(
          <div>
            {
              <div >
                <div className={styles.cart_box}>
                  <img className={styles.cart_imgs} src={prod.img[0]} />
                  <img className={styles.cart_imgs} src={prod.img[1]} />
                  <img className={styles.cart_imgs} src={prod.img[2]} />
                  {/* <div className={styles.cart_price_btn}>
                    <div className={styles.cart_price}>{`Price : ₹ ${prod.price}`}</div>
                  </div> */}

                  <div className={styles.prod_brand}>Brand: {prod.brand}</div>
             <Flex>
             <Button disabled={Counter===0} onClick={()=>handleSub(1)}>-</Button>
             <h1>{Counter}</h1>
             <Button onClick={()=>handleAdd(1)}>+</Button>
             </Flex>
             <Text>Total Price:{Math.floor(Counter*prod.price)}</Text>
               
               <Button onClick={()=>handleRemove(prod) }>Delete</Button>
                </div>
               
              </div>
              
            }
          </div>
        )
      })
    }
    </div>
  )
}

// import {
//     Box,
//     Center,
//     useColorModeValue,
//     Heading,
//     Text,
//     Stack,
//     Image,
//   } from '@chakra-ui/react';
// import axios from 'axios';
// import { useEffect } from 'react';
// import { useState } from 'react';
// import { useParams } from 'react-router-dom';
  
//   export default function Cart() {
//     const [cart,setCart]=useState({});
//     const {id} =useParams();

//     useEffect(()=>{
//     axios.get(`http://localhost:8080/womenmain/cart/${id}`)
//     .then(({data})=>{
//         setCart(data)
//     })
//     .catch((e)=>console.log(e.message))
//     },[id])

//  const {img,price,brand,category}=cart;

//     return (
//       <Center py={12}>
//         <Box
//           role={'group'}
//           p={6}
//           maxW={'330px'}
//           w={'full'}
//           bg={useColorModeValue('white', 'gray.800')}
//           boxShadow={'2xl'}
//           rounded={'lg'}
//           pos={'relative'}
//           zIndex={1}>
//           <Box
//             rounded={'lg'}
//             mt={-12}
//             pos={'relative'}
//             height={'230px'}
//             _after={{
//               transition: 'all .3s ease',
//               content: '""',
//               w: 'full',
//               h: 'full',
//               pos: 'absolute',
//               top: 5,
//               left: 0,
//             //   backgroundImage: `url(${IMAGE})`,
//               filter: 'blur(15px)',
//               zIndex: -1,
//             }}
//             _groupHover={{
//               _after: {
//                 filter: 'blur(20px)',
//               },
//             }}>
//             <Image
//               rounded={'lg'}
//               height={230}
//               width={282}
//               objectFit={'cover'}
//               src={img}
//             />
//           </Box>
//           <Stack pt={10} align={'center'}>
//             <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
//               Brand
//             </Text>
//             <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
//               Nice Chair, pink
//             </Heading>
//             <Stack direction={'row'} align={'center'}>
//               <Text fontWeight={800} fontSize={'xl'}>
//                 $57
//               </Text>
//               <Text textDecoration={'line-through'} color={'gray.600'}>
//                 $199
//               </Text>
//             </Stack>
//           </Stack>
//         </Box>
//       </Center>
//     );
//   }