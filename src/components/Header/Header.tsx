import React from 'react';

import popcorn from '../../assets/images/header/popcorn.png';
import tmbd from '../../assets/images/header/tmdb.png';

import styles from './Header.module.scss';
import Navigation from './Navigation/Navigation';
import Search from './Search/Search';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.topHeader}>
                <div className={styles.movieIcon}>
                    <img src={popcorn} alt='movieIcon'/>
                    <span className={styles.textSpan}>Movie Land</span>
                </div>
                <img className={styles.tmbdImage} src={tmbd} alt='movie data base'/>
            </div>
            <nav className={styles.bottomHeader}>
                <Navigation/>
                <Search/>
            </nav>
        </div>
    );
};

export default Header;