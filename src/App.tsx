import React, { useEffect } from 'react';

import './App.scss';
import Header from './components/Header/Header';
import { CATEGORIES, getMovies } from './redux/slices/movie-list/movie-list';
import { useAppDispatch } from './redux/hooks';
import AnimatedRoutes from './components/AnimatedRoutes/AnimatedRoutes';

function App() {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getMovies({ category: CATEGORIES.POPULAR }));
    }, [dispatch]);

    return (
        <div className='app'>
            <Header />
            <AnimatedRoutes />
        </div>
    );
}

export default App;
