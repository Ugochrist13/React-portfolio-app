import { Flex, Heading, HStack, IconButton, Spacer, useColorMode, VStack } from "@chakra-ui/react";
// import { useState } from "react";
import {FaSun, FaMoon, FaFacebook,FaGithub, FaTwitter, FaLinkedin, FaInstagram} from 'react-icons/fa'
import Header from './components/header/Header'
import Profile from './components/profile/Profile'
import Social from './components/social/Social'


function App() {

  const {colorMode, toggleColorMode} = useColorMode()
  const isDark = colorMode === "dark";
  return (
    <div className="App">
      <VStack>
        <Flex w="100%" justifyContent='space-between' bg={isDark ? "gray.600" : "pink.600"}  padding="10px 20px">
          <Heading ml="8" bgGradient="linear(to-r, cyan.400, blue.500, purple.500, pink.200)"
              bgClip="text" fontWeight="700" >
            GENTECH
          </Heading>
          <HStack gap={10}>
          <IconButton icon={<FaFacebook/>} isRound='true' onClick={toggleColorMode}></IconButton>
          <IconButton icon={<FaGithub/>} isRound='true' onClick={toggleColorMode}></IconButton>
          <IconButton icon={<FaTwitter/>} isRound='true' onClick={toggleColorMode}></IconButton>
          <IconButton icon={<FaLinkedin/>} isRound='true' onClick={toggleColorMode}></IconButton>
          <IconButton icon={<FaInstagram/>} isRound='true' onClick={toggleColorMode}></IconButton>
          <IconButton icon={isDark? <FaSun/>: <FaMoon/>} isRound='true' onClick={toggleColorMode}></IconButton>
          </HStack>
        </Flex>
        <Header></Header>
        <Profile></Profile>
        <Social></Social>
      </VStack>
    </div>
  );
}

export default App;
