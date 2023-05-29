import { FC } from 'react';

import { ActorCreditsItem } from '../../../api/api-types';
import { fixColor, fixMovieRate, getPosterURL } from '../../../utils/utils';

import styles from './ActorRightCol.module.scss';


const ActorRightCol: FC<Props> = ({ actorCredits, biography, name, topMovies }) => {
    return (
        <div className={styles.rightCol}>
            <h1 className={styles.name}>{name}</h1>
            <h4>Biography <br /></h4>
            <p className={styles.biography}>{biography}</p>
            <div>
                <h4>Known For</h4>
                <p className={styles.knonForList}>
                    {topMovies.map((movie, index) => <img key={index} src={getPosterURL(movie.poster_path)} alt='actor' />)}
                </p>
            </div>
            <h3 className={styles.actingTitle}>Acting</h3>
            <div className={styles.acting}>
                <div className={styles.actorMoviesBlock}>
                    {actorCredits.map((movie, index) => {
                        return <div key={index} className={styles.actorMovie}>
                            <div className={styles.movieItem}>
                                <p className={styles.movieDetails}>
                                    {movie.release_date.slice(0, 4)} &nbsp;&nbsp; <span className={styles.circle}></span> &nbsp;&nbsp; {movie.title}<br /> &nbsp;&nbsp;&nbsp; <span>as {movie.character}</span>
                                </p>
                                <p className={styles.movieRating} style={{ border: `1px solid ${fixColor(movie.vote_average)}` }}>
                                    {fixMovieRate(movie.vote_average)}
                                </p>
                            </div>
                            <hr className={styles.actorMovieLine} />
                        </div>;
                    })}
                </div>
            </div>
        </div>
    )
};

type Props = {
    name: string
    biography: string
    actorCredits: ActorCreditsItem[]
    topMovies: ActorCreditsItem[]
}

export default ActorRightCol;