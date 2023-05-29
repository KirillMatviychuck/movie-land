import React, { useState } from 'react';
import { Switch } from '@material-ui/core';

import ActorCard from '../ActorCard/ActorCard';
import { useAppSelector } from '../../redux/hooks';
import MainPageSkeleton from '../skeletons/MainPageSkeleton/MainPageSkeleton';

import classes from './MovieCast.module.scss';

const MovieCast = () => {
    const [switchMode, setSwitchMode] = useState(false);
    const cast = useAppSelector(state => state.movieCast.cast);

    const changeSwitchMode = () => setSwitchMode(!switchMode);
    const castArray = switchMode
        ? cast.slice(0, 12).map((actor, index) => <ActorCard key={actor.id}
            actor={cast[index]} />)
        : cast.slice(0, 6).map((actor, index) => <ActorCard key={actor.id}
            actor={cast[index]} />);


    return (
        <div className={classes.actors}>
            <div className={classes.actorsHeader}>
                <h1 className={classes.title}>ACTORS</h1>
                <div className={classes.switch}>
                    Show more
                    <Switch color='primary' className={classes.switchBtn} onChange={changeSwitchMode} />
                </div>
            </div>
            <div className={classes.actorsCards}>
                {
                    cast.length
                        ? castArray
                        : [...new Array(6)].map((_, index) => <MainPageSkeleton key={index} />)
                }
            </div>
        </div>
    );
};

export default MovieCast;