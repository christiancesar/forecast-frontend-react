import React from "react";
import { Container, Image, Text, Link as LinkChakra, VStack, transition } from "@chakra-ui/react";
import ForecastBackgroudGray from "../../assets/forecast-backgroud-gray.svg"
import { Link } from "react-router-dom";

export const NotFoundPage: React.FC = () => {
  return (
    <Container
      maxW="container.lg"
      h="100vh"
      centerContent
      justifyContent="center"
    >
      <Image
        boxSize={500}
        objectFit="contain"
        src={ForecastBackgroudGray}
        alt="Forecast Backgroud"
      />
      <VStack position="absolute">
        <Text fontSize="72px" fontWeight="bold" color="#44EE88" >So sorry 👀</Text>
        <Text>but the page you search not  found!</Text>
        <Text>You return the main page 
          <Link to="/">
            <LinkChakra
              
              ml={1.5}
              
              _hover={
                {
                  color: "#44EE88",
                  transition: "0.3s",
                  // filter: "brightness(0.9)"
                }
              }
            > 
              clicking here!  😬
            </LinkChakra>            
          </Link>
          
        </Text>
      </VStack>

    </Container>
  )
}