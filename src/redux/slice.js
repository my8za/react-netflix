import { createSlice } from '@reduxjs/toolkit';
import { searchMovie, getPopular, getTopRated, getUpComing, getGenreList, getDetails, getReviews, getRecommendations } from './api';

export const slice = createSlice({
  name: 'slice',
  initialState: {value: []},
  reducers: {
    // 인기
    popular: (state, action) => {
      state.value[0] = action.payload;
    },
    // 평점높은
    topRated: (state, action) => {
      state.value[1] = action.payload;
    },
    // 상영예정
    upComing: (state, action) => {
      state.value[2] = action.payload;
    },
    // 영화 장르
    genre: (state, action) => {
      state.value[3] = action.payload;
    },
    // 영화 상세정보
    details: (state, action) => {
      state.value[4] = action.payload;
    },
    // 영화 리뷰
    reviews: (state, action) => {
      state.value[5] = action.payload;
    },
    // 연관 영화 추천
    recommend: (state, action) => {
      state.value[6] = action.payload;
    },
    // 검색
    search: (state, action) => {
      state.value[7] = action.payload;
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
    // genre list 호출
    builder 
    .addCase(getGenreList.pending, (state) => {
      state.status = 'Loading';
    })
    .addCase(getGenreList.fulfilled, (state, action) => {
      state.value[3] = action.payload;
      state.status = 'Complete';
    })
    .addCase(getGenreList.rejected, (state) => {
      state.status = 'Fail';
    })
    // movie details 호출
    builder 
    .addCase(getDetails.pending, (state) => {
      state.status = 'Loading';
    })
    .addCase(getDetails.fulfilled, (state, action) => {
      state.value[4] = action.payload;
      state.status = 'Complete';
    })
    .addCase(getDetails.rejected, (state) => {
      state.status = 'Fail';
    })
    // movie reviews 호출
    builder 
    .addCase(getReviews.pending, (state) => {
      state.status = 'Loading';
    })
    .addCase(getReviews.fulfilled, (state, action) => {
      state.value[5] = action.payload;
      state.status = 'Complete';
    })
    .addCase(getReviews.rejected, (state) => {
      state.status = 'Fail';
    })
    // movie recommendations 호출
    builder 
    .addCase(getRecommendations.pending, (state) => {
      state.status = 'Loading';
    })
    .addCase(getRecommendations.fulfilled, (state, action) => {
      state.value[6] = action.payload;
      state.status = 'Complete';
    })
    .addCase(getRecommendations.rejected, (state) => {
      state.status = 'Fail';
    })
    // 검색
    builder 
    .addCase(searchMovie.pending, (state) => {
      state.status = 'Loading';
    })
    .addCase(searchMovie.fulfilled, (state, action) => {
      state.value[7] = action.payload;
      state.status = 'Complete';
    })
    .addCase(searchMovie.rejected, (state) => {
      state.status = 'Fail';
    })
  }
})

export default slice.reducer;
export const { search, popular, topRated, upComing, genre, details, reviews, recommend } = slice.actions;

