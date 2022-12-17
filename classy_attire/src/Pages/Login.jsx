import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Image,
    HStack,
    PinInput,
    PinInputField,
  

  } from '@chakra-ui/react';

  import { useState } from "react";

  export default function Login() {
    const [otp, setOtp] = useState("");
    

  let handelAlert=()=>{
      alert("Verify with OTP")
      
  }

    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} mt={-40}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={4} w={'full'} maxW={'md'}>
            <Heading fontSize={'2xl'}>Sign up or Sign in</Heading>
            <p>Enjoy the convenienece of a single accunt all participating brands</p>
            <FormControl id="number">
              <FormLabel>Mobile Number</FormLabel>
              <Input type="number" placeholder='Enter your mobile number'/>
            </FormControl>
            <p ml={10}>By creating your account you agree to our 
                <Link color={'#FAA619'}> Term and Condition</Link></p>
            {/* <Stack spacing={6}> */}
              <Button backgroundColor={'#FAA619'}  color={"white"} w={40} ml={200}
              onClick={handelAlert}
              >
                Continue
              </Button>
              
            {/* </Stack> */}
            <FormControl>
          <HStack>
            <PinInput>
              <PinInputField
                mask
                value={otp}
                onChange={(value) => setOtp(value)}
              />
              <PinInputField />
              <PinInputField />
              <PinInputField />
            </PinInput>
          </HStack>
        </FormControl>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              'http://localhost:3000/static/media/Classy_Attire.a127db0669986d403281.png'
            }
          />
        </Flex>
      </Stack>
    );
  }