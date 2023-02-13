import React, {FC} from 'react';
import {FavoriteBorderOutlined} from '@material-ui/icons';

import {fixColor, fixDate, fixMovieRate} from '../../../utils/utils';

import styles from './CardBackside.module.scss';

const CardBackside: FC<Props> = ({movie_title, release_date, rating}) => {

    const correctDate = fixDate(release_date);
    const movieRating = fixMovieRate(rating);
    const ratingColor = fixColor(movieRating);

    return (
        <div className={styles.backside}>
            <div className={styles.title}>{movie_title}</div>
            <div className={styles.favoriteRatingBlock}>
                <div className={styles.ratingBlock}>
                    <div className={styles.ratingTitle}>Rating:</div>
                    <div className={styles.rating} style={{border: `1px solid ${ratingColor}`}}>{movieRating}</div>
                </div>
                <div className={styles.favoriteBlock}>
                    <div className={styles.favoriteTitle}>To watchlist:</div>
                    <div className={styles.toFavorite}>{<FavoriteBorderOutlined color='secondary'/>}</div>
                </div>
            </div>
            <div className={styles.releaseBlock}>
            <div className={styles.releaseDateTitle}>Release date:</div>
                <div className={styles.releaseDate}>{correctDate}</div>
            </div>
            <div className={styles.footer}>
                <span className={styles.footerTitle}>OVERVIEW</span>
            </div>
        </div>
    );
};

type Props = {
    movie_title: string
    rating: number
    release_date: string
}

export default CardBackside;