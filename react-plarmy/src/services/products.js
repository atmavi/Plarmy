import axios from 'axios';

export const getAllProducts = () => {
   const res = axios.get('./products.json')
      .then(res => res.data)
      .catch(err => err)
   return res;
}


