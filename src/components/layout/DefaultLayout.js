import React from 'react'
import { Flex } from '@chakra-ui/react'
import Header from './Header'
import Login from '../../pages/Login'
import Footer from './Footer'

const DefaultLayout = () => {
    return (
        <Flex direction="column">
            <Header />
            <Login />
            <Footer />
        </Flex>
    )
}

export default DefaultLayout
