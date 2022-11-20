import React from 'react';

import {useAppSelector} from '../../redux/hooks';
import MovieCard from '../../components/MovieCard/MovieCard';
import MainPageSkeleton from '../../components/skeletons/MainPageSkeleton/MainPageSkeleton';
import Paginator from '../../components/Pagination/Paginator';
import Footer from '../../components/Footer/Footer';

import styles from './Home.module.scss';


const Home = () => {
    const {results, total_pages,page, current_topic, searchField} = useAppSelector(state => state.movieList);
    const {status} = useAppSelector(state => state.app);

    if (status === 'loading') {
        return (
            <div className={styles.content}>
                <div className={styles.container}>
                    {[...new Array(15)].map((_, index) => <MainPageSkeleton key={index}/>)}
                </div>
            </div>
        );
    }

    return (
        <div className={styles.content}>
            <div className={styles.container}>
                {results
                    ? results.map(movie => {
                        return <MovieCard key={movie.id} poster={movie.poster_path} movieID={movie.id}/>;
                    })
                    : [...new Array(15)].map((_, index) => <MainPageSkeleton key={index}/>)}
            </div>
            <Paginator totalPages={total_pages} page={page} current_topic={current_topic} searchField={searchField}/>
            <Footer />
        </div>
    );
};

export default Home;