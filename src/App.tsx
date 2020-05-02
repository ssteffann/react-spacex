import React from 'react';
import Header from "./components/header/Header";

import logo from './assets/spacex-logo.png';
import sideImage from './assets/img/launch-home@2x.png'
import Layout from "./components/layout/Layout";


function App() {
  return (
    <div className="App">
      <Header logo={logo} onReload={() => {}} title={'Launches'} />

      <Layout imgSrc={sideImage}>Test Content</Layout>

    </div>
  );
}

export default App;
