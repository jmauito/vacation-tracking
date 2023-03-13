import { useContext } from "react"
import { UserContext } from "../components/contextManager/UserContext"



const useAuthentificationManager = () => {

    const {setStatusLogin} = useContext(UserContext);


    const validateCredentials = (email, password) => {
        if(email === "kika@gmail.com"){
            setStatusLogin({
                email: email, 
                status: "authenticated",
                displayName: "Valeria",
                errorMessage: null,
            })
        } else {
            setStatusLogin({
                email: null, 
                status: "no-authenticated",
                displayName: null,
                errorMessage: "Credenciales incorrecta",
            })
        }
    } 

    return {
      validateCredentials
    }


}

export default useAuthentificationManager;
