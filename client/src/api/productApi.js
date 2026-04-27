import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5001/api",
});

export const fetchProducts = async () => {
  const response = await API.get("/products");
  return response.data;
};

export const fetchProductBySlug = async (slug) => {
  const response = await API.get(`/products/slug/${slug}`);
  return response.data;
};