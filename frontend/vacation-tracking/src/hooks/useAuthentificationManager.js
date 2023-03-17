import { useContext } from "react"
import { UserContext } from "../components/contextManager/UserContext"
import useVacationTrackingService from "./useVacationTrackingService";



const useAuthentificationManager = () => {

    const {setStatusLogin} = useContext(UserContext);
    const {getAuthData} = useVacationTrackingService();

    const validateCredentials = async (email, password) => {

        const response= await getAuthData("api/v1/auth/authenticate",{
            "username": email,
            "password": password
        } );

        
        if(response?.username === email){
            setStatusLogin({
                email: response.username, 
                status: "authenticated",
                displayName: response.name,
                errorMessage: null, 
                token: response.token,
                role: response.role,
            })
        } else {
            setStatusLogin({
                email: null, 
                status: "no-authenticated",
                displayName: null,
                errorMessage: "Credenciales incorrecta",
                token: null,
                role: null,
            })
        }
    } 

    return {
      validateCredentials
    }


}

export default useAuthentificationManager;
