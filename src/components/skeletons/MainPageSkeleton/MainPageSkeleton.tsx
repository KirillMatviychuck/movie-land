import React from 'react';
import ContentLoader from 'react-content-loader';

import styles from './MoviePageSkeleton.module.scss';



const MainPageSkeleton = () => (
        <ContentLoader
            className={styles.skeleton}
            speed={2}
            width={260}
            height={400}
            viewBox='0 0 260 400'
            backgroundColor='#f3f3f3'
            foregroundColor='#ecebeb'
        >
            <rect x='14' y='15' rx='10' ry='10' width='250' height='350'/>
        </ContentLoader>
);

export default MainPageSkeleton;

