import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { setAppProgressStatus } from '../app/app';
import { moviesAPI } from '../../../api/api';
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
            const response = await moviesAPI.getActorDetails(arg.actorID);
            dispatch(setAppProgressStatus({ status: 'succeeded' }));
            return { ...response.data };
        } catch (e) {
            return rejectWithValue('something went wrong');
        }

    });

export const getMovieActorCredits = createAsyncThunk('movieActorDetails/getActorMovieCredits',
    async (arg: { actorID: number }, { dispatch, rejectWithValue }) => {
        dispatch(setAppProgressStatus({ status: 'loading' }));
        try {
            const response = await moviesAPI.getActorCredits(arg.actorID);
            dispatch(setAppProgressStatus({ status: 'succeeded' }));
            return { ...response.data };
        } catch (error) {
            return rejectWithValue('something went wrong');
        }
    });
export const getMovieActorExternalID = createAsyncThunk('movieActorDetails/getActorMovieExternalID',
    async (arg: { actorID: number }, { dispatch, rejectWithValue }) => {
        dispatch(setAppProgressStatus({ status: 'loading' }));
        try {
            const response = await moviesAPI.getActorExternalID(arg.actorID);
            dispatch(setAppProgressStatus({ status: 'succeeded' }));
            return { ...response.data };
        } catch (error) {
            return rejectWithValue('something went wrong');
        }
    });

const movieActorDetailsSlice = createSlice({
    initialState,
    name: 'movieActorDetails',
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getMovieActorDetails.fulfilled, (state, action) => {
            state.adult = action.payload.adult;
            state.also_known_as = action.payload.also_known_as;
            state.biography = action.payload.biography;
            state.birthday = action.payload.birthday;
            state.gender = action.payload.gender;
            state.id = action.payload.id;
            state.imdb_id = action.payload.imdb_id;
            state.known_for_department = action.payload.known_for_department;
            state.name = action.payload.name;
            state.place_of_birth = action.payload.place_of_birth;
            state.popularity = action.payload.popularity;
            state.profile_path = action.payload.profile_path;
        });
        builder.addCase(getMovieActorCredits.fulfilled, (state, action) => {
            state.actorCredits = action.payload.cast
                .sort((a, b) => +b.release_date.slice(0, 4) - +a.release_date.slice(0, 4))
                .filter(movie => +movie.release_date.slice(0, 4) < 2024 && movie.vote_average !== 0 && movie.character);
            state.topMovies = action.payload.cast.sort((a, b) => b.vote_count - a.vote_count).slice(0, 5);
        });
        builder.addCase(getMovieActorExternalID.fulfilled, (state, action) => {
            state.actorExternalID = { ...action.payload };
        });
    },
});


export const movieActorDetailsReducer = movieActorDetailsSlice.reducer;