import { Flex, VStack, Button, Heading, Text, Divider, Icon, Link } from '@chakra-ui/react'
import Header from './Header'
import Footer from './Footer'
import AuthorizedContent from './AuthorizedContent'
import { BsPerson } from 'react-icons/bs'
import { useUserContext } from '../../context/userContext'
import mainMenuData from '../../assets/data/mainMenuList'
import { Link as ReactLink, useRouteMatch as match } from 'react-router-dom'


const HeadMainMenu = () => {
    const { userData } = useUserContext()
    return (
        <Flex direction="column" p={6} align="center">
            <Heading size="md">Welcome !</Heading>
            <Flex align="center">
                <Icon as={BsPerson} mr={2} />
                <Text>{userData.fullname}</Text>
            </Flex>
        </Flex>
    )
}

const MainMenuItem = ({ data }) => {
    return (
        data.divider ? <Divider /> :
            <Link as={ReactLink} to={data.path} w="full">
                <Button leftIcon={<Icon as={data.icon} />}
                    w="full" variant="ghost"
                    justifyContent="start"
                    isActive={match(data.path)}
                >{data.name}</Button>
            </Link>
    )
}

const ListMainMenu = () => {
    return (
        <VStack w="full" p={4}>
            {
                mainMenuData.map((item, i) => (<MainMenuItem key={i} data={item} />))
            }
        </VStack>
    )
}

const MainMenu = () => {
    return (
        <VStack w="280px">
            <HeadMainMenu />
            <Divider />
            <ListMainMenu />
        </VStack>
    )
}

const AuthorizedLayout = () => {
    return (
        <Flex direction="column">
            <Header />
            <Flex mt="60px" minH="100vh">
                <MainMenu />
                <AuthorizedContent />
            </Flex>
            <Footer />
        </Flex>
    )
}

export default AuthorizedLayout
