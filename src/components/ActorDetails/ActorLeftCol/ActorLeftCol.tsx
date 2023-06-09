import { FC } from 'react';

import { getProfileURL } from '../../../utils/utils';
import female from '../../../assets/images/main-page/cast/female.jpg';
import male from '../../../assets/images/main-page/cast/male.jpg';
import { ReactComponent as Instagram } from '../../../assets/images/actor-page/actor-instagram.svg';
import { ReactComponent as Facebook } from '../../../assets/images/actor-page/actor-facebook.svg';
import { ReactComponent as Twitter } from '../../../assets/images/actor-page/actor-twitter.svg';
import { ActorExternalIDsItem } from '../../../api/api-types';

import styles from './ActorLefrCol.module.scss';
import { ActorSocial } from './ActorSocials/ActorSocial';

const ActorLeftCol: FC<Props> = ({ profile_path, gender, birthday, place_of_birth, actorExternalID }) => {

    const defaultPicture = gender === 1 ? female : male;
    const correctGender = gender === 1 ? 'Female' : 'Male';

    return (
        <div className={styles.leftCol}>
            <img src={getProfileURL(profile_path)
                ? getProfileURL(profile_path)
                : defaultPicture} alt='actor' />
            <p className={styles.socials}>
                <span className={styles.socialsItem}>
                    {actorExternalID.instagram_id && <ActorSocial children={<Instagram fill='black' height='30px' width='30px' />} socialLink={`https://www.instagram.com/${actorExternalID.instagram_id}/`} />}
                </span>
                <span className={styles.socialsItem}>
                    {actorExternalID.facebook_id && <ActorSocial children={<Facebook fill='black' height='30px' width='30px' />} socialLink={`https://www.facebook.com/${actorExternalID.facebook_id}`} />}
                </span>
                <span className={styles.socialsItem}>
                    {actorExternalID.twitter_id && <ActorSocial children={<Twitter fill='black' height='30px' width='30px' />} socialLink={`https://twitter.com/${actorExternalID.twitter_id}`} />}
                </span>
            </p>
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
    actorExternalID: ActorExternalIDsItem
}

export default ActorLeftCol;