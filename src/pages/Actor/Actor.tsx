import { useAppSelector } from '../../redux/hooks';
import SingleMovieSkeleton from '../../components/skeletons/SingleMovie/SingleMovieSkeleton';
import ActorLeftCol from '../../components/ActorDetails/ActorLeftCol/ActorLeftCol';
import ActorRightCol from '../../components/ActorDetails/ActorRihgtCol/ActorRightCol';

import styles from './Actor.module.scss';


export const ActorPage = () => {
    const { biography, birthday, gender, place_of_birth, name, profile_path, actorCredits, topMovies } = useAppSelector(state => state.movieActorDetails);
    const { status } = useAppSelector(state => state.app);

    if (status === 'loading') return <SingleMovieSkeleton />;

    return (
        <div className={styles.actorPage}>
            <div className={styles.actorPageContainer}>
                <ActorLeftCol gender={gender} birthday={birthday} place_of_birth={place_of_birth} profile_path={profile_path} />
                <ActorRightCol actorCredits={actorCredits} biography={biography} name={name} topMovies={topMovies} />
            </div>
        </div>
    );
};

