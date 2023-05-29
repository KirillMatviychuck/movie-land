import { FC } from 'react';

import { getProfileURL } from '../../../utils/utils';
import female from '../../../assets/images/main-page/cast/female.jpg';
import male from '../../../assets/images/main-page/cast/male.jpg';

import styles from './ActorLefrCol.module.scss';

const ActorLeftCol: FC<Props> = ({ profile_path, gender, birthday, place_of_birth }) => {

    const defaultPicture = gender === 1 ? female : male;
    const correctGender = gender === 1 ? 'Female' : 'Male';

    return (
        <div className={styles.leftCol}>
            <img src={getProfileURL(profile_path)
                ? getProfileURL(profile_path)
                : defaultPicture} alt='actor' />
            <p className={styles.socials}>TW IN FA</p>
            <h3 className={styles.pesonalInfo}>Personal Info</h3>
            <p className={styles.pesonalInfo}><span className={styles.personalnfoTitles}>Gender: </span><br /> {correctGender}</p>
            <p className={styles.pesonalInfo}><span className={styles.personalnfoTitles}>Birthday: </span><br /> {birthday}</p>
            <p className={styles.pesonalInfo}><span className={styles.personalnfoTitles}>Place of Birth: </span><br />{place_of_birth}</p>
        </div>
    );
};

type Props = {
    profile_path: string
    gender: number
    birthday: string
    place_of_birth: string
}

export default ActorLeftCol;