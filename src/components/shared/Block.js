import React from 'react'
import { Flex, Heading, Spacer, Icon, Divider, useColorModeValue as colorValue } from '@chakra-ui/react'

const Block = ({ title, icon,children , ...rest }) => {
    return (
        <BlockContainer {...rest}>
            <BlockHeader title={title} icon={icon}/>
            <Divider />
            <BlockContent mt={6}>
                {children}
            </BlockContent>
        </BlockContainer>
    )
}

export default Block

export const BlockContainer = ({ children, ...rest }) => {
    return (
        <Flex p={8} shadow="lg" bgColor={colorValue("white", "gray.700")} borderRadius="md" w="full" direction="column" {...rest}>
            {children}
        </Flex>
    )
}

export const BlockHeader = ({ title, icon, children }) => {
    return (
        <Flex w="full" mb={2} align="center">
            <Heading size="md" color={colorValue("gray.700", "white")}>{icon && <Icon as={icon} mr={3} />}{title}</Heading>
            <Spacer />
            {children}
        </Flex>
    )
}

export const BlockContent = ({ message, children, ...rest }) => {
    return (
        <Flex w="full" h="full" align="center" justify="center" {...rest}>
            {children}
        </Flex>
    )
}
