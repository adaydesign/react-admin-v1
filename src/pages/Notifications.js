import { Flex,Text } from '@chakra-ui/react'
import Block from '../components/shared/Block'
import { BsBellFill } from 'react-icons/bs'

const Notifications = () => {
    return (
        <Flex p="40px" direction="column" w="full">
            <Block title="Notifications" icon={BsBellFill} >
                <Text>Notifications Section</Text>
            </Block>
        </Flex>
    )
}

export default Notifications
