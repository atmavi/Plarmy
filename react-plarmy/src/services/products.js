import axios from 'axios';

const url = 'http://192.168.254.105:4000/api';

export const getAllProducts = () => {
   const res = axios.get(url + '/products')
      .then(res => res.data)
      .catch(err => err)
   return res;
}

export const getProduct = id => {
   const res = axios.get(url + '/products/' + id)
      .then(res => res.data)
      .catch(err => err)
   return res;
}

export const addProduct = product => {
   const res = axios.post(`${url}/products/`, product)
      .then(res => res.data)
      .catch(err => err)
   return res;
}



