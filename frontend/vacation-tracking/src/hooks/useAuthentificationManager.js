import { useContext } from "react";
import  {UserContext}  from "../components/contextManager/UserContext";
// import axios from 'axios';
import useVacationTrackingService from "./useVacationTrackingService";


const useAuthentificationManager = () => {
  
  const {setStatusLogin} = useContext(UserContext);
  const {getAuthData} = useVacationTrackingService();

  const validateCredentials = async(email, password) => {

    // const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJuYXRhc2hhLnJvbWFub2ZmQG1haWwuY29tIiwiaWF0IjoxNjc4NzIyMDA1LCJleHAiOjE2Nzg3MjM0NDV9.jqrlX5xLlsfFY4VAnJz0f-g7dN_lo-GFJ0OCyjw0isI";
    // const basicParameters = {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // }
    // axios.get('http://localhost:9898/health/check', {
    //   ...basicParameters
    // })
    // .then(response => {
    //   console.log(response);
    // });

    // const response = await getData('http://localhost:9898/health/check');
    // console.log(response);

    // axios.post('http://localhost:9898/api/v1/auth/authenticate', {
    //   username: "natasha.romanoff@mail.com",
    //   password: "dummy-password"
    // })
    // .then(response => console.log(response));
    try {

      const response = await getAuthData('api/v1/auth/authenticate', {
        username: email,
        password: password
      });

      if(response?.username === email){
        setStatusLogin({
          email: response.username,
          status: 'authenticated', // , authenticated
          displayName: 'William',
          errorMessage: null,
          token: response.token,
          role: response.role
        })
      }else {
        setStatusLogin({
          email: null,
          status: 'not-authenticated',
          displayName: null,
          errorMessage: "Credenciales incorrectas",
          token: null,
          role: null
        })
      }

    } catch (error) {
      console.log('error')
    }
   
     
  }

  return {
    validateCredentials
  }

}

export default useAuthentificationManager;