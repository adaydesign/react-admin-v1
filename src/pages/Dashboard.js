import {
    Flex, Heading, Text, HStack, VStack, Divider, Button, Icon, SimpleGrid, Image
} from '@chakra-ui/react'
import React from 'react'
import { BsViewList, BsFillCaretDownFill, BsFillCaretUpFill, BsFillPauseFill, BsGiftFill, BsTrophy, BsBagFill, BsTag } from "react-icons/bs";
import { BlockContainer, BlockHeader } from '../components/shared/Block'
import newReleaseItems from '../assets/data/newReleaseItem.json'



const BlockStatPercentItem = ({ percent }) => {
    let icon = BsFillPauseFill
    let iconColor = "orange"
    let text = "normal percent"
    if (percent < 45) {
        icon = BsFillCaretDownFill
        iconColor = "red"
        text = "lower percent"
    } else if (percent > 55) {
        icon = BsFillCaretUpFill
        iconColor = "green"
        text = "greater percent"
    }
    return (
        <Text color="gray.600">{text}<Icon as={icon} color={iconColor} ml={2} /><Text as="span" color={iconColor}>{percent} %</Text></Text>
    )
}

const BlockStatItem = ({ name, value, icon, iconColor, percent }) => {
    return (
        <HStack mt={4} spacing={4} bgColor={`${iconColor}.50`} borderRadius="lg" p={4}>
            <Icon as={icon} color={iconColor} boxSize="60px" />
            <VStack align="start">
                <Text size="md" color="gray" fontWeight="bold">{name}</Text>
                <Heading size="2xl" color={iconColor}>{value}</Heading>
                <BlockStatPercentItem percent={percent} />
            </VStack>
        </HStack>
    )
}
const BlockStatList = () => {
    return (
        <SimpleGrid columns={{ sm: 1, lg: 3 }} spacing={{ sm: 2, lg: 8 }}>
            <BlockStatItem name="New Orders" value="150M" icon={BsGiftFill} iconColor="green" percent={40} />
            <BlockStatItem name="Bounce Rate" value="124%" icon={BsTrophy} iconColor="blue" percent={124} />
            <BlockStatItem name="User Registrations" value="44" icon={BsBagFill} iconColor="red" percent={55} />
        </SimpleGrid>
    )
}
const DisplayBlock = () => {
    return (
        <BlockContainer>
            <BlockHeader title="Dashboard">
                <Button leftIcon={<BsViewList />} colorScheme="green" size="sm" variant="outline">More</Button>
            </BlockHeader>
            <Divider />
            <BlockStatList />
        </BlockContainer>
    )
}

const ShopItem = ({ data, ...rest }) => {

    const priceFormat = (price) => {
        let format = new Intl.NumberFormat('th-TH', { style: 'currency', currency: 'BTH', currencySign: 'accounting' }).format(price)
        return format.replace('BTH', '฿')
    }

    return (
        <Flex w="full" direction="column" mt={4} cursor="pointer"
            _hover={{
                shadow: "lg"
            }}
            {...rest}>
            <Image src={data.image} w="full" />
            <VStack p={2} align="start" spacing={0}>
                <Text fontSize="sm" noOfLines={2}>{data.name}</Text>
                <Text fontSize="lg" color="orange.300">{priceFormat(data.price)}</Text>
                <HStack>
                    <Text as="del" fontSize="sm" color="gray.400">{priceFormat(data.old_price)}</Text>
                    <Text fontSize="sm">{data.discount}</Text>
                </HStack>
            </VStack>
        </Flex>
    )
}

const ShopItemList = () => {
    return (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 6 }} spacing={{ sm: 2, lg: 4 }}>
            {
                newReleaseItems.map((item, i) => (<ShopItem data={item} key={i} />))
            }
        </SimpleGrid>
    )
}

const DisplayShop = () => {
    return (
        <BlockContainer mt={6}>
            <BlockHeader title="Shop! New Release" icon={BsTag} >
            <Button colorScheme="orange" size="sm" variant="outline">Shop All Products</Button>
                </BlockHeader>
            <Divider />
            <ShopItemList />
        </BlockContainer>
    )
}




const Dashboard = () => {
    return (
        <Flex p="40px" direction="column" w="full">
            <DisplayBlock />
            <DisplayShop />
        </Flex>
    )
}

export default Dashboard
