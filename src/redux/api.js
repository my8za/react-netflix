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



// 인기 상영작
export const getPopular = createAsyncThunk(
  'get/popular',
  async () => {
    const resp = await API_URL.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
    return resp.data;
  }
);


// 평점 높은 영화
export const getTopRated = createAsyncThunk(
  'get/topRated',
  async () => {
    const resp = await API_URL.get(`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
    return resp.data;
  }
);


// 상영예정작
export const getUpComing = createAsyncThunk(
  'get/upComing',
  async () => {
    const resp = await API_URL.get(`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`);  
    return resp.data;
  }
);



// 영화 장르 리스트
export const getGenreList = createAsyncThunk(
  'get/genreList',
  async () => {
    const resp = await API_URL.get(`/genre/movie/list?api_key=${API_KEY}&language=en-US`);
    return resp.data;
  }
)


// 영화 상세정보
export const getDetails = createAsyncThunk(
  'get/details',
  async (id) => {
    const resp = await API_URL.get(`/movie/${id}?api_key=${API_KEY}&language=en-US`);
    return resp.data;
  }
)


// 영화 리뷰
export const getReviews = createAsyncThunk(
  'get/reviews',
  async (id) => {
    const resp = await API_URL.get(`/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`);
    return resp.data;
  }
)

// 연관 영화 추천
export const getRecommendations = createAsyncThunk(
  'get/recommendations',
  async (id) => {
    const resp = await API_URL.get(`/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US`);
    return resp.data;
  }
)



// 검색
export const searchMovie = createAsyncThunk(
  'get/search',
  async (keyword) => {
    console.log(keyword)
    const resp = await API_URL.get(`/search/movie?api_key=${API_KEY}&query=${keyword}&language=en-US`);
    console.log(resp.data)
    return resp.data;
  }
)