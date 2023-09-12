import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { ActorCreditsItem } from '../../../api/api-types';
import { fixColor, fixMovieRate, getPosterURL } from '../../../utils/utils';
import { useAppDispatch } from '../../../redux/hooks';
import { getMovieDetails } from '../../../redux/slices/movie-details/movie-details';
import { getMovieCast } from '../../../redux/slices/movie-cast/movie-cast';

import styles from './ActorRightCol.module.scss';



const ActorRightCol: FC<Props> = ({ actorCredits, biography, name, topMovies }) => {
    const dispatch = useAppDispatch();

    const onMovieClickHandler = (movieID: number) => {
        dispatch(getMovieDetails({ movieID }));
        dispatch(getMovieCast({ movieID }));
    };
    return (
        <div className={styles.rightCol}>
            <h1 className={styles.name}>{name}</h1>
            <h4>Biography <br /></h4>
            <p className={styles.biography}>{biography}</p>
            <div>
                <h4>Known For</h4>
                <p className={styles.knonForList}>
                    {topMovies.map(movie => <NavLink key={movie.id} to={`/movie/${movie.id}}`} onClick={() => onMovieClickHandler(movie.id)}>
                        <img src={getPosterURL(movie.poster_path)} alt='actor' />
                    </NavLink>)}
                </p>
            </div>
            <h3 className={styles.actingTitle}>Acting</h3>
            <div className={styles.acting}>
                <div className={styles.actorMoviesBlock}>
                    {actorCredits.map(movie => {
                        return <NavLink to={`/movie/${movie.id}}`}
                            onClick={() => onMovieClickHandler(movie.id)}
                            key={movie.id}
                            className={styles.actorMovie}>
                            <div className={styles.movieItem}>
                                <p className={styles.movieDetails}>
                                    {movie.release_date.slice(0, 4)} &nbsp;&nbsp; <span className={styles.circle}></span> &nbsp;&nbsp; {movie.title}<br /> &nbsp;&nbsp;&nbsp; <span>as {movie.character}</span>
                                </p>
                                <p className={styles.movieRating} style={{ border: `1px solid ${fixColor(movie.vote_average)}` }}>
                                    {fixMovieRate(movie.vote_average)}
                                </p>
                            </div>
                            <div className={styles.actorMovieLine}></div>
                        </NavLink>;
                    })}
                </div>
            </div>
        </div>
    );
};

type Props = {
    name: string
    biography: string
    actorCredits: ActorCreditsItem[]
    topMovies: ActorCreditsItem[]
}

export default ActorRightCol;