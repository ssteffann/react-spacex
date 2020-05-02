import React from 'react';
import Header from "./components/header/Header";

import logo from './assets/spacex-logo.png';
import sideImage from './assets/img/launch-home@2x.png'
import Layout from "./components/layout/Layout";
import LaunchesProvider from "./providers/LauchesProvider";
import LaunchesList from "./components/launches-list/LaunchesList";

function App() {
    return (
        <div className="App">
            <LaunchesProvider>
                <Header logo={logo} onReload={() => {
                }} title={'Launches'}/>

                <Layout imgSrc={sideImage}>
                    <LaunchesList />
                </Layout>
            </LaunchesProvider>
        </div>
    );
}

export default App;
