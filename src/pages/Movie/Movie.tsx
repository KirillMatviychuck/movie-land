import React from 'react';

import poster from '../../assets/images/main-page/poster.jpg';
import backdrop from '../../assets/images/main-page/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg';

import styles from './Movie.module.scss';

const Movie = () => {
    return (
            <div className={styles.backdrop} style={{backgroundImage: `url(${backdrop})`}}>
                <div className={styles.movieBlock}>
                    <img className={styles.poster} src={poster} alt='movie poster'/>
                    <div className={styles.aboutMovie}>
                        <h2>Black Adam</h2>
                        <h3>PLOT</h3>
                        <p className={styles.plot}>Reclusive and controversial author Bruce Cogburn is drawn out of hiding by an obsessive fan,
                            forcing the novelist to confront a past that he thought he could escape, and to account for
                            events set in motion by his bestseller decades earlier. Cogburn's search for who is behind
                            the manipulation and mental torment he encounters leads to an emotional roller-coaster ride
                            full of fear and danger, where things are not always as clear as they seem to be, and where
                            past deeds can have dire consequences.</p>
                        <h3>GENRES</h3>
                        <div className={styles.genres}>
                            <span className={styles.genreItem}>Comedy</span>
                            <span className={styles.genreItem}>Action</span>
                            <span className={styles.genreItem}>Adventure</span>
                        </div>
                        <h3>RATING</h3>
                        <span>7.9</span>
                        <h3>DIRECTOR</h3>
                        <span>Shawn Levy</span>
                    </div>
                </div>
            </div>
    );
};

export default Movie;