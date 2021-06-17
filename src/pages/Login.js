import React from 'react'
import { SimpleGrid, Flex, Heading, Input, Button, Text, VStack } from '@chakra-ui/react'
import { BsPersonBoundingBox } from "react-icons/bs";

const LoginForm = () => {
    return (
        <Flex justify="center" align="center">
            <Flex w="70%" p={8} direction="column">
                <Heading size="lg">Log in</Heading>
                <Text size="sm" colorScheme="gray">Enter your username and password</Text>
                <VStack spacing={4} mt={8}>
                    <Input placeholder="username" type="text" />
                    <Input placeholder="password" type="password" />
                    <Button leftIcon={<BsPersonBoundingBox />} colorScheme="green">Log in</Button>
                </VStack>
            </Flex>
        </Flex>
    )
}

const Login = () => {
    return (
        <SimpleGrid columns={{ md: 2 }} h="90vh">
            <Flex bgImage="https://picsum.photos/600" bgSize="cover" display={{ sm: "none", md: "flex" }} />
            <LoginForm />
        </SimpleGrid>
    )
}

export default Login
