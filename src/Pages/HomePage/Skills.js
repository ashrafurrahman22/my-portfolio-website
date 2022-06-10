import React from 'react';
import basic from '../../assets/html5.png';
import style from '../../assets/styles-removebg-preview.png';
import firebase from '../../'

const Skills = () => {
    return (
        <div>
           <h2 className="my-6 text-3xl font-bold text-center">Skills</h2>
           <div className='flex justify-center'>
               <img className='w-28' src={basic} alt="" />
               <img className='w-28 bg-info rounded-4xl' src={style} alt="" />
               
           </div>
           
        </div>
    );
};

export default Skills;