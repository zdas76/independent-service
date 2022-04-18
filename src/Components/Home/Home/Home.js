import React from 'react';
import ChooseUs from '../ChooseUs/ChooseUs';
import Header from '../Header/Header';

import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <ChooseUs></ChooseUs>
        </div>
    );
};

export default Home;