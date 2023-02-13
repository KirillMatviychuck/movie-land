import React, {useEffect} from 'react';
import {Pagination} from '@material-ui/lab';

import {useAppDispatch} from '../../redux/hooks';
import {getMovies, searchMovies} from '../../redux/slices/movie-list';

import styles from './Pagination.module.scss';

const Paginator: React.FC<PaginationProps> = ({page = 1, current_topic, searchField}) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const dispatch = useAppDispatch();
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        if (searchField) dispatch(searchMovies({title: searchField, page: value}));
        else dispatch(getMovies({category: current_topic, page: value}));
    };
    return (
        <div className={styles.paginationBlock}>
            <Pagination color='standard' count={200} page={page} onChange={handleChange}/>
        </div>
    );
};

type PaginationProps = {
    page: number
    current_topic: number
    searchField: string
}

export default Paginator;