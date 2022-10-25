import React from 'react';

import styles from './MovieCard.module.scss';
import poster from './image/john_wick_chapter_three_ver22.jpg';
const MovieCard = () => {
    return (
        <div className={styles.movieCard}>
                <img src={poster} alt='movie poster'/>
        </div>
    );
};

export default MovieCard;