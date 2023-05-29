import { useAppSelector } from '../../redux/hooks';
import diesel from '../../assets/images/test/disel.jpg';
import { fixColor, fixMovieRate, getPosterURL, getProfileURL } from '../../utils/utils';
import male from '../../assets/images/main-page/cast/male.jpg';
import female from '../../assets/images/main-page/cast/female.jpg';
import SingleMovieSkeleton from '../../components/skeletons/SingleMovie/SingleMovieSkeleton';

import styles from './ActorPage.module.scss';


export const ActorPage = () => {
    const { biography, birthday, gender, place_of_birth, name, profile_path, actorCredits, topMovies } = useAppSelector(state => state.movieActorDetails);
    const { status } = useAppSelector(state => state.app);
    const correctGender = gender === 1 ? 'Female' : 'Male';
    const defaultPicture = gender === 1 ? female : male;

    if (status === 'loading') return <SingleMovieSkeleton />;

    return (
        <div className={styles.actorPage}>
            <div className={styles.actorPageContainer}>
                <div className={styles.leftCol}>
                    <img src={getProfileURL(profile_path)
                        ? getProfileURL(profile_path)
                        : defaultPicture} alt='actor' />
                    <p className={styles.socials}>TW IN FA</p>
                    <h3 className={styles.pesonalInfo}>Personal Info</h3>
                    <p className={styles.pesonalInfo}><span className={styles.personalnfoTitles}>Gender: </span><br /> {correctGender}</p>
                    <p className={styles.pesonalInfo}><span className={styles.personalnfoTitles}>Birthday: </span><br /> {birthday}</p>
                    <p className={styles.pesonalInfo}><span className={styles.personalnfoTitles}>Place of Birth: </span><br />{place_of_birth}</p>
                </div>
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
            </div>
        </div>
    );
};

