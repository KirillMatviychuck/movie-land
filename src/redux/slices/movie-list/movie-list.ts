import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {GetMoviesResponse} from '../../../api/api-types';
import {moviesAPI} from '../../../api/api';

export enum CATEGORIES {
    POPULAR = 0 ,
    TOP_RATED = 1 ,
    NOW_PLAYING = 2,
    UPCOMING = 3
}

export const getMovies = createAsyncThunk('moviesList/getMovies',
    async (arg: {category: number}, {rejectWithValue}) => {
        try {
            if (arg.category === CATEGORIES.POPULAR) {
                const res = await moviesAPI.getPopularMovies();
                return {...res.data};
            }
            if (arg.category === CATEGORIES.TOP_RATED) {
                const res = await moviesAPI.getTopRatedMovies();
                return {...res.data};
            }
            if (arg.category === CATEGORIES.NOW_PLAYING) {
                const res = await moviesAPI.getNowPlayingMovies();
                return {...res.data};
            }
            else {
                const res = await moviesAPI.getUpcomingMovies();
                return {...res.data};
            }
        } catch (e) {
            return rejectWithValue({error: 'something went wrong'});
        }
    });

const initialState = {};

const moviesListSlice = createSlice({
    name: 'moviesList',
    initialState: initialState as GetMoviesResponse,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getMovies.fulfilled, (state, action) => {
            state.results = action.payload.results;
            state.page = action.payload.page;
            state.total_pages = action.payload.total_pages;
            state.total_results = action.payload.total_results;
        });
    }
});

export const moviesReducer = moviesListSlice.reducer;