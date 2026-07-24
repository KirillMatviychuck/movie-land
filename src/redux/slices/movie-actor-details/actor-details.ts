import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { setAppProgressStatus } from '../app/app';
import { actorAPI } from '../../../api/api';
import { ActorCreditsItem, ActorExternalIDsItem } from '../../../api/api-types';

const initialState = {
    adult: false,
    also_known_as: [''],
    biography: '',
    birthday: '',
    gender: 0,
    id: 0,
    imdb_id: '',
    known_for_department: '',
    name: '',
    place_of_birth: '',
    popularity: 0,
    profile_path: '',
    actorCredits: [] as ActorCreditsItem[],
    topMovies: [] as ActorCreditsItem[],
    actorExternalID: {} as ActorExternalIDsItem
};

export const getMovieActorDetails = createAsyncThunk('movieActorDetails/getMovieActorDetails',
    async (arg: { actorID: number }, { dispatch, rejectWithValue }) => {
        dispatch(setAppProgressStatus({ status: 'loading' }));
        try {
            const response = await actorAPI.getActorDetails(arg.actorID);
            dispatch(setAppProgressStatus({ status: 'succeeded' }));
            return { ...response.data };
        } catch (e) {
            dispatch(setAppProgressStatus({ status: 'failed' }));
            return rejectWithValue('something went wrong');
        }

    });

export const getMovieActorCredits = createAsyncThunk('movieActorDetails/getActorMovieCredits',
    async (arg: { actorID: number }, { dispatch, rejectWithValue }) => {
        dispatch(setAppProgressStatus({ status: 'loading' }));
        try {
            const response = await actorAPI.getActorCredits(arg.actorID);
            dispatch(setAppProgressStatus({ status: 'succeeded' }));
            return { ...response.data };
        } catch (error) {
            dispatch(setAppProgressStatus({ status: 'failed' }));
            return rejectWithValue('something went wrong');
        }
    });
export const getMovieActorExternalID = createAsyncThunk('movieActorDetails/getActorMovieExternalID',
    async (arg: { actorID: number }, { dispatch, rejectWithValue }) => {
        dispatch(setAppProgressStatus({ status: 'loading' }));
        try {
            const response = await actorAPI.getActorExternalID(arg.actorID);
            dispatch(setAppProgressStatus({ status: 'succeeded' }));
            return { ...response.data };
        } catch (error) {
            dispatch(setAppProgressStatus({ status: 'failed' }));
            return rejectWithValue('something went wrong');
        }
    });

const movieActorDetailsSlice = createSlice({
    initialState,
    name: 'movieActorDetails',
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getMovieActorDetails.fulfilled, (state, action) => {
            Object.assign(state, action.payload);
        });
        builder.addCase(getMovieActorDetails.rejected, (state, action) => {
            return initialState;
        });
        builder.addCase(getMovieActorCredits.fulfilled, (state, action) => {
            state.actorCredits = action.payload.cast
                .sort((a, b) => +b.release_date.slice(0, 4) - +a.release_date.slice(0, 4))
                .filter(movie => +movie.release_date.slice(0, 4) < 2024 && movie.vote_average !== 0 && movie.character);
            state.topMovies = action.payload.cast.sort((a, b) => b.vote_count - a.vote_count).slice(0, 5);
        });
        builder.addCase(getMovieActorCredits.rejected, (state, action) => {
            return initialState;
        });
        builder.addCase(getMovieActorExternalID.fulfilled, (state, action) => {
            state.actorExternalID = { ...action.payload };
        });
        builder.addCase(getMovieActorExternalID.rejected, (state, action) => {
            return initialState;
        });
    },
});


export const movieActorDetailsReducer = movieActorDetailsSlice.reducer;