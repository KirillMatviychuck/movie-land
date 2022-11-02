import axios from 'axios';

import {GetDetailsResponse, GetPopularMoviesResponse} from './api-types';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});
const key = '016ccb02cdd8595021a6a64e763a449d';

export const moviesAPI = {
    getPopularMovies(page: number) {
        return instance.get<GetPopularMoviesResponse>('movie/popular', {params: {api_key: key, page}});
    },
    getDetails(movieID: number) {
        return instance.get<GetDetailsResponse>(`movie/${movieID}`, {params: {api_key: key}});
    }
};