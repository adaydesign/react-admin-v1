import { Flex,Text } from '@chakra-ui/react'
import Block from '../components/shared/Block'
import { BsBook} from 'react-icons/bs'

const Notes = () => {
    return (
        <Flex p="40px" direction="column" w="full">
            <Block title="Notes" icon={BsBook} >
                <Text>Notes Section</Text>
            </Block>
        </Flex>
    )
}

export default Notes
