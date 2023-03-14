import axios from "axios";

import  { useContext } from "react";
import { UserContext } from "../components/contextManager/UserContext";

const useVacationTrackingService = () => {

  const {statusLogin} = useContext(UserContext);

  const baseUrl = 'http://localhost:9898';
  const token = statusLogin?.token;

  const basicParameters = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const getAuthData = async(url, bodyParameters) => {
    const finalUrl = `${baseUrl}/${url}` 
    return await axios.post(finalUrl, {
      ...bodyParameters
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
      return []
    });
  }

  const getData = async(url) => {
    const finalUrl = `${baseUrl}/${url}` 
    return await axios.get(finalUrl, {
      ...basicParameters
    })
    .then(response => {
      return response.data
    })
    .catch(error => {
      console.log(error);
      return []
    })
  }

  const postData = async (url, bodyParameter) => {
    const finalUrl = `${baseUrl}/${url}` 
    return await axios
      .post(finalUrl, { ...bodyParameter }, { ...basicParameters })
      .then((response) => response.data)
      .catch(error => {
        console.log(error);
        return []
      })
  };

  const putData = async (url, bodyParameter) => {
    const finalUrl = `${baseUrl}/${url}` 
   
    return await axios
      .put(finalUrl, {
        ...basicParameters,
        ...bodyParameter,
      })
      .then((response) => response.data)
      .catch(error => {
        console.log(error);
        return []
      })
  };

 

  return {
    getAuthData,
    getData,
    postData,
    putData
  }
}

export default useVacationTrackingService;