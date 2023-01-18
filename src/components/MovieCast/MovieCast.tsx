import React from 'react';

import ActorCard from '../ActorCard/ActorCard';
import {useAppSelector} from '../../redux/hooks';
import MainPageSkeleton from '../skeletons/MainPageSkeleton/MainPageSkeleton';

import classes from './MovieCast.module.scss';

const MovieCast = () => {
    const cast = useAppSelector(state => state.movieCast.cast);

    return (
        <div className={classes.actors}>
            <div className={classes.actorsHeader}>
                <h1 className={classes.title}>ACTORS</h1>
                <button className={classes.showAllBtn}>Show more</button>
            </div>
            <div className={classes.actorsCards}>
                {
                    cast.length
                    ? cast.slice(0,6).map((actor, index) => <ActorCard key={actor.id}
                                                                        cast={cast[index]} />)
                    : [...new Array(6)].map((_,index) => <MainPageSkeleton key={index}/>)
                }
            </div>
        </div>
    );
};

export default MovieCast;