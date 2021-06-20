import { Flex } from '@chakra-ui/react'
import Header from './Header'
import Login from '../../pages/Login'
import Register from '../../pages/Register'
import Footer from './Footer'
import { Switch, Route } from 'react-router-dom'

const DefaultLayout = () => {
    return (
        <Flex direction="column">
            <Header />
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/register" component={Register} />
            </Switch>
            <Footer />
        </Flex>
            )
}

            export default DefaultLayout
