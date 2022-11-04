import React from 'react';

import {getPosterURL} from '../MovieCard/MovieCard';
import clock from '../../assets/images/main-page/movie/clock.png';
import reverse from '../../assets/images/main-page/movie/reverse.png';
import dollar from '../../assets/images/main-page/movie/dollar.png';
import {useAppSelector} from '../../redux/hooks';

import styles from './MovieDetails.module.scss';

const getBackdropURL = (backdropPath: string) => {
    return `https://image.tmdb.org/t/p/original${backdropPath}`;
};

const MovieDetails = () => {
    const {
        vote_average, title, poster_path,
        backdrop_path, genres, release_date,
        revenue, runtime, tagline, overview
    } = useAppSelector(state => state.movieDetails);

    const correctMovieRate = (rate: number) => {
        return rate ? rate.toFixed(1) : 0;
    };

    return (
        <div className={styles.backdrop}
             style={{backgroundImage: `url(${getBackdropURL(backdrop_path)})`}}>
            <div className={styles.movieBlock}>
                <img className={styles.poster} src={getPosterURL(poster_path)} alt='movie poster'/>
                <div className={styles.description}>
                    <div className={styles.aboutMovie}>
                        <div className={styles.aboutMovieHeader}>
                            <h2 className={styles.movieTitle}>{title}</h2>
                            <span className={styles.movieRating}>{correctMovieRate(vote_average)}</span>
                        </div>
                        <div className={styles.tagline}>{tagline}</div>
                        <p className={styles.plot}>{overview}</p>
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
                        <span className={styles.footerSpan}>Release date: {release_date}</span>
                    </div>
                    <div>
                        <img src={reverse} alt='reverse'/>
                        <span className={styles.footerSpan}>Duration: {runtime}</span>
                    </div>
                    <div>
                        <img src={dollar} alt='dollar'/>
                        <span className={styles.footerSpan}>Revenue: {revenue}</span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MovieDetails;