import api from './api';

const getAllProducts = () => {
  return api.get('/products');
};

const getOneProduct = (productId) => {
  return api.get(`/products/${productId}`);
};

const createProduct = (product) => {
  return api.post('/products', product);
};


const deleteProduct = (productId) => {
  return api.delete(`/products/${productId}`);
};

const updateProduct = (productData) => {
  console.log(productData)
  return api.put('/products', productData);
};

export const productService = { getAllProducts, createProduct, deleteProduct, updateProduct, getOneProduct };
