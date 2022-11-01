import {
  Box,
  Button,
  Circle,
  Flex,
  Image,
  Stack,
  Text,
  useColorMode,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import React from "react";

function Header() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const { isLS } = useMediaQuery("(min-width:650px)");

  return (
    <div>
      <Stack>
        <Circle
          position="absolute"
          bg="cyan.300"
          opacity="0.2"
          zIndex="-2"
          w="300px"
          h="300px"
          alignSelf="center"
          ml="30%"
        ></Circle>
        <Flex
          direction={isLS ? "column" : "row"}
          width="50%"
          columnGap="5%"
          p={isLS ? "32" : "0"}
          alignSelf="center"
          alignItems="center"
          justify="center"
        >
          <VStack width="50%" >
            <Text fontSize="4xl" fontWeight="400">
              Hi, I am..
            </Text>
            <Text
              fontSize="7xl"
              fontWeight="700"
              bgGradient="linear(to-r, cyan.400, blue.500, purple.500)"
              bgClip="text"
            >
              Christian
            </Text>
            <Text color={isDark ? "gray.200" : "blue.600"} fontWeight="500" textAlign="justify" >
              I am a certified software developer, I work with Skillup Africa Academy as a front-end developer. I build responsive and interactive website using frontend technologies. I am a programming tutor and I teach web development, HTML, CSS, JavaScript, React, Tailwind, Chakra UI, C, version controls with git, and GitHub.
            </Text>
            <Button alignSelf="flex-start">Hire Me</Button>
          </VStack>
          <Box w="300px" h="300px">
            <Image
              id="profile_img"
              h="100%"
              w="100"
              borderRadius="100%"
              src="https://pbs.twimg.com/profile_images/1570447747966181384/y00r_s7n_400x400.jpg"
            />
          </Box>
        </Flex>
      </Stack>
    </div>
  );
}

export default Header;
