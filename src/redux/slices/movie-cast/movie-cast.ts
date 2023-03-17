import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {GetCreditsResponse} from '../../../api/api-types';
import {moviesAPI} from '../../../api/api';

import {setAppProgressStatus} from '../app/app';

const initialState: GetCreditsResponse = {
    id: 0,
    cast: []
};

export const getMovieCast = createAsyncThunk('movieCast/getMovieCast',
    async (arg: { movieID: number }, {dispatch, rejectWithValue}) => {
        dispatch(setAppProgressStatus({status: 'loading'}));
        try {
            const res = await moviesAPI.getCredits(arg.movieID);
            dispatch(setAppProgressStatus({status: 'succeeded'}));
            return {...res.data};
        } catch (e) {
            return rejectWithValue({error: 'something went wrong'});
        }
    });

const movieCastSlice = createSlice({
    name: 'movieCast',
    initialState: initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getMovieCast.fulfilled, (state, action) => {
            state.id = action.payload.id;
            state.cast = action.payload.cast;
        });
    }
});


export const movieCastReducer = movieCastSlice.reducer;