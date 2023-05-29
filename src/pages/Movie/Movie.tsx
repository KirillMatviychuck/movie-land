import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

import MovieDetails from '../../components/MovieDetails/MovieDetails';
import MovieCast from '../../components/MovieCast/MovieCast';

const Movie = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            exit={{ opacity: 0 }}
        >
            <MovieDetails />
            <MovieCast />
        </motion.div>
    );
};

export default Movie;