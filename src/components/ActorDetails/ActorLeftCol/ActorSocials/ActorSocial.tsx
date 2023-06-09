import { FC, ReactNode } from 'react';

import styles from './ActorSocial.module.scss';

export const ActorSocial: FC<Props> = ({ children, socialLink }) => {
    return (
        <a href={socialLink} target='_blank' rel='noopener noreferrer' className={styles.actorSocial}>
            {children}
        </a>
    );
};

type Props = {
    children: ReactNode;
    socialLink: string
}