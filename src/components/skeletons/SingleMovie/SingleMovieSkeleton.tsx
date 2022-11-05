import React from 'react';
import ContentLoader from 'react-content-loader';

import styles from './SingleMovieSkeleton.module.scss';

const SingleMovieSkeleton = () => (
    <ContentLoader
        className={styles.movieSkeleton}
        speed={2}
        width={1920}
        height={800}
        viewBox='0 0 1600 800'
        backgroundColor='#f3f3f3'
        foregroundColor='#ecebeb'
    >
        <rect x='10' y='140' rx='7' ry='7' width='1500' height='500' />
    </ContentLoader>
);

export default SingleMovieSkeleton;

