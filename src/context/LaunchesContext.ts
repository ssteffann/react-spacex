import React, { useContext } from 'react';

const initState = {
    isLoading: false,
    launches: [],
    getLaunches: (queryParams?: any) => {},
    sortLaunches: (asc: boolean, sortKey?: string) => {}
};

export const LaunchesContext = React.createContext(initState);

export const useLaunchesContext = () => {
    return useContext(LaunchesContext);
};
