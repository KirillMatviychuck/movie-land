import React, {useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';

import './App.scss';
import Header from './components/Header/Header';
import {CATEGORIES, getMovies} from './redux/slices/movie-list';
import {useAppDispatch} from './redux/hooks';
import Home from './pages/Home/Home';
import Movie from './pages/Movie/Movie';
import NotFound from './pages/NotFound/NotFound';

function App() {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getMovies({category: CATEGORIES.POPULAR}));
    }, []);

    return (
        <div className='app'>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/movie/:movieID' element={<Movie/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </div>
    );
}

export default App;
