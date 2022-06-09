import React from 'react';
import Contact from '../Contact/Contact';
import MyProjects from '../MyProjects';
import Footer from '../Shared/Footer';
import Resume from './Resume';

const HomePage = () => {
    return (
        <div style={{backgroundColor: 'gainsboro mb-4'}}>
            <Resume></Resume>
            <MyProjects></MyProjects>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;