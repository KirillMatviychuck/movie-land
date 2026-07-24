import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { GetDetailsResponse } from '../../../api/api-types';
import { moviesAPI } from '../../../api/api';

import { setAppProgressStatus } from '../app/app';

export const getMovieDetails = createAsyncThunk('movieDetails/getMovieDetails',
    async (arg: { movieID: number }, { dispatch, rejectWithValue }) => {
        dispatch(setAppProgressStatus({ status: 'loading' }));
        try {
            const res = await moviesAPI.getDetails(arg.movieID);
            dispatch(setAppProgressStatus({ status: 'succeeded' }));
            return { ...res.data };
        } catch (e) {
            dispatch(setAppProgressStatus({ status: 'failed' }));
            return rejectWithValue({ error: 'something went wrong' });
        }
    });

const initialState: GetDetailsResponse | null = null;


const movieDetailsSlice = createSlice<GetDetailsResponse | null, {}>({
    name: 'movieDetails',
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getMovieDetails.fulfilled, (state, action) => {
            return { ...action.payload };
        });
        builder.addCase(getMovieDetails.rejected, (state, action) => {
            return initialState;
        });

    }
});

export const movieDetailsReducer = movieDetailsSlice.reducer;