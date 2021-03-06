import axios from "axios";

const url = "http://localhost:4000/api";

export const getAllProducts = () => {
  let accessToken = window.localStorage.getItem("accessToken");
  const res = axios
    .get(url + "/products", {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      },
    })
    .then((res) => res.data)
    .catch((err) => err);
  return res;
};

export const getProduct = (id) => {
  const res = axios
    .get(url + "/products/" + id)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
  return res;
};

export const addProduct = (product) => {
  const res = axios
    .post(`${url}/products/`, product)
    .then((product) => product.data)
    .catch((err) => err);
  return res;
};

export const updateProduct = (id, product) => {
  const res = axios
    .put(`${url}/products/${id}`, product)
    .then((product) => console.log(product))
    .catch((err) => err);
  return res;
};
