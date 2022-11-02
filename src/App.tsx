import React, {useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';

import './App.scss';
import Header from './components/Header/Header';
import {getMovies} from './redux/slices/movie-list/movie-list';
import {useAppDispatch, useAppSelector} from './redux/hooks';
import Home from './pages/Home/Home';
import Movie from './pages/Movie/Movie';
import NotFound from './pages/NotFound/NotFound';

function App() {
    const dispatch = useAppDispatch();
    const {backdrop_path, poster_path,genres, original_title, overview, vote_average} = useAppSelector(state => state.movieDetails);
    useEffect(() => {
        dispatch(getMovies({page: 1}));
    }, []);

    return (
        <div className='app'>
            <Header/>
            <Routes>
               <Route path='/' element={<Home/>}/>
               <Route path='/movie/:movieID' element={<Movie />}/>
               <Route path='*' element={<NotFound />}/>
            </Routes>
        </div>
    );
}

export default App;
