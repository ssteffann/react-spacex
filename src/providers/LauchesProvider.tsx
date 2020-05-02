import React, { ReactNode } from 'react';
import apiInstance from "../config/api";
import {LaunchesContext} from '../context/LaunchesContext';

type State = {
    isLoading: boolean,
    launches: any,
    getLaunches: (queryParams?: any) => any
    sortLaunches: (asc: boolean, sortKey?: string) => any
}

type Props = {
    children: ReactNode
}

class LaunchesProvider extends React.Component<Props, State> {
    static displayName: string = 'LaunchesProvider';
    state: State;

    constructor(props: Props) {
        super(props);

        this.state = {
            isLoading: false,
            launches: [],
            getLaunches: this.getLaunches,
            sortLaunches: this.sortLaunches
        };
    }

    sortLaunches = (asc: boolean, sortKey?: string) => {
        const key = sortKey || 'launch_date_unix';
        const { launches } = this.state;

        const sorted = launches.sort((a:any, b:any) => {
            if(a[key] < b[key]) {
                return asc ? -1 : 1;
            }

            if(a[key] > b[key]) {
                return asc ? 1 : -1;
            }

            return 0;
        })

        this.setState({ launches: sorted });
    }

    getLaunches = async (queryParams?: any) => {
        try {
            this.setState({isLoading: true})
            const response = await apiInstance.get('launches', {params: queryParams});
            console.log('launches ------>', response);

           this.setState({ launches: response.data })

        } catch (e) {
            console.error(e)

        } finally {
            this.setState({isLoading: false});
        }


    };

    render() {
        const {children} = this.props;

        return (
            <LaunchesContext.Provider value={this.state}>
                {children}
            </LaunchesContext.Provider>
        );
    }
}

export default LaunchesProvider;
