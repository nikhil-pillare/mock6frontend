import { Flex, Link, Spacer, Box, Heading, HeadingProps, Button } from '@chakra-ui/react';
import React from 'react';

const Board = () => {
  return (
    <Flex p="2">
      <Box w={"20%"}h={"88vh"} borderRadius={"10px"} padding={"10px"} boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}>
      <Heading>KANBAN</Heading>
      <Button backgroundColor={"teal"} borderRightRadius={"20px"} margin={"10px"}>+Create New Board</Button>
      </Box>
      <Box width={"80%"} >
        <Flex w={"98%"} marginLeft={"10px"} alignItems={"center"}justifyContent={"space-between"}  borderRadius={"10px"}  boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"} padding={"7px"}>
         <h1 style={{marginLeft:"20px", fontSize:"22px", fontWeight:"bolder"}}>Task</h1>
         <Button borderRadius={"30px"} backgroundColor={"teal"}>+ Add New Task</Button>

         
        </Flex>
        <Box  padding={"15px"}h={"80vh"} margin={"10px"} borderRadius={"10px"} boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}>

        </Box>
      </Box>
    </Flex>
  );
};

export default Board;