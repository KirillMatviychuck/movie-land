import axios from 'axios';

import {GetMoviesResponse} from './api-types';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});
const key = '016ccb02cdd8595021a6a64e763a449d';

export const moviesAPI = {
    getMovies(page: number) {
        return instance.get<GetMoviesResponse>('movie/popular', {params: {api_key: key, page}});
    }
};