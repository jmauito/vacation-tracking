import axios from "axios";

const useVacationTrackingService = () => {

  const baseUrl = 'http://localhost:9898';

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

 

  return {
    getAuthData
  }
}

export default useVacationTrackingService;