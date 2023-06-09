import React from 'react';
import { Link } from 'react-router-dom';

import { CreditsActor } from '../../api/api-types';
import male from '../../assets/images/main-page/cast/male.jpg';
import female from '../../assets/images/main-page/cast/female.jpg';
import { getProfileURL } from '../../utils/utils';
import { useAppDispatch } from '../../redux/hooks';
import { getMovieActorCredits, getMovieActorDetails, getMovieActorExternalID } from '../../redux/slices/movie-actor-details/actor-details';

import classes from './ActorCard.module.scss';

const ActorCard: React.FC<Props> = ({ actor }) => {

    const dispatch = useAppDispatch();
    const onClickHandler = () => {
        dispatch(getMovieActorDetails({ actorID: actor.id }));
        dispatch(getMovieActorCredits({ actorID: actor.id }));
        dispatch(getMovieActorExternalID({ actorID: actor.id }));
    };

    const defaultPicture = actor.gender === 1 ? female : male;
    return (
        <Link to={`/actor/${actor.id}`}
            className={classes.actorCard}
            onClick={onClickHandler}
        >
            <div className={classes.actorImg}>
                <img src={getProfileURL(actor.profile_path)
                    ? getProfileURL(actor.profile_path)
                    : defaultPicture} alt='actor' />
            </div>
            <div className={classes.actorBio}>
                <span className={classes.actorName}>{actor.name}</span>
                <span className={classes.actorCharacter}>{actor.character}</span>
            </div>
        </Link>
    );
};

type Props = {
    actor: CreditsActor
}

export default ActorCard;