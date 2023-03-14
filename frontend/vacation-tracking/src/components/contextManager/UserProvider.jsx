import { useState } from "react"
import { UserContext } from "./UserContext";

const UserProvider = ({children}) => {

  const [statusLogin, setStatusLogin] = useState({
    email: null,
    status: 'checking', // , authenticated
    displayName: null,
    errorMessage: null,
    token: null,
    role: null,
  });

  return (
    <UserContext.Provider value={{statusLogin, setStatusLogin}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider;