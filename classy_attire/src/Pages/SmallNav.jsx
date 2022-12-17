import styles from "./SmallNav.module.css"
export default function SmallNav(){

    return(
        <div id="main">
        <div className={styles.topBar}>
            <div className={styles.top_left_bar}>
                <div className={styles.h_top_bar}>
                    <span className={styles.text_top} >
                        <img className={styles.icon}src="https://th.bing.com/th/id/OIP.qBTtDLmAKojvxgtJ8o6YGwHaHa?pid=ImgDet&w=512&h=512&rs=1" alt="" />
                        <h5 className={styles.nav_text} >Free Shipping</h5>
                    </span>
                </div>
                <div className={styles.h_top_bar}>
                    <span className={styles.text_top}>
                        <img className={styles.icon} src="https://static.vecteezy.com/system/resources/previews/000/500/510/original/shopping-cart-icon-design-vector.jpg" alt="" />
                        <h5 className={styles.nav_text} >Click Collect</h5>
                    </span>
                </div>
                <div className={styles.h_top_bar}>
                    <span className={styles.text_top}>
                        <img className={styles.icon} src="https://az686452.vo.msecnd.net/cmr/t7668/src/b40e4f2ffd40492e9c79c5d126a3b670_1.jpg" alt="" />
                        <h5 className={styles.nav_text}>Return</h5>
                    </span>
                </div>
            </div>

            <div className={styles.top_text_left}>
            <div className={styles.up_nav_h6}>Download our store |</div>
            <div className={styles.up_nav_h6}> Store Locator |</div>
            <div className={styles.up_nav_h6}>Help</div>
            </div>

        </div>
        </div>
    )
}


// import {
//   Box,
//   Flex,
//   Avatar,
//   HStack,
//   Link,
//   IconButton,
//   Button,
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
//   MenuDivider,
//   useDisclosure,
//   useColorModeValue,
//   Stack,
// } from '@chakra-ui/react';
// import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

// const Links = ['Free Shipping', 'Click Collect', 'Return'];

// const NavLink=({children})=>(
//   <Link
//     px={2}
//     py={1}
//     rounded={'md'}
//     _hover={{
//       textDecoration: 'none',
//       bg: useColorModeValue('gray.200', 'gray.700'),
//     }}
//     href={'#'}>
//     {children}
//   </Link>
// );

// export default function SmallNav() {
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   return (
//     <>
//       <Box bg={useColorModeValue('black')} px={4}>
//         <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
//           <IconButton
//             size={'md'}
//             icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
//             aria-label={'Open Menu'}
//             display={{ md: 'none' }}
//             onClick={isOpen ? onClose : onOpen}
//           />
//           <HStack spacing={8} alignItems={'center'} color={'white'}>
//             {/* <Box>Logo</Box> */}
//             <HStack
//               as={'nav'}
//               spacing={4}
//               display={{ base: 'none', md: 'flex' }}>
//               {Links.map((link) => (
//                 <NavLink key={link}>{link}</NavLink>
//               ))}
//             </HStack>
//           </HStack>
//           <Flex alignItems={'center'}>
           
          
//           </Flex>
//         </Flex>

//         {isOpen ? (
//           <Box pb={4} display={{ md: 'none' }}>
//             <Stack as={'nav'} spacing={4}>
//               {Links.map((link) => (
//                 <NavLink key={link}>{link}</NavLink>
//               ))}
//             </Stack>
//           </Box>
//         ) : null}
//       </Box>
     
//     </>
//   );
// }