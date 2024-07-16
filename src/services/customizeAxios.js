import axios from "axios";

// khai báo link phía backend
const instance = axios.create({
    baseURL: 'https://reqres.in'

  });


// Add a response interceptor

instance.interceptors.response.use(function (response) {

  return response.data ? response.data : { statusCode: response.status  } // .data để dễ nhìn hơn
}, function (error) {

  return Promise.reject(error);
});


export default instance; 