import React from "react";
import { Box, GridItem, Heading, useColorMode } from "@chakra-ui/react";

const Card = ({ title, children }) => {
    const { colorMode } = useColorMode();
    const bgColor = colorMode === "light" ? "gray.50" : "gray.700";
    
    return (
        <GridItem align="center" width="100%">
            <Box 
                minHeight={210} 
                borderWidth="2px" 
                borderColor="gray.100" 
                p={{ base: 2, md: 4 }} 
                borderRadius="md" 
                backgroundColor={bgColor}
                transition="all 0.2s"
                _hover={{
                    transform: "translateY(-2px)",
                    boxShadow: "lg"
                }}
            >
                {title && <Heading size="md" mb={4}>{title}</Heading>}
                {children}
            </Box>
        </GridItem>
    );
};

export default Card;