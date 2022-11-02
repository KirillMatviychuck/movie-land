import React from 'react';

import {useAppSelector} from '../../redux/hooks';
import MovieCard from '../../components/MovieCard/MovieCard';
import MainPageSkeleton from '../../components/skeletons/MainPageSkeleton/MainPageSkeleton';
import Pagination from '../../components/Pagination/Pagination';

import styles from './Home.module.scss';


const Home = () => {
    const {results} = useAppSelector(state => state.movieList);
    
    return (
        <div className={styles.content}>
            <div className={styles.container}>
                {results
                    ? results.map(movie => {
                        return <MovieCard key={movie.id} poster={movie.poster_path} movieID={movie.id}/>;
                    })
                    : [...new Array(15)].map((_,index) => <MainPageSkeleton key={index}/>)}
            </div>
            <Pagination/>
        </div>
    );
};

export default Home;