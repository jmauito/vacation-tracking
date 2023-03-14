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

  const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJuYXRhc2hhLnJvbWFub2ZmQG1haWwuY29tIiwiaWF0IjoxNjc4NzIyMDA1LCJleHAiOjE2Nzg3MjM0NDV9.jqrlX5xLlsfFY4VAnJz0f-g7dN_lo-GFJ0OCyjw0isI";
  const basicParameters = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const getData = async(url) => {
    return await axios.get('http://localhost:9898/health/check', {
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

  return {
    getData,
    getAuthData
  }
}

export default useVacationTrackingService;
