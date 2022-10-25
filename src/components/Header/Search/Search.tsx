import React from 'react';

import search from '../../../assets/images/header/bottom-header/images/search.png';

import styles from './Search.module.scss';

const Search = () => {
    return (
        <div className={styles.searchField}>
            <img src={search} alt='search'/>
            <input type='text' placeholder='Enter the movie'/>
        </div>
    );
};

export default Search;