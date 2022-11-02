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
           state = {...action.payload};
        });
    }
});

export const movieDetailsReducer = movieDetailsSlice.reducer;