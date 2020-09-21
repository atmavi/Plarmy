import axios from 'axios';

const url = "http://192.168.254.102:4000/api";

export const userRegister = user => {
   const res = axios.post(`${url}/register`, user)
      .then(result => result.data)
      .catch(err => err)

   return res;
}

export const userLogin = (user) => {
   const res = axios.post(`${url}/login`, user)
      .then(result => result.data)
      .catch(err => err)

   return res;
}