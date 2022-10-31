import React, {useEffect} from 'react';

import './App.scss';
import Header from './components/Header/Header';
import Pagination from './components/Pagination/Pagination';
import {getMovies} from './redux/slices/movie-list-slice';
import {useAppDispatch, useAppSelector} from './redux/hooks';
import MainPageSkeleton from './components/skeletons/MainPageSkeleton/MainPageSkeleton';
import MovieCard from './components/MovieCard/MovieCard';


function App() {
    const dispatch = useAppDispatch();
    const {results} = useAppSelector(state => state.movieList);

    useEffect(() => {
        dispatch(getMovies({page: 1}));
    }, []);

    return (
        <div className='app'>
            <Header/>
            <div className='content'>
                <div className='container'>
                    {results
                        ? results.map(movie => {
                            return <MovieCard key={movie.id} poster={movie.poster_path}/>;
                        })
                        : [...new Array(15)].map(fake => <MainPageSkeleton/>)}
                </div>
                <Pagination/>
            </div>
        </div>
    );
}

export default App;
