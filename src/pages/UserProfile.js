import { Flex,Text } from '@chakra-ui/react'
import Block from '../components/shared/Block'
import {  BsPersonSquare } from 'react-icons/bs'

const UserProfile = () => {
    return (
        <Flex p="40px" direction="column" w="full">
            <Block title="UserProfile" icon={BsPersonSquare} >
                <Text>UserProfile Section</Text>
            </Block>
        </Flex>
    )
}

export default UserProfile
