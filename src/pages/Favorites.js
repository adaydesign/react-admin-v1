import { Flex,Text } from '@chakra-ui/react'
import Block from '../components/shared/Block'
import {  BsFillHeartFill } from 'react-icons/bs'

const Favorites = () => {
    return (
        <Flex p="40px" direction="column" w="full">
            <Block title="Favorites" icon={BsFillHeartFill} >
                <Text>Favorites Section</Text>
            </Block>
        </Flex>
    )
}

export default Favorites
