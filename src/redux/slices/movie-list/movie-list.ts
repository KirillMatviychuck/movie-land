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
                dispatch(setAppProgressStatus({ status: 'succeeded' }));
                return { ...res.data, current_topic: CATEGORIES.POPULAR };
            } else if (arg.category === CATEGORIES.TOP_RATED) {
                const res = await moviesAPI.getTopRatedMovies({ page: arg.page });
                dispatch(setAppProgressStatus({ status: 'succeeded' }));
                return { ...res.data, current_topic: CATEGORIES.TOP_RATED };
            } else if (arg.category === CATEGORIES.NOW_PLAYING) {
                const res = await moviesAPI.getNowPlayingMovies({ page: arg.page });
                dispatch(setAppProgressStatus({ status: 'succeeded' }));
                return { ...res.data, current_topic: CATEGORIES.NOW_PLAYING };
            } else {
                const res = await moviesAPI.getUpcomingMovies({ page: arg.page });
                dispatch(setAppProgressStatus({ status: 'succeeded' }));
                return { ...res.data, current_topic: CATEGORIES.UPCOMING };
            }
        } catch (e) {
            dispatch(setAppProgressStatus({ status: 'failed' }));
            return rejectWithValue({ error: 'something went wrong' });
        }
    });

export const searchMovies = createAsyncThunk('search/searchMovie',
    async (arg: { title: string, page?: number }, { dispatch, rejectWithValue }) => {
        try {
            const res = await searchAPI.searchMovies(arg.title, arg.page);
            return { ...res.data, searchField: arg.title };
        } catch (e) {
            dispatch(setAppProgressStatus({ status: 'failed' }));
            return rejectWithValue({ error: 'something went wrong' });
        }
    });

const initialState: InitialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
    current_topic: CATEGORIES.POPULAR,
    searchField: ''
};

const moviesListSlice = createSlice({
    name: 'moviesList',
    initialState: initialState,
    reducers: {
        changeSearchField(state, action: PayloadAction<{ value: string }>) {
            if (state) {
                state.searchField = action.payload.value;
            }
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getMovies.fulfilled, (state, action) => {
                state.page = action.payload.page;
                state.results = action.payload.results;
                state.total_pages = action.payload.total_pages;
                state.total_results = action.payload.total_results;
                state.current_topic = action.payload.current_topic;
            });
        builder.addCase(getMovies.rejected, (state, action) => {
            return initialState;
        });
        builder.addCase(searchMovies.fulfilled, (state, action) => {
            return {
                ...action.payload,
                current_topic: state.current_topic
            };
        });
        builder.addCase(searchMovies.rejected, (state, action) => {
            return initialState;
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