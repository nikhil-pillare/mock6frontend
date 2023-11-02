import { Box, Flex, FormControl, Input, Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useToast } from '@chakra-ui/react';
const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast()
  const handleSubmit = async () => {
    const obj= {
      email,
      password,
    };

    try {
      const response = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
      });

      if(response.ok){
        const result = await response.json();
        const token = result.token;
        console.log('Token:', token);
        toast({
            title: 'Login SuccessFul!!',
            status: 'success',
            duration: 7000,
            isClosable: true,
            position:"bottom-right"
          })
        if(token){
            window.location.href="/boards"
        }
        localStorage.setItem("token",token)
      } else {
       
        console.error('Authentication failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Flex justifyContent="center" alignItems="center" height="90vh" >
      <Box boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"} padding={"30px"} borderRadius={"10px"} w={"30%"} h={"50%"}>
        <FormControl p={"20px"}>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            border={"2px solid black"}
          />
        </FormControl>

        <FormControl p={"20px"}>
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            border={"2px solid black"}
          />
        </FormControl>

        <Button onClick={handleSubmit} colorScheme="teal" mt={4}>
          Sign In
        </Button>
      </Box>
    </Flex>
  );
};

export default SignIn;
