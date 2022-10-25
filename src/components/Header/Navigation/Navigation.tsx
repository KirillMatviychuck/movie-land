import React from 'react';

import styles from './Navigation.module.scss';

const Navigation = () => {
    return (
        <nav className={styles.navigationBlock}>
            <span className={styles.navigation}>Popular</span>
            <span className={styles.active}>Now playing</span>
            <span className={styles.navigation}>Top rating</span>
            <span className={styles.navigation}>Upcoming</span>
        </nav>
    );
};

export default Navigation;