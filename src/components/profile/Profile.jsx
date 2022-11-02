import {
  Box,
  Flex,
  Heading,
  Icon,
  Text,
  useColorMode,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import React from "react";

function Profile() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const { isLS } = useMediaQuery("(min-width:650px)");

  return (
    <VStack className="profile" w="100%">
      <Flex w="70%" justify="space-between">
        <VStack justify="center" spacing="15px" >
          <Heading>2+</Heading>
          <Text>Years of Experience</Text>
        </VStack>
        <VStack w="80%" >
          <Text>
            Front End Developer, specialized on websites and web application
            using React
          </Text>
          <Flex flexWrap="wrap" gap="20px">
            <Box
              w="200px"
              h="200px"
              bg={isDark ? "gray.300" : "purple.700"}
            >
              <Icon as={TbBrandJavascript}/><Text>C</Text>
            </Box>
          </Flex>
        </VStack>
      </Flex>
    </VStack>
  );
}

export default Profile;
