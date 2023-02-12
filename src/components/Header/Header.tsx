import React from 'react';
import {useNavigate} from 'react-router-dom';

import popcorn from '../../assets/images/header/popcorn.png';
import tmbd from '../../assets/images/header/tmdb.png';

import styles from './Header.module.scss';
import Navigation from './Navigation/Navigation';
import Search from './Search/Search';

const Header = () => {
    const navigate = useNavigate();
    const onClickHandler = () => navigate('/');

    return (
        <div className={styles.header} id='anchor'>
            <div className={styles.topHeader}>
                <div className={styles.movieIcon} onClick={onClickHandler}>
                    <img src={popcorn} alt='movieIcon'/>
                    <span className={styles.textSpan}>Movie Land</span>
                </div>
                <a href='https://www.themoviedb.org/'> <img className={styles.tmbdImage} src={tmbd} alt='movie data base'/></a>
            </div>
            <nav className={styles.bottomHeader}>
                <Navigation/>
                <Search/>
            </nav>
        </div>
    );
};

export default Header;