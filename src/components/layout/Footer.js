import React from 'react'
import { Flex, Spacer, Text } from '@chakra-ui/react'

const Footer = () => {
    return (
        <Flex p={4} bgColor="blue.800" color="white">
            <Text>My App @ 2021</Text>
            <Spacer />
            <Text>Email : myapp@mail.com</Text>
        </Flex>
    )
}

export default Footer
