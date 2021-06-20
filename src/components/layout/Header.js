
import {
    Flex, Heading, HStack, Icon, Spacer, Button, Switch, IconButton, Avatar, Text,
    MenuGroup, MenuList, MenuItem, MenuDivider, MenuButton, Menu,
    useColorMode, useColorModeValue as colorValue, Badge
} from '@chakra-ui/react'
import { FcShop } from "react-icons/fc";
import { BsFilePost, BsSun, BsMoon, BsBell, BsEnvelope, BsPower, BsPersonSquare, BsGear } from "react-icons/bs";
import { useUserContext, logout, removeLocalUserData } from '../../context/userContext';
import { Link, useHistory } from 'react-router-dom'

export const Logo = () => {
    return (
        <HStack>
            <Link to="/">
                <Heading color={colorValue("blue.600", "white")} size="lg"><Icon as={FcShop} mr={3} />My App</Heading>
            </Link>
        </HStack>
    )
}

const RightMenuDefault = () => {
    return (
        <HStack>
            <Link to="/register">
                <Button leftIcon={<BsFilePost />} variant="solid" colorScheme="blue">Register</Button>
            </Link>
        </HStack>
    )
}

const BadgeButton = ({ icon, number, ...rest }) => {
    return (
        <Flex position="relative" display="inline-block">
            <IconButton icon={icon} variant="ghost" rounded="full" size="md" {...rest} />
            {number > 0 && <Badge colorScheme="red" borderRadius="full" position="absolute" right="0" top="0">{number}</Badge>}
        </Flex>
    )
}

const RightMenuAuthorized = () => {
    const { userData, dispatchUserData } = useUserContext()
    let history = useHistory()

    const onLogoutHandle = () => {
        dispatchUserData(logout())

        removeLocalUserData()
        history.push("/")
    }
    return (
        <HStack align="center" spacing={0}>
            <BadgeButton icon={<BsEnvelope />} number={userData.email} />
            <BadgeButton icon={<BsBell />} number={userData.notify} />
            <Menu>
                <MenuButton as={Button} variant="ghost">
                    <Flex justify="space-between">
                        <Avatar name={userData.fullname} size="xs" mr={2} />
                        {userData.fullname}
                    </Flex>
                </MenuButton>
                <MenuList>
                    <Flex p={4}>
                        <HStack spacing={2}>
                            <Avatar name={userData.fullname} size="md" />
                            <Flex direction="column">
                                <Text size="lg" fontWeight="bold" textTransform="capitalize"> {userData.fullname}</Text>
                                <Text size="sm" colorScheme="gray" fontStyle="italic"> {userData.username}</Text>
                            </Flex>
                        </HStack>
                    </Flex>
                    <MenuGroup title="Profile">
                        <Link to="/user_profile">
                            <MenuItem icon={<BsPersonSquare />}>User Profile</MenuItem>
                        </Link>
                        <MenuItem icon={<BsGear />}>Change Password</MenuItem>
                    </MenuGroup>
                    <MenuDivider />
                    <MenuItem icon={<BsPower />} onClick={onLogoutHandle} color="red">
                        Log out
                    </MenuItem>
                </MenuList>
            </Menu>
        </HStack>
    )
}

const RightMenu = () => {

    const { userData } = useUserContext()

    return (
        <HStack spacing={2}>
            <SwitchColorButton />
            {
                userData.authorized ? <RightMenuAuthorized /> : <RightMenuDefault />
            }
        </HStack>
    )
}

const SwitchColorButton = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <HStack>
            {colorMode === 'light' ? <Icon as={BsMoon} /> : <Icon as={BsSun} />}
            <Switch onChange={toggleColorMode} />
        </HStack>
    )
}

const Header = () => {
    return (
        <Flex h="60px" p={5} shadow="lg" position="fixed" left="0" top="0" w="full" zIndex={1} bgColor={colorValue("white", "gray.800")}>
            <Logo />
            <Spacer />
            <RightMenu />
        </Flex>
    )
}

export default Header
