import React from 'react';

import {getPosterURL} from '../MovieCard/MovieCard';
import clock from '../../assets/images/main-page/movie/clock.png';
import reverse from '../../assets/images/main-page/movie/reverse.png';
import dollar from '../../assets/images/main-page/movie/dollar.png';
import {useAppSelector} from '../../redux/hooks';
import SingleMovieSkeleton from '../skeletons/SingleMovie/SingleMovieSkeleton';
import defaultPoster from '../../assets/images/main-page/no-poster-found.jpg';

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
    const {status} = useAppSelector(state => state.app);
    const correctMovieRate = (rate: number) => rate ? rate.toFixed(1) : 0;
    const correctDuration = (runtime: number) => {
        const hours = Math.floor(runtime / 60);
        const minutes = runtime - (hours * 60);
        return `${hours}h ${minutes}m`;
    };
    const correctDate = (date: string) => {
        if (date) {
            const year = date.slice(0, 4);
            const month = date.slice(5, 7);
            const day = date.slice(8);
            return `${day}-${month}-${year}`;
        } else return '10-10-2022';
    };

    if (status === 'loading') return <SingleMovieSkeleton/>;

    return (
        <div className={styles.backdrop}
             style={{backgroundImage: `url(${getBackdropURL(backdrop_path)})`}}>
            <div className={styles.movieBlock}>
                {poster_path
                    ? <img className={styles.poster} src={getPosterURL(poster_path)} alt='movie poster'/>
                    : <img className={styles.poster} src={defaultPoster} alt='default poster'/>
                }
                <div className={styles.description}>
                    <div className={styles.aboutMovie}>
                        <div className={styles.aboutMovieHeader}>
                            <h2 className={styles.movieTitle}>{title}</h2>
                            <span className={styles.movieRating}>{correctMovieRate(vote_average)}</span>
                        </div>
                        {tagline && <div className={styles.tagline}>{tagline}</div>}
                        <p className={styles.plot}>{overview}</p>
                        <div className={styles.genresBlock}>
                            <h4 className={styles.genres}>GENRES :</h4>
                            {genres
                                ? genres.map(genre => <span key={genre.id}
                                                            className={styles.genreItem}>{genre.name}</span>)
                                : ''}
                        </div>
                    </div>
                </div>
                <div className={styles.footer}>
                    <div>
                        <img src={clock} alt='clock'/>
                        <span className={styles.footerSpan}>Release date: {correctDate(release_date)}</span>
                    </div>
                    <div>
                        <img src={reverse} alt='reverse'/>
                        <span className={styles.footerSpan}>Duration: {correctDuration(runtime)}</span>
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