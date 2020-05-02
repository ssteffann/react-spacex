import React, {FunctionComponent, useState, useRef, useEffect} from 'react';
import styles from './dropdwon.module.scss';
import Button from "../button/Button";
import selectIcon from '../../assets/icon/select@2x.png';

type Option = { label: string, value: any };

type Props = {
    iconSrc?: string,
    label: string,
    placeholder?: string,
    options: Array<Option>
    onSelect: (option: Option) => any
}

const Dropdown: FunctionComponent<Props> = ({iconSrc, label, options, placeholder, onSelect}) => {
    const dropdownRef = useRef(null);
    const [isVisibile, setVisibility] = useState(false);
    const [selected, setSelected] = useState({label: placeholder || '', value: ''});

    const handleClick = (event: any) => {
        // @ts-ignore
        if (dropdownRef.current.contains(event.target)) {
            setVisibility(true);
        } else {
            setVisibility(false);
        }
    }

    useEffect(() => {
        // add when mounted
        document.addEventListener("mousedown", handleClick);
        // return function to be called when unmounted
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, []);

    return (
        <div ref={dropdownRef} className={styles.dropdown}>
            <Button iconSrc={iconSrc || selectIcon}>
                {label} {selected.label}
            </Button>

            {isVisibile && (
                <div className={styles['dropdown-content']}>
                    {options.map((option: Option, index: number) => {
                        return (<div
                            key={index}
                            onClick={() => {
                                setSelected(option);
                                onSelect(option);
                                setVisibility(false);
                                }
                            }
                            className={`${styles['dropdown-item']} ${
                                selected.value === option.value ? styles['dropdown-active'] : ''
                            }`}>
                            {option.label}
                        </div>)
                    })}
                </div>
            )}
        </div>
    );
};

Dropdown.displayName = 'Dropdown';

export default Dropdown;
