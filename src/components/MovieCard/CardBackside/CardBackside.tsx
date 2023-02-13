import React, {FC} from 'react';
import {FavoriteBorderOutlined} from '@material-ui/icons';

import styles from './CardBackside.module.scss';

const CardBackside: FC<Props> = ({movie_title, release_date, rating}) => {

    const correctMovieRate = (rate: number) => rate ? rate.toFixed(1) : 0;
    const correctDate = (date: string) => {
        if (date) {
            const year = date.slice(0, 4);
            const month = date.slice(5, 7);
            const day = date.slice(8);
            return `${day}-${month}-${year}`;
        } else return '10-10-2022';
    };

    return (
        <div className={styles.backside}>
            <div className={styles.title}>{movie_title}</div>
            <div className={styles.favoriteRatingBlock}>
                <div className={styles.ratingBlock}>
                    <div className={styles.ratingTitle}>Rating:</div>
                    <div className={styles.rating}>{correctMovieRate(rating)}</div>
                </div>
                <div className={styles.favoriteBlock}>
                    <div className={styles.favoriteTitle}>To watchlist:</div>
                    <div className={styles.toFavorite}>{<FavoriteBorderOutlined/>}</div>
                </div>
            </div>
            <div className={styles.releaseBlock}>
            <div className={styles.releaseDateTitle}>Release date:</div>
                <div className={styles.releaseDate}>{correctDate(release_date)}</div>
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