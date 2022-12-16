import {Link as RouterLink} from "react-router-dom"
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Image,
  Input,
  Text
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import logo from "../logo/Classy_Attire.png"
 import {BsFillHandbagFill} from "react-icons/bs";

 const Links = [ 
    'Home',
    'Women',
     'Men',
     'Kids' ,
     'Shoes & Bag',
     'Beauty',
     'More',
     '♥',
     'cart'
    ];
 
const NavLink = () => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
 
  </Link>
);

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={6} position="sticky">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={10} alignItems={'center'} >
           <RouterLink to="/">
            <Image src={logo} h={20}></Image>
            </RouterLink>
            <RouterLink to="/">
            <Text>Home</Text>
            </RouterLink>

            <RouterLink to="/women">
            <Text>Women</Text>
            </RouterLink>

            <RouterLink to="/men">
            <Text>Men</Text>
            </RouterLink>

            <RouterLink to="/kids">
            <Text>Kids</Text>
            </RouterLink>

            <RouterLink to="/shoes">
            <Text>Shoes & Bags</Text>
            </RouterLink>

            <RouterLink to="/beauty">
            <Text>Beauty</Text>
            </RouterLink>

            <Input placeholder='Search'></Input>

            <RouterLink to="/more">
            <Text>More</Text>
            </RouterLink>

            <RouterLink to="favourite">
            <Text>♥</Text>
            </RouterLink>

            <RouterLink to="/cart">
            <BsFillHandbagFill/>
            </RouterLink>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <RouterLink to="/login">
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
            </RouterLink>
            <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
          </Flex>
         
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={4}></Box>
    </>
  );
}