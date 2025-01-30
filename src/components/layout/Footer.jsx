import React, { memo } from "react";
import { Box, Text, Flex } from "@chakra-ui/react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box 
      bg="gray.800" 
      width="100%" 
      py={{ base: 2, md: 3 }} 
      mt="auto"
    >
      <Flex 
        justifyContent="center" 
        color="white" 
        px={{ base: 2, md: 4 }}
        textAlign="center"
      >
        <Text fontSize={{ base: "sm", md: "md" }} m="4">
          © {currentYear} CryptoMarket. 
          <Box 
            as="span" 
            fontWeight="bold" 
            textShadow="0 0 10px rgba(255, 255, 255, 0.25)"
            display={{ base: "block", md: "inline" }}
            mt={{ base: 1, md: 0 }}
            ml={{ md: 2 }}
          >
            Built with love & AI.🤖 
          </Box>
        </Text>
      </Flex>
    </Box>
  );
};

export default memo(Footer);