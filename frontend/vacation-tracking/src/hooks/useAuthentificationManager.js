import { useContext } from "react";
import  {UserContext}  from "../components/contextManager/UserContext";
import axios from 'axios';


const useAuthentificationManager = () => {
  
  const {setStatusLogin} = useContext(UserContext);

  const validateCredentials = (email, password) => {
    
    const token = axios.post('');

    if(email === 'wsuarez86@hotmail.com'){
      setStatusLogin({
        email,
        status: 'authenticated', // , authenticated
        displayName: 'William',
        errorMessage: null,
      })
    } else{
      setStatusLogin({
        email: null,
        status: 'not-authenticated',
        displayName: null,
        errorMessage: "Credenciales incorrectas",
      })
    }
     
  }

  return {
    validateCredentials
  }

}

export default useAuthentificationManager;