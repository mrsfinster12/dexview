import React from "react";
import { Box } from "@chakra-ui/react";

const Bar = ({ children }) => {
  return (
    <Box 
      bg="brand.main" 
      py={2} 
      px={{ base: 2, md: 4 }}
      overflowX="auto" 
      whiteSpace="nowrap"
      width="100%"
      sx={{
        '&::-webkit-scrollbar': {
          height: '4px',
        },
        '&::-webkit-scrollbar-track': {
          background: 'rgba(255, 255, 255, 0.1)',
        },
        '&::-webkit-scrollbar-thumb': {
          background: 'rgba(255, 255, 255, 0.3)',
          borderRadius: '2px',
        },
      }}
    >
      <Box 
        color="white" 
        textAlign="left" 
        fontSize={{ base: "xs", md: "sm" }} 
        display="flex" 
        alignItems="center"
        gap={{ base: 2, md: 4 }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Bar;