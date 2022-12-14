import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    Image,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { PhoneIcon, QuestionIcon, EmailIcon } from '@chakra-ui/icons'

  const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };
  
  export default function LargeWithLogoCentered() {
    return (
        <>
      
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container as={Stack} maxW={'6xl'} py={8}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
            <Stack align={'flex-start'} fontSize={14}>
              <ListHeader>Women</ListHeader>
              <Link href={'#'}>Tops</Link>
              <Link href={'#'}>Ethmicwear</Link>
              <Link href={'#'}>Bottoms</Link>
              <Link href={'#'}>Dresses & Jumpsuits</Link>
              <Link href={'#'}>Winterwear</Link>
              <Link href={'#'}>Lingerie</Link>
              <Link href={'#'}>Nightwear</Link>
              <Link href={'#'}>Sportswear</Link>
              <Link href={'#'}>Beauty</Link>
              <Link href={'#'}>Watches & Sunglasses</Link>
            </Stack>
            <Stack align={'flex-start'} fontSize={14}>
              <ListHeader>Men</ListHeader>
              <Link href={'#'}>Tops</Link>
              <Link href={'#'}>Bottms</Link>
              <Link href={'#'}>Ethnicwear</Link>
              <Link href={'#'}>Winterwear</Link>
              <Link href={'#'}>Sportswear</Link>
              <Link href={'#'}>Innerwear</Link>
              <Link href={'#'}>Grooming</Link>
              <Link href={'#'}>Watches</Link>
              <Link href={'#'}>Sunglasses</Link>
            </Stack>
            <Stack align={'flex-start'} fontSize={14}>
              <ListHeader>Kids</ListHeader>
              <Link href={'#'}>Girls Clothing</Link>
              <Link href={'#'}>Boys Clothing</Link>
              <Link href={'#'}>Infants Girls</Link>
              <Link href={'#'}>Infants Boys</Link>
              <Link href={'#'}>Winterwear</Link>
              <Link href={'#'}>Add ons</Link>
              <Link href={'#'}>The Teen Shop</Link>
            </Stack>
            <Stack align={'flex-start'} fontSize={14}>
              <ListHeader>Shoes & Bags</ListHeader>
              <Link href={'#'}>Women</Link>
              <Link href={'#'}>Men</Link>
              <Link href={'#'}>Boys</Link>
              <Link href={'#'}>Girls</Link>
              <Link href={'#'}>Women</Link>
              <Link href={'#'}>Accessories</Link>
              <Link href={'#'}>Men Accessories</Link>
              <Link href={'#'}>Essential</Link>
            </Stack>
            <Stack align={'flex-start'} fontSize={14}>
              <ListHeader>Beauty</ListHeader>
              <Link href={'#'}>Makeup Eyes</Link>
              <Link href={'#'}>Makeup Face</Link>
              <Link href={'#'}>Makeup Lips</Link>
              <Link href={'#'}>Makeup Nails</Link>
              <Link href={'#'}>Perfumes</Link>
            </Stack>
            <Stack align={'flex-start'} fontSize={14}>
              <ListHeader>Explore</ListHeader>
              <Link href={'#'}>Online Offers</Link>
              <Link href={'#'}>Store Offers</Link>
              <Link href={'#'}>Online Gift Card</Link>
              <Link href={'#'}>Store Gift Card</Link>
              <Link href={'#'}>Stores Nearby</Link>
              <Link href={'#'}>EDGE</Link>
              <Link href={'#'}>Membership</Link>
              <Link href={'#'}>WhatsApp</Link>
              <Link href={'#'}>Fashion VLOG</Link>
              <Link href={'#'}>Join CIRCLEMAG</Link>
              <Link href={'#'}>SBI Offers</Link>
              <Link href={'#'}>Homecentre</Link>
            </Stack>
            <Stack align={'flex-start'} fontSize={14}>
              <ListHeader>About</ListHeader>
              <Link href={'#'}>About us</Link>
              <Link href={'#'}>Careers</Link>
              <Link href={'#'}>Take a Tour</Link>
              <Link href={'#'}>Blog</Link>
              <Link href={'#'}>Store Locator</Link>
              <Link href={'#'}>Landmark Cares</Link>
            </Stack>
            <Stack align={'flex-start'} fontSize={14}>
              <ListHeader>Help</ListHeader>
              <Link href={'#'}>Contact us</Link>
              <Link href={'#'}>Shipping</Link>
              <Link href={'#'}>Returns Process</Link>
              <Link href={'#'}>Returns Policy</Link>
              <Link href={'#'}>Help Centre</Link>
            </Stack>
          </SimpleGrid>
        </Container>
        <Box py={10}>
          <Flex
            align={'center'}
            _before={{
              content: '""',
              borderBottom: '1px solid',
              borderColor: useColorModeValue('gray.200', 'gray.700'),
              flexGrow: 1,
              mr: 8,
            }}
            _after={{
              content: '""',
              borderBottom: '1px solid',
              borderColor: useColorModeValue('gray.200', 'gray.700'),
              flexGrow: 1,
              ml: 8,
            }}>
            {/* <Logo /> */}
          </Flex>
          <Flex ml={50}>
          <Flex >
        <Flex mr={15}><PhoneIcon/>
        <h3>Talk to us</h3>
        <h2>1800-123-1555</h2>
        </Flex>
       <Flex mr={15}><QuestionIcon mt={2}/>
       <h3>Helpcentre</h3>
       <h2>help.lifestylestores.com</h2>
       </Flex> 
       <Flex><EmailIcon mt={2}/>
       <h3>Write to us</h3>
       <h2>help@lifestylestores.com</h2>
       </Flex> 
       </Flex>

        </Flex>
          <Flex ml={450}>
          <Image h={20} w={20} src="http://localhost:3000/static/media/Classy_Attire.a127db0669986d403281.png" alt=""></Image>
          <Text pt={6} fontSize={'sm'} textAlign={'center'}>
            © 2022 RNA Intellectual Property Limited.
            Terms & Condition-Privacy Policy
          </Text>
          </Flex>
        </Box>
        
      </Box>
     
      </>
    );
  }