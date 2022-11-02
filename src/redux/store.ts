import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';

import {moviesReducer} from './slices/movie-list/movie-list';
import {movieDetailsReducer} from './slices/movie-details/movie-details';


const rootReducer = combineReducers({
    movieList: moviesReducer,
    movieDetails: movieDetailsReducer
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunkMiddleware)
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// @ts-ignore
window.store = store;