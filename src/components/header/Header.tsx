import React, {FunctionComponent} from 'react';
import Button from "../button/Button";
import styles from './header.module.scss';
import {useLaunchesContext} from "../../context/LaunchesContext";
import refreshIcon from '../../assets/icon/refresh@2x.png'

type Props = {
    logo: string,
    title?: string,
    onReload: () => void
}

const Header: FunctionComponent<Props> = ({logo, onReload, title}) => {
    const {getLaunches} = useLaunchesContext();

    return (
        <header className={styles.header}>
            <div>
                <img className={styles['header-logo']} src={logo}/>
                {title && <span className={styles['header-title']}>{title}</span>}
            </div>


            <div>
                <Button
                    onClick={() => getLaunches()}
                    className={styles['header-button']}
                    iconSrc={refreshIcon}>Reload Data</Button>
            </div>
        </header>
    );
};

Header.displayName = 'Header';

export default Header;
