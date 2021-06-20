import { useReducer } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AuthorizedLayout from './components/layout/AuthorizedLayout'
import DefaultLayout from './components/layout/DefaultLayout'
import UserContext, { userReducer, defaultUserValue, localUserData } from './context/userContext'

const App = () => {
  const value = localUserData()
  const [userData, dispatchUserData] = useReducer(userReducer, value ? JSON.parse(value):defaultUserValue)
  
  return (
    <BrowserRouter>
      <UserContext.Provider value={[userData, dispatchUserData]}>
        {
          userData.authorized ? <AuthorizedLayout /> : <DefaultLayout />
        }
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
