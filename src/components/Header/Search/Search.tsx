import { ChangeEvent, useEffect } from 'react';

import search from '../../../assets/images/header/bottom-header/images/search.png';
import useDebounce from '../../../hooks/useDebounce';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { changeSearchField, searchMovies } from '../../../redux/slices/movie-list/movie-list';

import styles from './Search.module.scss';

const Search = () => {
    const dispatch = useAppDispatch();
    const { searchField } = useAppSelector(state => state.movieList);
    const debouncedValue = useDebounce<string>(searchField);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeSearchField({ value: event.target.value }));
    };

    useEffect(() => {
        if (debouncedValue) dispatch(searchMovies({ title: debouncedValue }));
    }, [debouncedValue, dispatch]);

    return (
        <div className={styles.searchField}>
            <img src={search} alt='search' />
            <input type='text' value={searchField} onChange={handleChange} placeholder='Enter the movie' />
        </div>
    );
};

export default Search;