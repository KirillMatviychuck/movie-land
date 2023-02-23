import React from 'react';
import {Navigate, Route, Routes, useLocation} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';

import Home from '../../pages/Home/Home';
import Movie from '../../pages/Movie/Movie';
import NotFound from '../../pages/NotFound/NotFound';

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Navigate to={'/movie-land'}/>}/>
                <Route path='/movie-land' element={<Home/>}/>
                <Route path='/movie/:movieID' element={<Movie/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;