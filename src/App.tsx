import React from 'react';

import './App.scss';
import Header from './components/Header/Header';
import MovieCard from './components/MovieCard/MovieCard';
import Pagination from './components/Pagination/Pagination';


function App() {
    return (
        <div className='app'>
            <Header/>
            <div className='content'>
                <div className='container'>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                    <MovieCard/>
                </div>
                <Pagination />
            </div>
        </div>
    );
}

export default App;
