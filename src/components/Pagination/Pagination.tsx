import React from 'react';

import {useAppDispatch} from '../../redux/hooks';
import {CATEGORIES, CurrentTopic, getMovies} from '../../redux/slices/movie-list/movie-list';

import styles from './Pagination.module.scss';

const Pagination: React.FC<PaginationProps> = ({page, current_topic}) => {
    const dispatch = useAppDispatch();

    const onNextButtonClick = () => {
        const nextPage = ++page;
        if (current_topic === 'POPULAR') dispatch(getMovies({category: CATEGORIES.POPULAR, page: nextPage}));
        if (current_topic === 'TOP_RATED') dispatch(getMovies({category: CATEGORIES.TOP_RATED, page: nextPage}));
        if (current_topic === 'NOW_PLAYING') dispatch(getMovies({category: CATEGORIES.NOW_PLAYING, page: nextPage}));
        if (current_topic === 'UPCOMING') dispatch(getMovies({category: CATEGORIES.UPCOMING, page: nextPage}));
    };
    const onPrevButtonClick = () => {
        const prevPage = --page;
        if (current_topic === 'POPULAR') dispatch(getMovies({category: CATEGORIES.POPULAR, page: prevPage}));
        if (current_topic === 'TOP_RATED') dispatch(getMovies({category: CATEGORIES.TOP_RATED, page: prevPage}));
        if (current_topic === 'NOW_PLAYING') dispatch(getMovies({category: CATEGORIES.NOW_PLAYING, page: prevPage}));
        if (current_topic === 'UPCOMING') dispatch(getMovies({category: CATEGORIES.UPCOMING, page: prevPage}));
    };
    return (
        <div className={styles.pagination}>
            <button className={styles.paginationBtn} onClick={onPrevButtonClick} disabled={page <= 1}>PREV</button>
            <button className={styles.paginationBtn} onClick={onNextButtonClick}>NEXT</button>
        </div>
    );
};

type PaginationProps = {
    page: number
    current_topic: CurrentTopic
}

export default Pagination;