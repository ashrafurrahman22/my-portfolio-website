import React from 'react';
import pic from '../../assets/OPU PIC.jpg';
import './Resume.css';


const Banner = () => {

    return (
        <div className="lg:hero lg:bg-base-200 w-full rounded-lg my-8">
        <div className="lg:hero-content my-8 gap-x-20 flex-col lg:flex-row-reverse">
            <img src={pic} className="max-w-sm rounded-lg shadow-2xl mx-auto" />
            <div>
                <h1 className="lg:text-5xl lg:text-left text-center text-3xl font-bold">Ashrafur Rahman</h1>
                <h3 id='typewriter'
                 className="py-6 lg:text-3xl text-center break-words text-sm font-semibold">
                     Junior Front-End Web Developer
                 </h3>

                <a target='blank' href="https://drive.google.com/file/d/1tATYVbDTIOs711nRf3PqWJ2YX3Sm0EO-/view?usp=sharing">
                <button  class="btn btn-active btn-secondary hover:-translate-y-1 hover:scale-110 hover:btn-secondary duration-500 ">Download Resume</button>
                </a>

            </div>
        </div>
    </div>
    );
};

export default Banner;