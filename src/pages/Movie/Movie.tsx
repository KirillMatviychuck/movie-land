import React from 'react';

import poster from '../../assets/images/main-page/poster.jpg';
import backdrop from '../../assets/images/main-page/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg';
import clock from '../../assets/images/main-page/movie/clock.png';
import reverse from '../../assets/images/main-page/movie/reverse.png';
import dollar from '../../assets/images/main-page/movie/dollar.png';

import styles from './Movie.module.scss';

const Movie = () => {
    return (
        <div className={styles.backdrop} style={{backgroundImage: `url(${backdrop})`}}>
            <div className={styles.movieBlock}>
                <img className={styles.poster} src={poster} alt='movie poster'/>
                <div className={styles.description}>
                    <div className={styles.aboutMovie}>
                        <div className={styles.aboutMovieHeader}>
                            <h2 className={styles.movieTitle}>Black Adam</h2>
                            <span className={styles.movieRating}>7.9</span>
                        </div>
                        <div className={styles.tagline}>
                            The world needed a hero. It got Black Adam.
                        </div>
                        <p className={styles.plot}>Reclusive and controversial author Bruce Cogburn is drawn out of
                            hiding
                            by an obsessive fan,
                            forcing the novelist to confront a past that he thought he could escape, and to account for
                            events set in motion by his bestseller decades earlier. Cogburn's search for who is behind
                            the manipulation and mental torment he encounters leads to an emotional roller-coaster ride
                            full of fear and danger, where things are not always as clear as they seem to be, and where
                            past deeds can have dire consequences.</p>
                        <div className={styles.genresBlock}>
                            <h4 className={styles.genres}>GENRES :</h4>
                            <span className={styles.genreItem}>Comedy</span>
                            <span className={styles.genreItem}>Action</span>
                            <span className={styles.genreItem}>Adventure</span>
                        </div>
                    </div>
                </div>
                <div className={styles.footer}>
                    <div>
                        <img src={clock} alt='clock'/>
                        <span className={styles.footerSpan}>Release date: 11.02.2022</span>
                    </div>
                    <div>
                        <img src={reverse} alt='reverse'/>
                        <span className={styles.footerSpan}>Duration: 1h 55m</span>
                    </div>
                    <div>
                        <img src={dollar} alt='dollar'/>
                        <span className={styles.footerSpan}>Revenue: 250000000</span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Movie;