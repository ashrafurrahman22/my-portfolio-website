import React from 'react';
import Contact from '../Contact/Contact';
import MyProjects from '../MyProjects';
import Footer from '../Shared/Footer';
import Resume from './Resume';
import Skills from './Skills';

const HomePage = () => {
    return (
        <div style={{backgroundColor: 'gainsboro mb-4'}}>
            <Resume></Resume>
            {/* <Skills></Skills> */}
            <MyProjects></MyProjects>

            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;