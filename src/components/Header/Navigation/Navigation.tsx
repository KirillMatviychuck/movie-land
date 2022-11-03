import React, {useState} from 'react';

import {useAppDispatch} from '../../../redux/hooks';
import {CATEGORIES, getMovies} from '../../../redux/slices/movie-list/movie-list';

import styles from './Navigation.module.scss';


const Navigation = () => {
    const dispatch = useAppDispatch();
    const navbar = ['Popular', 'Top rated', 'Now playing', 'Upcoming'];
    const [activeIndex, setActiveIndex] = useState(0);

    const onCategoryChange = (index: number) => {
        setActiveIndex(index);
        if (index === 0) dispatch(getMovies({category: CATEGORIES.POPULAR}));  
        if (index === 1) dispatch(getMovies({category: CATEGORIES.TOP_RATED}));
        if (index === 2) dispatch(getMovies({category: CATEGORIES.NOW_PLAYING}));
        if (index === 3) dispatch(getMovies({category: CATEGORIES.UPCOMING}));
    };
    
    return (
        <nav className={styles.navigationBlock}>
            {
                navbar.map((value, index) => {
                    return <span key={index}
                                 className={activeIndex === index ? styles.active : styles.navigation}
                                 onClick={() => onCategoryChange(index)}>
                    {value}</span>;
                })
            }

        </nav>
    );
};

export default Navigation;