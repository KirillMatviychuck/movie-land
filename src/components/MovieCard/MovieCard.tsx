import React from 'react';
import {useNavigate} from 'react-router-dom';

import {useAppDispatch} from '../../redux/hooks';
import {getMovieDetails} from '../../redux/slices/movie-details';
import defaultPoster from '../../assets/images/main-page/no-poster-found.jpg'

import styles from './MovieCard.module.scss';

export const getPosterURL = (posterPath: string) => {
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterPath}`;
};

const MovieCard: React.FC<PropsType> = ({poster, movieID}) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const onClickHandler = () => {
        dispatch(getMovieDetails({movieID}));
        navigate(`/movie/${movieID}`);
    };

    return (
        <div className={styles.movieCard} onClick={onClickHandler}>
            {poster
                ? <img src={getPosterURL(poster)} alt='movie poster'/>
                : <img src={defaultPoster} alt='default poster'/>
            }
        </div>
    );
};

type PropsType = {
    poster: string
    movieID: number
}

export default MovieCard;