import { Flex, Heading, HStack, IconButton, Link, useColorMode, VStack } from "@chakra-ui/react";
import {FaSun, FaMoon, FaFacebook,FaGithub, FaTwitter, FaLinkedin, FaInstagram} from 'react-icons/fa'
import './NavBar.css'


function NavBAr({toggleColorMode, colorMode}) {

  const isDark = colorMode === "dark";
  return (
    <VStack className="nav" w="100%" >
        <Flex w="100%" justifyContent='space-between' bg={isDark ? "gray.600" : "pink.600"}  padding="10px 20px">
          <Heading ml="8" bgGradient="linear(to-r, cyan.400, blue.500, purple.500, pink.200)"
              bgClip="text" fontWeight="700" >
            GENTECH
          </Heading>
          <HStack justify="space-around" w="50%" >
          <Link href="https://github.com/Ugochrist13" ><IconButton icon={<FaGithub/>} isRound='true'></IconButton></Link>
          <Link href="https://facebook.com/profile.php?id=100080268887740" ><IconButton icon={<FaFacebook/>} isRound='true'></IconButton></Link>
          <Link href="https://twitter.com/ChristianUgoo06" ><IconButton icon={<FaTwitter/>}  isRound='true'></IconButton></Link>
          <Link href="https://linkedin.com/in/christian-nwabiukwu-a664a9102/" ><IconButton icon={<FaLinkedin/>} isRound='true'></IconButton></Link>
          <Link href="https://instagram.com/genttech" ><IconButton icon={<FaInstagram/>} isRound='true'></IconButton></Link>
          <IconButton icon={isDark? <FaSun/>: <FaMoon/>} isRound='true' onClick={toggleColorMode}></IconButton>
          </HStack>
        </Flex>
    </VStack>
  );
}

export default NavBAr;
