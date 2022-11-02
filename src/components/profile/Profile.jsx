import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";

function Profile() {

  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const { isLS } = useMediaQuery("(min-width:650px)");
  
  return (
    <VStack className="profile" w="100%">
      <Flex w="50%" justify="space-between">
        <VStack >
          <Heading>2+</Heading>
          <Text>Years of Experience</Text>
        </VStack>
        <VStack><Text>Front End Developer, specialized on websites and web application using React</Text>
        <Box w="300px" h="400px" bg={isDark? "purple.400": "gray.500"} ></Box></VStack>
      </Flex>
    </VStack>
  );
}

export default Profile;
