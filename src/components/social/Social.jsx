import { HStack, Icon, VStack } from "@chakra-ui/react";
import React from "react";
import { FaFacebookF, FaGoogle, FaShopify, FaSpotify } from "react-icons/fa";

function Social() {
  return (
    <VStack className="social" w="100%"  >
      <HStack columnGap={50} >
        <Icon as={FaFacebookF} boxSize="50" ></Icon>
        <Icon as={FaGoogle} boxSize="50" ></Icon>
        <Icon as={FaSpotify} boxSize="50" ></Icon>
        <Icon as={FaShopify} boxSize="50" ></Icon>
      </HStack>
    </VStack>
  );
}

export default Social;
