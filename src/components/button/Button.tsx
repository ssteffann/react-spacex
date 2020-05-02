import React, {MouseEvent, FunctionComponent} from 'react';
import styles from './button.module.scss';

type Props = {
    onClick?: (event: MouseEvent) => any,
    className?: string,
    type?: string,
    iconSrc?: string
}

const Button: FunctionComponent<Props> =
    ({children, onClick, className, type = 'primary', iconSrc}) => {

    return (
        <button className={`${styles.button} ${styles['button-' + type]} ${className}`} onClick={onClick}>
            {children} {iconSrc && <img className={styles['button-icon']}  src={iconSrc}/>}
        </button>
    );
};

Button.displayName = 'Button';

export default Button;
