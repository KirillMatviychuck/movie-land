import React from 'react';

import styles from './Pagination.module.scss';
const Pagination = () => {
    return (
        <div className={styles.pagination}>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
        </div>
    );
};

export default Pagination;