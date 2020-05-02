import React, { FunctionComponent } from 'react';
import format from 'date-fns/format';

import styles from './launch-item.module.scss';

type Props = {
    launch: any
}


const LaunchItem:FunctionComponent<Props> = ({launch }) => {
    const formattedDate = format(new Date(launch['launch_date_utc']), 'do MMM yyyy');

    return (
        <div className={styles.item}>
            <div className={styles['item-number']}>#{launch['flight_number']}</div>
            <div className={styles['item-name']}>{launch['mission_name']}</div>
            <div>
                <div className={styles['item-date']}>{formattedDate}</div>
                <div className={styles['item-info']}>
                    {launch.rocket['rocket_name']}
                </div>
            </div>

        </div>
    );
};

LaunchItem.displayName = 'LaunchItem';

export default LaunchItem;
