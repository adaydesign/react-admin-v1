import { Flex, useColorModeValue as colorValue } from '@chakra-ui/react'
import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import DashboardPage from '../../pages/Dashboard'
import FavoritesPage from '../../pages/Favorites'
import NotesPage from '../../pages/Notes'
import StaticsPage from '../../pages/Statics'
import UserProfilePage from '../../pages/UserProfile'
import NotificationsPage from '../../pages/Notifications'
import HelpCenterPage from '../../pages/HelpCenter'
import NotFoundPage from '../../pages/NotFound'

const AuthorizedContent = () => {
    return (
        <Flex w="full" bgColor={colorValue("gray.100", "gray.600")}>
            <Switch>
                <Redirect exact from="/" to="/dashboard" />
                <Route path="/dashboard" component={DashboardPage} />
                <Route path="/favorites" component={FavoritesPage} />
                <Route path="/notes" component={NotesPage} />
                <Route path="/statics" component={StaticsPage} />
                <Route path="/user_profile" component={UserProfilePage} />
                <Route path="/notifications" component={NotificationsPage} />
                <Route path="/help" component={HelpCenterPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </Flex>
    )
}

export default AuthorizedContent
