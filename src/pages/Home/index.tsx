import { Button, Checkbox, VStack, Input, Select, Modal, ModalOverlay, ModalContent } from "@chakra-ui/react"
import React, { Fragment } from "react"

export const Home: React.FC = () => {
  return (
    <Fragment>
      <VStack
        m={20}
        align="initial"
      >
        <Input mb="2" defaultValue="Christian Cesar" />
        <Checkbox mb="2" />
        <Button
          mb="2"
          variants="primary"
        // colorScheme="teal"
        >
          Login
        </Button>
        <Select mb="2">
          <option>Torronto</option>
          <option>Vancouver</option>
          <option>Seattle</option>

        </Select>
        <Button colorScheme='teal' size='lg'>
          Button
        </Button>
        <Input />
      </VStack>
    
    </Fragment >
  )
}