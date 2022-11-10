import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {MovieType} from '../../../api/api-types';
import {moviesAPI} from '../../../api/api';
import {setAppProgressStatus} from '../app/app';

export enum CATEGORIES {
    POPULAR = 0,
    TOP_RATED = 1,
    NOW_PLAYING = 2,
    UPCOMING = 3
}


export const getMovies = createAsyncThunk('moviesList/getMovies',
    async (arg: { category: number, page?: number }, {dispatch, rejectWithValue}) => {
        dispatch(setAppProgressStatus({status: 'loading'}));
        try {
            if (arg.category === CATEGORIES.POPULAR) {
                const res = await moviesAPI.getPopularMovies({page: arg.page});
                return {...res.data, current_topic: 'POPULAR' as const};
            }
            if (arg.category === CATEGORIES.TOP_RATED) {
                const res = await moviesAPI.getTopRatedMovies({page: arg.page});
                return {...res.data, current_topic: 'TOP_RATED' as const};
            }
            if (arg.category === CATEGORIES.NOW_PLAYING) {
                const res = await moviesAPI.getNowPlayingMovies({page: arg.page});
                return {...res.data, current_topic: 'NOW_PLAYING' as const};
            } else {
                const res = await moviesAPI.getUpcomingMovies({page: arg.page});
                return {...res.data, current_topic: 'UPCOMING' as const};
            }
        } catch (e) {
            return rejectWithValue({error: 'something went wrong'});
        } finally {
            dispatch(setAppProgressStatus({status: 'succeeded'}));
        }
    });


const moviesListSlice = createSlice({
    name: 'moviesList',
    initialState: {} as InitialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getMovies.fulfilled, (state, action) => {
            state.results = action.payload.results;
            state.page = action.payload.page;
            state.total_pages = action.payload.total_pages;
            state.total_results = action.payload.total_results;
            state.current_topic = action.payload.current_topic;
        });
    }
});

type InitialState = {
    page: number
    results: MovieType[]
    total_pages: number
    total_results: number
    current_topic: CurrentTopic
}

export type CurrentTopic = 'POPULAR' | 'TOP_RATED' | 'NOW_PLAYING' | 'UPCOMING'

export const moviesReducer = moviesListSlice.reducer;