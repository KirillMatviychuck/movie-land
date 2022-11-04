import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {GetDetailsResponse} from '../../../api/api-types';
import {moviesAPI} from '../../../api/api';

export const getMovieDetails = createAsyncThunk('movieDetails/getMovieDetails',
    async (arg: { movieID: number }, {rejectWithValue}) => {
        try {
            const res = await moviesAPI.getDetails(arg.movieID);
            return {...res.data};
        } catch (e) {
            return rejectWithValue({error: 'something went wrong'});
        }
    });

const initialState = {};


const movieDetailsSlice = createSlice({
    name: 'movieDetails',
    initialState: initialState as GetDetailsResponse,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getMovieDetails.fulfilled, (state, action) => {
            state.adult = action.payload.adult;
            state.backdrop_path = action.payload.backdrop_path;
            state.budget = action.payload.budget;
            state.genres = action.payload.genres;
            state.homepage = action.payload.homepage;
            state.id = action.payload.id;
            state.imdb_id = action.payload.imdb_id;
            state.original_language = action.payload.original_language;
            state.original_title = action.payload.original_title;
            state.overview = action.payload.overview;
            state.popularity = action.payload.popularity;
            state.poster_path = action.payload.poster_path;
            state.release_date = action.payload.release_date;
            state.revenue = action.payload.revenue;
            state.runtime = action.payload.runtime;
            state.status = action.payload.status;
            state.tagline = action.payload.tagline;
            state.title = action.payload.title;
            state.video = action.payload.video;
            state.vote_average = action.payload.vote_average;
            state.vote_count = action.payload.vote_count;

        });
    }
});

export const movieDetailsReducer = movieDetailsSlice.reducer;