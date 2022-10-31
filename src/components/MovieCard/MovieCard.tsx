import React from 'react';

import styles from './MovieCard.module.scss';

const getPosterURL = (posterPath: string) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterPath}`;
};

const MovieCard: React.FC<PropsType> = ({poster}) => {

    return (
        <div className={styles.movieCard}>
                <img src={getPosterURL(poster)} alt='movie poster'/>
        </div>
    );
};

type PropsType = {
    poster: string
}

export default MovieCard;