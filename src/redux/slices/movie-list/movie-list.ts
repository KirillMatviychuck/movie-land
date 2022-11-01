import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {GetMoviesResponse} from '../../../api/api-types';
import {moviesAPI} from '../../../api/api';

export const getMovies = createAsyncThunk('moviesList/getMovies',
    async (arg: { page: number }, {rejectWithValue}) => {
        try {
            const res = await moviesAPI.getMovies(arg.page);
            return {...res.data};
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