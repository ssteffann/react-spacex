import React, {FunctionComponent} from 'react';
import styles from './layout.module.scss';

type Props = {
    imgSrc: string
}

const Layout: FunctionComponent<Props> = ({imgSrc, children}) => {
    return (
        <div className={styles.layout}>

            <div className={styles['layout-img-container']} style={{ backgroundImage: `url(${imgSrc})` }} />

            <div className={styles['layout-content']}>{children}</div>

        </div>
    );
};

Layout.displayName = 'Layout';

export default Layout;
