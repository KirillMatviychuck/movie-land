import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { MovieType } from '../../../api/api-types';
import { moviesAPI, searchAPI } from '../../../api/api';

import { setAppProgressStatus } from '../app/app';

export enum CATEGORIES {
    POPULAR = 0,
    TOP_RATED = 1,
    NOW_PLAYING = 2,
    UPCOMING = 3
}


export const getMovies = createAsyncThunk('moviesList/getMovies',
    async (arg: { category: number, page?: number }, { dispatch, rejectWithValue }) => {
        dispatch(setAppProgressStatus({ status: 'loading' }));
        try {
            if (arg.category === CATEGORIES.POPULAR) {
                const res = await moviesAPI.getPopularMovies({ page: arg.page });
                return { ...res.data, current_topic: CATEGORIES.POPULAR };
            }
            if (arg.category === CATEGORIES.TOP_RATED) {
                const res = await moviesAPI.getTopRatedMovies({ page: arg.page });
                return { ...res.data, current_topic: CATEGORIES.TOP_RATED };
            }
            if (arg.category === CATEGORIES.NOW_PLAYING) {
                const res = await moviesAPI.getNowPlayingMovies({ page: arg.page });
                return { ...res.data, current_topic: CATEGORIES.NOW_PLAYING };
            } else {
                const res = await moviesAPI.getUpcomingMovies({ page: arg.page });
                return { ...res.data, current_topic: CATEGORIES.UPCOMING };
            }
        } catch (e) {
            return rejectWithValue({ error: 'something went wrong' });
        } finally {
            dispatch(setAppProgressStatus({ status: 'succeeded' }));
        }
    });

export const searchMovies = createAsyncThunk('search/searchMovie',
    async (arg: { title: string, page?: number }, { rejectWithValue }) => {
        try {
            const res = await searchAPI.searchMovies(arg.title, arg.page);
            return { ...res.data, searchField: arg.title };
        } catch (e) {
            return rejectWithValue({ error: 'something went wrong' });
        }
    });


const moviesListSlice = createSlice({
    name: 'moviesList',
    initialState: {} as InitialState,
    reducers: {
        changeSearchField(state, action: PayloadAction<{ value: string }>) {
            state.searchField = action.payload.value;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getMovies.fulfilled, (state, action) => {
                state.results = action.payload.results;
                state.page = action.payload.page;
                state.total_pages = action.payload.total_pages;
                state.total_results = action.payload.total_results;
                state.current_topic = action.payload.current_topic;
            })
            .addCase(searchMovies.fulfilled, (state, action) => {
                state.results = action.payload.results;
                state.page = action.payload.page;
                state.total_pages = action.payload.total_pages;
                state.total_results = action.payload.total_results;
                state.searchField = action.payload.searchField;
            });

    }
});

export const { changeSearchField } = moviesListSlice.actions;
export const moviesReducer = moviesListSlice.reducer;

type InitialState = {
    page: number
    results: MovieType[]
    total_pages: number
    total_results: number
    current_topic: number
    searchField: string
}