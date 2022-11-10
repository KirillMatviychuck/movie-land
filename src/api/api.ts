import axios from 'axios';

import {GetDetailsResponse, GetMoviesData, GetMoviesResponse} from './api-types';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});
const key = '016ccb02cdd8595021a6a64e763a449d';

export const moviesAPI = {
    getPopularMovies(data?: GetMoviesData) {
        return instance.get<GetMoviesResponse>('movie/popular', {params: {...data, api_key: key}});
    },
    getTopRatedMovies(data?: GetMoviesData) {
        return instance.get<GetMoviesResponse>('movie/top_rated', {params: {...data, api_key: key}});
    },
    getNowPlayingMovies(data?: GetMoviesData) {
        return instance.get<GetMoviesResponse>('movie/now_playing', {params: {...data, api_key: key}});
    },
    getUpcomingMovies(data?: GetMoviesData) {
        return instance.get<GetMoviesResponse>('movie/upcoming', {params: {...data, api_key: key}});
    },
    getDetails(movieID: number) {
        return instance.get<GetDetailsResponse>(`movie/${movieID}`, {params: {api_key: key}});
    }
};