import React from 'react';

import {CreditsActor} from '../../api/api-types';
import male from '../../assets/images/main-page/cast/male.jpg';
import female from '../../assets/images/main-page/cast/female.jpg';

import classes from './ActorCard.module.scss';

const ActorCard: React.FC<Props> = ({actor}) => {

    const getProfileURL = (profilePath: string) => {
        return profilePath
            ? `https://www.themoviedb.org/t/p/w220_and_h330_face${profilePath}`
            : '';
    };
    const defaultPicture = actor.gender === 1 ? female : male;
    return (
        <div className={classes.actorCard}>
            <div className={classes.actorImg}>
                <img src={getProfileURL(actor.profile_path)
                    ? getProfileURL(actor.profile_path)
                    : defaultPicture} alt='actor'/>
            </div>
            <div className={classes.actorBio}>
                <span className={classes.actorName}>{actor.name}</span>
                <span className={classes.actorCharacter}>{actor.character}</span>
            </div>
        </div>
    );
};

type Props = {
    actor: CreditsActor
}

export default ActorCard;