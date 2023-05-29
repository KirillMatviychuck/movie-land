import axios from 'axios';

import { GetActorCreditsResponse, GetActorDetailsResponse, GetCreditsResponse, GetDetailsResponse, GetMoviesData, GetMoviesResponse } from './api-types';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});
const key = '016ccb02cdd8595021a6a64e763a449d';

export const moviesAPI = {
    getPopularMovies(data?: GetMoviesData) {
        return instance.get<GetMoviesResponse>('movie/popular', { params: { ...data, api_key: key } });
    },
    getTopRatedMovies(data?: GetMoviesData) {
        return instance.get<GetMoviesResponse>('movie/top_rated', { params: { ...data, api_key: key } });
    },
    getNowPlayingMovies(data?: GetMoviesData) {
        return instance.get<GetMoviesResponse>('movie/now_playing', { params: { ...data, api_key: key } });
    },
    getUpcomingMovies(data?: GetMoviesData) {
        return instance.get<GetMoviesResponse>('movie/upcoming', { params: { ...data, api_key: key } });
    },
    getDetails(movieID: number) {
        return instance.get<GetDetailsResponse>(`movie/${movieID}`, { params: { api_key: key } });
    },
    getCredits(movieID: number) {
        return instance.get<GetCreditsResponse>(`movie/${movieID}/credits`, { params: { api_key: key } });
    },
    getActorDetails(actorID: number) {
        return instance.get<GetActorDetailsResponse>(`person/${actorID}`, { params: { api_key: key } });
    },
    getActorCredits(actorID: number) {
        return instance.get<GetActorCreditsResponse>(`person/${actorID}/movie_credits`, { params: { api_key: key } });
    },
};

export const searchAPI = {
    searchMovies(title: string, page?: number) {
        return instance.get<GetMoviesResponse>('search/movie', { params: { api_key: key, query: title, page } });
    }
};