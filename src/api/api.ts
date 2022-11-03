import axios from 'axios';

import {GetDetailsResponse, GetMoviesResponse} from './api-types';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});
const key = '016ccb02cdd8595021a6a64e763a449d';

export const moviesAPI = {
    getPopularMovies() {
        return instance.get<GetMoviesResponse>('movie/popular', {params: {api_key: key}});
    },
    getTopRatedMovies() {
        return instance.get<GetMoviesResponse>('movie/top_rated', {params: {api_key: key}});
    },
    getNowPlayingMovies() {
        return instance.get<GetMoviesResponse>('movie/now_playing', {params: {api_key: key}});
    },
    getUpcomingMovies() {
        return instance.get<GetMoviesResponse>('movie/upcoming', {params: {api_key: key}});
    },

    getDetails(movieID: number) {
        return instance.get<GetDetailsResponse>(`movie/${movieID}`, {params: {api_key: key}});
    }
};