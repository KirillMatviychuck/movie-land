import React from 'react';

import {CreditsActor} from '../../api/api-types';

import classes from './ActorCard.module.scss';

const ActorCard: React.FC<Props> = ({cast}) => {

    const getProfileURL = (profilePath: string) => {
        return `https://www.themoviedb.org/t/p/w220_and_h330_face${profilePath}`;
    };

    return (
        <div className={classes.actorCard}>
            <div className={classes.actorImg}>
                <img src={getProfileURL(cast.profile_path)} alt='actor'/>
            </div>
            <div className={classes.actorBio}>
                <span className={classes.actorName}>{cast.name}</span>
                <span>{cast.character}</span>
            </div>
        </div>
    );
};

type Props = {
    cast: CreditsActor
}

export default ActorCard;