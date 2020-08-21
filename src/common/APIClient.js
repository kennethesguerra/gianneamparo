import axios from 'axios';

class APIClient {
  make(){
    console.log(axios);
    axios.interceptors.request.use((config)=>{
      
      var base_path = 'http://localhost/gianne-amparo-api/public/';
      config.baseURL = base_path;
  
      return config;
  
    }, (error) => {
        return Promise.reject(error);
    });
  
    return axios;
  }
}

export default APIClient;
