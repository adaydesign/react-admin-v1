import { Flex, useColorModeValue as colorValue, Heading,Text, SimpleGrid,Button,Divider,Center,VStack,FormControl,FormLabel, Input,Icon } from '@chakra-ui/react'
import React from 'react'
import { Logo } from '../components/layout/Header'
import { FaFacebook, FaGithub } from "react-icons/fa";

const RegisterForm = () => {
    return (
        <Flex bgColor={colorValue("white","gray.800")} p={10} w="500px" mx={5} mt="90px" mb="40px" borderRadius={12} shadow="xl" direction="column">
            <SignUpTitle />
            <SimpleGrid mt={8} columns={1} spacing="3" w="100%" zIndex={0}>
                <Button colorScheme="facebook" leftIcon={<Icon as={FaFacebook} />}>
                    Login with Facebook
                </Button>
                <Button colorScheme="gray" leftIcon={<Icon as={FaGithub} />}>
                    Login with Github
                </Button>
            </SimpleGrid>
            <Flex w="100%" align="center" mt={4}>
                <Divider flex={1} />
                <Center mx={4}>
                    <Text >OR</Text>
                </Center>
                <Divider flex={1} />
            </Flex>
            <VStack spacing={3}>
                <FormControl id="name" mt={4}>
                    <FormLabel>Name</FormLabel>
                    <Input name="name" type="text" required />
                </FormControl>
                <FormControl id="email">
                    <FormLabel>Email address</FormLabel>
                    <Input name="email" type="email" required />
                </FormControl>
                <FormControl id="password">
                    <FormLabel>Password</FormLabel>
                    <Input name="password" type="password" required />
                </FormControl>
                <Button type="submit" colorScheme="blue" size="lg" fontSize="md" w="100%">
                    Create my account
                </Button>
            </VStack>
        </Flex>
    )
}

const SignUpTitle = () => {
    return (
        <Flex direction="column" align="start">
            <Logo />
            <Heading size="lg" mt={4}>Welcome !</Heading>
            <Text>Enter your info to get started</Text>
        </Flex>
    )
}

const Register = () => {
    return (
        <Flex minH="100vh" bgColor={colorValue("gray.100","gray.700")} align="center" justify="center">
            <RegisterForm />
        </Flex>
    )
}

export default Register
