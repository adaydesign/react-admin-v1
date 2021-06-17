import React from 'react'
import { Flex, Heading, HStack, Icon, Spacer, Button, Switch, useColorMode, useColorModeValue as colorValue } from '@chakra-ui/react'
import { FcShop } from "react-icons/fc";
import { BsFilePost, BsSun, BsMoon } from "react-icons/bs";

const Logo = () => {
    return (
        <HStack>
            <Heading color={colorValue("blue.600", "white")} size="lg"><Icon as={FcShop} mr={3} />My App</Heading>
        </HStack>
    )
}

const RightMenu = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <HStack spacing={2}>
            {colorMode === 'light' ? <Icon as={BsMoon} /> : <Icon as={BsSun} />}
            <Switch onChange={toggleColorMode} />
            <Button leftIcon={<BsFilePost />} variant="solid" colorScheme="blue">Register</Button>
        </HStack>
    )
}

const Header = () => {
    return (
        <Flex h="60px" p={5} shadow="lg">
            <Logo />
            <Spacer />
            <RightMenu />
        </Flex>
    )
}

export default Header
