import { createContext, useContext } from 'react'
import aes from 'crypto-js/aes';
import enc from 'crypto-js/enc-utf8';

export const defaultUserValue = {
    username: '',
    fullname: '',
    id: 0,
    role: 1,
    email: 0,
    notify: 0,
    authorized: false,
}

export const KEY_USER_INFO = 'user'

const userContext = createContext(defaultUserValue)
export default userContext

export const userReducer = (state, action) => {
    switch (action.type) {
        case 'update':
            return { ...state, ...action.value }
        case 'logout':
            return defaultUserValue
        default: return state
    }
}

export const updateUserData = (data) => {
    return {
        "type": "update",
        "value": data
    }
}

export const logout = () => {
    return {
        "type": "logout"
    }
}

export const useUserContext = () => {
    const [userData, dispatchUserData] = useContext(userContext)

    return { userData, dispatchUserData }
}

/// local storage
export const localUserData = () => {
    let local = localStorage.getItem(KEY_USER_INFO) || ''

    if(local){
        let bytes = aes.decrypt(local, process.env.REACT_APP_ENCYPT_KEY)
        local = bytes.toString(enc);
    }
    return local
}

export const setLocalUserData = (data) => {
    let encryptData = aes.encrypt(JSON.stringify(data), process.env.REACT_APP_ENCYPT_KEY).toString()
    
    localStorage.setItem(KEY_USER_INFO, encryptData)
}

export const removeLocalUserData = () => {
    localStorage.removeItem(KEY_USER_INFO)
}
