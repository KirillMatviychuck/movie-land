import React from 'react';
import {Link} from 'react-router-dom';

import github from '../../assets/images/footer/github.png';
import instagram from '../../assets/images/footer/instagram.png';
import facebook from '../../assets/images/footer/facebook.png';

import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.socials}>
                <img src={github} alt='github' className={styles.images}/>
                <img src={instagram} alt='github' className={styles.images}/>
                <img src={facebook} alt='github' className={styles.images}/>
            </div>
            <Link to={'/movie'} className={styles.copyright}>
                © 2023 Movie Land
            </Link>
        </div>
    );
};

export default Footer;