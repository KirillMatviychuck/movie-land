import React from 'react';

import MovieDetails from '../../components/MovieDetails/MovieDetails';
import MovieCast from '../../components/MovieCast/MovieCast';

const Movie = () => {
    return (
        <div>
            <MovieDetails/>
            <MovieCast/>
        </div>
    );
};

export default Movie;