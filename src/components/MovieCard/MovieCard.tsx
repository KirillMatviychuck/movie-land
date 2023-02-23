import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import {useAppDispatch} from '../../redux/hooks';
import {getMovieDetails} from '../../redux/slices/movie-details';
import defaultPoster from '../../assets/images/main-page/no-poster-found.jpg';
import {getMovieCast} from '../../redux/slices/movie-cast';

import styles from './MovieCard.module.scss';
import CardBackside from './CardBackside/CardBackside';

export const getPosterURL = (posterPath: string) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterPath}`;
};

const MovieCard: React.FC<PropsType> = ({poster, movieID, movie_title, release_date, rating}) => {
    const [isHovering, setIsHovering] = useState(false);
    const [delayHandler, setDelayHandler] = useState<any>(null);

    const handleMouseEnter = () => {
        setDelayHandler(setTimeout(() => setIsHovering(true), 150));
    };

    const handleMouseLeave = () => {
        clearTimeout(delayHandler);
        if (isHovering) setIsHovering(false);

    };

    const dispatch = useAppDispatch();
    const onClickHandler = () => {
        dispatch(getMovieDetails({movieID}));
        dispatch(getMovieCast({movieID}));
    };

    return (
        <Link to={`/movie/${movieID}`}
              className={styles.movieCard}
              onClick={onClickHandler}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
        >
            <div className={styles.flipCardInner}>
                <div className={styles.flipCardFront}>{
                    poster
                        ? <img src={getPosterURL(poster)} alt='movie poster'/>
                        : <img src={defaultPoster} alt='default poster'/>
                }
                </div>
                <div className={styles.flipCardBack}>
                    <CardBackside
                        movie_title={movie_title}
                        release_date={release_date}
                        rating={rating}
                    />
                </div>
            </div>

        </Link>
    );
};

type PropsType = {
    poster: string
    movieID: number
    movie_title: string
    rating: number
    release_date: string
}

export default MovieCard;