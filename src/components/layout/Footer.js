import React from 'react'
import { Flex, Spacer, Text, Link,useColorModeValue as colorValue } from '@chakra-ui/react'

const Footer = () => {
    return (
        <Flex p={4} bgColor={colorValue("blue.700","blue.900")} color="white">
            <Text>My App @ 2021 by <Link href="http://www.appcodemia.com" isExternal >Appcodemia.com</Link></Text>
            <Spacer />
            <Text>Email : myapp@mail.com</Text>
        </Flex>
    )
}

export default Footer
