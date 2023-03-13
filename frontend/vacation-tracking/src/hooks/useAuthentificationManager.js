import { useContext } from "react";
import  {UserContext}  from "../components/contextManager/UserContext";
// import axios from 'axios';


const useAuthentificationManager = () => {
  
  const {setStatusLogin} = useContext(UserContext);

  const validateCredentials = (email, password) => {

    // const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJuYXRhc2hhLnJvbWFub2ZmQG1haWwuY29tIiwiaWF0IjoxNjc4NzE1NjQ1LCJleHAiOjE2Nzg3MTcwODV9.ans7bmpspczTnPum2ZypQaDDGta0O8MJRF9VgbOEG88";
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

    // var config = {
    //   method: 'get',
    // maxBodyLength: Infinity,
    //   url: 'http://localhost:9898/health/check',
    //   headers: { 
    //     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJuYXRhc2hhLnJvbWFub2ZmQG1haWwuY29tIiwiaWF0IjoxNjc4NzE2MDU0LCJleHAiOjE2Nzg3MTc0OTR9.FbGhJ7C384td9JKu-ZOW0BgmVJ5hkUug3do0YMY0J20'
    //   }
    // };
    
    // axios(config)
    // .then(function (response) {
    //   console.log(JSON.stringify(response.data));
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
    

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