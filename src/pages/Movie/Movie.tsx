import React, {useEffect} from 'react';

import MovieDetails from '../../components/MovieDetails/MovieDetails';
import MovieCast from '../../components/MovieCast/MovieCast';

const Movie = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <MovieDetails/>
            <MovieCast/>
        </div>
    );
};

export default Movie;