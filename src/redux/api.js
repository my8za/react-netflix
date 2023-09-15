import { createAsyncThunk } from '@reduxjs/toolkit';
// library
import axios from 'axios';
// url
import { API_KEY } from '../utils/constants/Config';

export const API_URL = axios.create({
  baseURL: `https://api.themoviedb.org/3`,
  headers: {"Content-Type": "application/json"}
});

API_URL.interceptors.request.use((config) => {
  console.log("request start", config)
  return config;
}, (error) => {
  console.log("request error", error)
  return Promise.reject(error);
});

API_URL.interceptors.response.use((resp) => {
  console.log("get response", resp)
  return resp;
}, (error) => {
  console.log("response error", error)
  return Promise.reject(error);
});



// popular 호출
export const getPopular = createAsyncThunk(
  'get/popular',
  async () => {
    const resp = await API_URL.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
      return resp.data;
  }
);


// top rated 호출
export const getTopRated = createAsyncThunk(
  'get/topRated',
  async () => {
    const resp = await API_URL.get(`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
      return resp.data;
  }
);


// up coming 호출
export const getUpComing = createAsyncThunk(
  'get/upComing',
  async () => {
    const resp = await API_URL.get(`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);  
      return resp.data;
  }
);