import React from 'react';
import {motion} from 'framer-motion';

import {useAppSelector} from '../../redux/hooks';
import MovieCard from '../../components/MovieCard/MovieCard';
import MainPageSkeleton from '../../components/skeletons/MainPageSkeleton/MainPageSkeleton';
import Paginator from '../../components/Pagination/Paginator';
import Footer from '../../components/Footer/Footer';

import styles from './Home.module.scss';


const Home = () => {

    const {results, page, current_topic, searchField, total_pages} = useAppSelector(state => state.movieList);
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
        <motion.div className={styles.content}
                    initial={{opacity: 0}}
                    animate={{opacity: 1, transition: {duration: 0.5}}}
                    exit={{opacity: 0}}
        >
            <div className={styles.container}>
                {results
                    ? results.map(movie => {
                        return <MovieCard key={movie.id}
                                          poster={movie.poster_path}
                                          movieID={movie.id}
                                          movie_title={movie.title}
                                          rating={movie.vote_average}
                                          release_date={movie.release_date}
                        />;
                    })
                    : [...new Array(15)].map((_, index) => <MainPageSkeleton key={index}/>)}
            </div>
            <Paginator page={page} total_pages={total_pages} current_topic={current_topic} searchField={searchField}/>
            <Footer/>
        </motion.div>
    );
};

export default Home;