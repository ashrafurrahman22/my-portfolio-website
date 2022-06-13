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
            <div className='card w-64 bg-base-100 shadow-xl mx-auto mb-5'>
                <div className='card-body bg-primary'>
                    <h2 className="text-center text-4xl font-bold text-white tracking-widest">Skills</h2> <hr />
                </div>

            </div>
                
            <Skills></Skills>

                <div className='card w-64 bg-base-100 shadow-xl mx-auto mb-5'>
                    <div className='card-body bg-primary'>
                        <h2 className="text-center text-4xl font-bold text-white tracking-widest">Projects</h2> <hr />
                    </div>

                </div>

            <MyProjects></MyProjects>

            <div className='card w-80 bg-base-100 shadow-xl mx-auto lg:mt-0 mt-4 mb-5'>
                <div className='card-body bg-primary'>
                    <h2 className="customSkill text-center text-4xl font-bold text-white tracking-widest ">Contact</h2> <hr />
                </div>

            </div>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;