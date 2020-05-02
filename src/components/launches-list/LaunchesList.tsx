import React, {useEffect} from 'react';
import {useLaunchesContext} from "../../context/LaunchesContext";
import LaunchItem from "./components/LaunchItem";
import Dropdown from "../dropdown/Dropdown";
import {SORT_FILTERS} from "./constants";
import { getYearsOptions } from "./helpers";
import styles from './launches-list.module.scss';

import sortIcon from '../../assets/icon/sort@2x.png';

const LaunchesList = () => {
    const {isLoading, launches, getLaunches, sortLaunches} = useLaunchesContext();

    useEffect(() => {
        getLaunches();
    }, []);

    return (
        <div>
            <div className={styles['list-actions']}>
                <Dropdown
                    placeholder={'Year'}
                    onSelect={(option) => getLaunches({ launch_year: option.value })}
                    options={getYearsOptions(2006)} label={'Filter by'}  />

                <Dropdown
                    onSelect={(option) => sortLaunches(option.value === 'asc')}
                    options={SORT_FILTERS} iconSrc={sortIcon} label={'Sort'} />
            </div>

            {isLoading
                ? <div className={styles['list-loading']}>Loading ...</div>
                : <div className={styles.list} >
                    {launches.map((launch: any, index: number) => (<LaunchItem key={index} launch={launch}/>))}
                </div>
            }
        </div>
    );
};

LaunchesList.displayName = 'LaunchesList';

export default LaunchesList;
