import { createSlice } from '@reduxjs/toolkit';
import { getPopular, getTopRated, getUpComing } from './api';

export const slice = createSlice({
  name: 'slice',
  initialState: {value: []},
  reducers: {
    // popular 데이터
    popular: (state, action) => {
      state.value[0] = action.payload;
    },
    topRated: (state, action) => {
      state.value[1] = action.payload;
    },
    upComing: (state, action) => {
      state.value[2] = action.payload;
    },
    movies: (state, action) => {
      state.value[3] = action.payload;
    }
  },
  // 비동기
  extraReducers: (builder) => {
    // popular 호출
    builder 
    .addCase(getPopular.pending, (state) => {
      state.status = 'Loading';
    })
    .addCase(getPopular.fulfilled, (state, action) => {
      state.value[0] = action.payload;
      state.status = 'Complete';
    })
    .addCase(getPopular.rejected, (state) => {
      state.status = 'Fail';
    })
    // top rated 호출
    builder 
    .addCase(getTopRated.pending, (state) => {
      state.status = 'Loading';
    })
    .addCase(getTopRated.fulfilled, (state, action) => {
      state.value[1] = action.payload;
      state.status = 'Complete';
    })
    .addCase(getTopRated.rejected, (state) => {
      state.status = 'Fail';
    })
    // up coming 호출
    builder 
    .addCase(getUpComing.pending, (state) => {
      state.status = 'Loading';
    })
    .addCase(getUpComing.fulfilled, (state, action) => {
      state.value[2] = action.payload;
      state.status = 'Complete';
    })
    .addCase(getUpComing.rejected, (state) => {
      state.status = 'Fail';
    })
    
  }
})

export default slice.reducer;
export const { popular, topRated, upComing } = slice.actions;

