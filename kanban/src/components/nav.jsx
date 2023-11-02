import { Flex, Link, Spacer } from '@chakra-ui/react';
import React from 'react';

const Nav = () => {
  return (
    <Flex p="2" bg="teal.500" color="black" justifyContent={"space-around"}>
      <Link href="/" p="2" _hover={{textDecoration:'none'}} style={{marginLeft:"20px", fontSize:"22px", fontWeight:"bolder"}}>
        Sign In
      </Link>
      <Spacer />
      <Link href="/boards" p="2" _hover={{textDecoration:'none'}} style={{marginLeft:"20px", fontSize:"22px", fontWeight:"bolder", }}>
        Board
      </Link>
    </Flex>
  );
};

export default Nav;
