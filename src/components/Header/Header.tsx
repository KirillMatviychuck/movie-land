import React from 'react';

import popcorn from '../../assets/images/header/popcorn.png';
import tmbd from '../../assets/images/header/tmdb.png';

import styles from './Header.module.scss';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.topHeader}>
                <div className={styles.movieIcon}>
                    <img src={popcorn} alt='movieIcon'/>
                    <span className={styles.textSpan}>React Movie</span>
                </div>
                    <img className={styles.tmbdImage} src={tmbd} alt='movie data base'/>
            </div>
            <div className={styles.bottomHeader}>
                <span className={styles.movieNamePath}>Home / God Father</span>
            </div>
        </div>
    );
};

export default Header;