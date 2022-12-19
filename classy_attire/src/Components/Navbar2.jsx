import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Grid,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    useColorMode,
    Image,Input,
    InputGroup,
    InputLeftElement,
    Heading
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,MoonIcon, SunIcon 
  } from '@chakra-ui/icons';
  import logo from "../logo/Classy_Attire.png";
  import {Link as RouterLink} from "react-router-dom";
  import {BsFillHandbagFill} from "react-icons/bs";
  import { FaSearch } from 'react-icons/fa';
  import {FiHeart} from "react-icons/fi"
 import { useState ,useEffect} from 'react';
 import ApiCall from './ApiCall';
  
  export default function Nav2() {
    const { isOpen, onToggle } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();
  
    
    const [cartItem, setCartItem] =useState([]);
    useEffect(() =>{
       ApiCall("cart","get",null)
        .then((response) => {
            setCartItem(response.data)
          console.log("responsekids",response)
        })
    },[])

    return (
      <Box position={"relative"}>
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue("rgb(247, 248, 247)")}
          align={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'white')}>
              <RouterLink to="/"> <Image src={logo} h={20} mt={-7} paddingTop={3}></Image></RouterLink>
            </Text>
  
            <Flex display={{ base: 'none', md: 'flex' }} ml={10} mt={2}>
              <DesktopNav />
            </Flex>
            <InputGroup w={500} ml={10} >
                 <InputLeftElement
                 pointerEvents='none'
                  children={<FaSearch color='gray.300' />}
                  />
                <Input type='text' placeholder='What are you looking for?'bg={"#ECEDEB"} />
              </InputGroup>
              </Flex>
          
            <Text mr={-10} >More  |</Text>
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            marginLeft={50}
            spacing={1}>
             
            <Button
              as={'a'}
              fontSize={'sm'}
              fontWeight={400}
              variant={'link'}
              href={'login'}>
              Sign Up/Sing In
            </Button>
            
            <Button bg={"white"}_hover={'none'}>
            <FiHeart/>
            </Button>
             <Button bg={"white"}_hover={'none'}>
            <RouterLink to="/cart">
              <Flex space={6}>
            <BsFillHandbagFill/>
            <Box marginTop={-4}>
            <Text 
            background={"#faa619"}
            p={1}
            borderRadius={200}
            fontWeight={"bold"}
            color={"white"}
            >{cartItem?.length}</Text></Box>
            </Flex>
            </RouterLink>
            </Button>
              <Button onClick={toggleColorMode} bg={"white"} _hover={'none'}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
             
          </Stack>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack direction={'row'} spacing={4} >
        
        {NAVITEMS.map((navItem) => (
           
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
               
                <Link
                  p={2}
                  // mt={10}
                  href={navItem.href ?? '#'}
                  fontSize={14}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                </Link>
                
              </PopoverTrigger>
  
              {navItem.children && (
               
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
               
              )}
            </Popover>
          </Box>
        ))}
      
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel ,sub,top,legg})=> {
    return (
      <Link
   
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box >
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.400' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
            <Text fontSize={'sm'}>{sub}</Text>
            <Text fontSize={'sm'}>{top}</Text>
            <Text fontSize={'sm'}>{legg}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAVITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
        
      </Stack>
      
    );
  };
  

  const NAVITEMS=[
    {
      label: 'Women',
      href: '/women',
      children: [
        {
          label: 'Ethnic & Fusion Wear',
          subLabel: 'Kurtas & Kurtis',
          sub:'Kurta Sets',
          top:"Ethnic Dresses",
          legg:'Leggings & Chridars',
          href: '/women',
        },
        {
          label: 'Western Wear',
          subLabel: 'Tos & Tees',
          sub:'Dresses & Jumpsuits',
          top:"Jeand & Jeggings",
          legg:'Shorts & Skirts',
          href: '/women',
        },
        {
          label: 'Lingerie/Sleepwear',
          subLabel: 'Bras',
          sub:'Dresses & Jumpsuits',
          top:"Jeand & Jeggings",
          legg:'Shorts & Skirts',
          href: '/women',
          },
          {
            label: 'SportWear',
            subLabel: 'Tops & Tees',
            href: '/women',
          },
      ]
      
    },
    {
      label: 'Men',
      href: '/men',
      children: [
        {
          label: 'Top Wear',
          subLabel: 'Casual Shirts',
          sub:'Polos',
          top:"T-Shirts",
          legg:'Jackets',
          href: '/men',
        },
        {
          label: 'Bottomwear',
          subLabel: 'Casual Trousers',
          sub:'Jeans',
          top:"Track Pants",
          legg:'Shorts & 3/4ths',
          href: '/men',
        },
      ],
    },
    {
      label: 'Kids',
      href: '/kids',
      children: [
        {
          label: 'Boys',
          subLabel: 'T-Shirts/Polos',
          sub:'Shirts',
          top:"Jeans",
          legg:'Shorts',
          href: '/kids',
        },
        {
          label: 'Girls',
          subLabel: 'Tops & Tees',
          sub:'Dresses/Jumpsuits',
          top:"Clothing Sets",
          legg:'TrackPants/Joggers',
          href: '/kids',
        },
      ],
    },
    {
      label: 'Shoes & Bags',
      href: '/shoes',
      children: [
        {
          label: 'Women',
          subLabel: 'Ballerinas',
          sub:'Flip flops & Sliders',
          top:"Flat Sandels",
          legg:'Heels',
          href: '/shoes',
        },
        {
          label: 'Men',
          subLabel: 'Loafers & Moccasin',
          sub:'Slip-Ons',
          top:"Sports Shoes",
          legg:'Boots',
          href: '/shoes',
        }
      ]
    },
    {
      label: 'Beauty',
      href: '/beauty',
    }
  ]