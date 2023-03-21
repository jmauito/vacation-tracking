import { useState } from 'react'
import { UserContext } from './UserContext';

const UserProvider = ({children}) => {

    const [statusLogin, setStatusLogin] = useState({
        email: null, 
        status: "checking",
        displayName: null,
        errorMessage: null,
        token:null,
        role:null,
    });

    const [showRequest, setShowRequest] = useState(false);

  return (
   <UserContext.Provider value={{statusLogin, setStatusLogin, showRequest, setShowRequest}}>
        {children}
   </UserContext.Provider>
  )
}

export default UserProvider;
