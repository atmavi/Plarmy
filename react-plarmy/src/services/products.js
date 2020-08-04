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
      .then(res => {
         return res.status === 200 ? res : res;
      })
      .catch(err => err)
   return res;
}

export const addProduct = product => {
   const res = axios.post(`${url}/products/`, product)
      .then(product => product.data)
      .catch(err => err)
   return res;
}

export const updateProduct = (id, product) => {
   const res = axios.put(`${url}/products/${id}`, product)
      .then(product => console.log(product))
      .catch(err => err)
   return res;
}


