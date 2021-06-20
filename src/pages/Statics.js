import { Flex,Text } from '@chakra-ui/react'
import Block from '../components/shared/Block'
import { BsBarChartFill } from 'react-icons/bs'

const Statics = () => {
    return (
        <Flex p="40px" direction="column" w="full">
            <Block title="Statics" icon={BsBarChartFill} >
                <Text>Statics Section</Text>
            </Block>
        </Flex>
    )
}

export default Statics
