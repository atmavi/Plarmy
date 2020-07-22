import axios from 'axios';

export const getAllProducts = () => {
   const res = axios.get('http://192.168.254.105:4000/api/products')
      .then(res => res.data)
      .catch(err => err)
   return res;
}


