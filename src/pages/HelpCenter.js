import { Flex,Text } from '@chakra-ui/react'
import Block from '../components/shared/Block'
import { BsQuestionCircleFill } from 'react-icons/bs'

const HelpCenter = () => {
    return (
        <Flex p="40px" direction="column" w="full">
            <Block title="HelpCenter" icon={BsQuestionCircleFill} >
                <Text>HelpCenter Section</Text>
            </Block>
        </Flex>
    )
}

export default HelpCenter
