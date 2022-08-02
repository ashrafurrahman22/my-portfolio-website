import React from 'react';
import kongkal from '../../assets/skills/kongkal.png';
import styles from '../../assets/skills/stylescss.png';
import bootstrap from '../../assets/skills/bootstrap.png';
import tailwind from '../../assets/skills/tailwinda.png';
import mongodb from '../../assets/skills/mongodb.bf8042403d8797a7ff1b.png';
import node from '../../assets/skills/node.e328955d6bbbf3ebc72b.png';
import express from '../../assets/skills/express-js.9b344d7469dbbdc76754.png';
import firebase from '../../assets/skills/firebase.a4156cb67d6d0676cffc.png';
import git from '../../assets/skills/git.png';
import github from '../../assets/skills/github.png';
import heroku from '../../assets/skills/Heroku_logo.svg.92a1a4ed0c8f0b8d15d7.png';
import react from '../../assets/skills/react.73dbb5bcec516da82694.png';
import javascript from '../../assets/skills/JavaScript-logo.266bd9fb2663dcc057b4.png';
import updateVersion from '../../assets/skills/es6.367dc010897668d01db9.png';
import vscode from '../../assets/skills/Visual_Studio_Code_1.35_icon.svg.png';

const Skills = () => {
    return (
        <div>
            <div className='bg-base-200 mb-24 lg:p-10 p-4 rounded-2xl grid lg:grid-cols-3 sm:grid-cols-1 gap-6'>

            {/* cards */}
                <div class="card bg-base-100  shadow-xl">

                 <div class="card-body">
                <h2 class="text-2xl py-3 font-bold text-slate-500 text-center">Front-End <hr /></h2>

               {/* main div */}
              

               <div className="lg:flex flex-col">

               <div className='mb-2'>
               <h2 style={{letterSpacing:"2px"}} class="text-md  font-semibold text-slate-500 text-left">Html & Html5</h2>
                <div className='flex justify-center items-center gap-3'>
                <progress class="progress progress-error w-56" value="85" max="100"></progress>
                <p className='ml-2 font-semibold'>85%</p>
                </div>
                </div>

                <div className='mb-2'>
                <h2 style={{letterSpacing:"2px"}} class="text-md  font-semibold text-slate-500 text-left">CSS & CSS3</h2>
                <div className='flex justify-center items-center gap-3'>
                <progress class="progress progress-primary w-56" value="85" max="100"></progress>
                <p className='ml-2 font-semibold'>85%</p>
                </div>
                </div>
                
                <div className='mb-2'>
                <h2 style={{letterSpacing:"2px"}} class="text-md  font-semibold text-slate-500 text-left">Bootstrap & Tailwind</h2>
                <div className='flex justify-center items-center gap-3'>
                <progress class="progress progress-primary w-56" value="85" max="100"></progress>
                <p className='ml-2 font-semibold'>85%</p>
                </div>
                </div>

                <div className='mb-2'>
                <h2 style={{letterSpacing:"2px"}} class="text-md  font-semibold text-slate-500 text-left">JavaScript & ES6</h2>
                <div className='flex justify-center items-center gap-3'>
                <progress class="progress progress-warning w-56" value="80" max="100"></progress>
                <p className='ml-2 font-semibold'>80%</p>
                </div>
                </div>
                
                <div className='mb-2'>
                <h2 style={{letterSpacing:"2px"}} class="text-md  font-semibold text-slate-500 text-left">React.Js</h2>
                <div className='flex justify-center items-center gap-3'>
                <progress class="progress progress-info w-56" value="85" max="100"></progress>
                <p className='ml-2 font-semibold'>85%</p>
                </div>
                </div>

               </div>



                <div class="card-actions justify-end">
                </div>
            </div>
            </div>
            
            {/* cards */}
                <div class="card bg-base-100 shadow-xl">

                 <div class="card-body">
                <h2 class="text-2xl py-3 font-bold text-slate-500 text-center">Back-End <hr /> </h2>

               {/* main div */}
              

               <div className="lg:flex flex-col justify-center items-center">

               <div className='mb-2'>
                <h2 style={{letterSpacing:"2px"}} class="text-md  font-semibold text-slate-500 text-left">Node.Js</h2>
                <div className='flex justify-center items-center gap-3'>
                <progress class="progress progress-error w-56" value="60" max="100"></progress>
                <p className='ml-2 font-semibold'>60%</p>
                </div>
                </div>
                

                <div className='mb-2'>
                <h2 style={{letterSpacing:"2px"}} class="text-md  font-semibold text-slate-500 text-left">Express.Js</h2>
                <div className='flex justify-center items-center gap-3'>
                <progress class="progress w-56" value="60" max="100"></progress>
                <p className='ml-2 font-semibold'>60%</p>
                </div>
                </div>
                
                <div className='mb-2'>
                <h2 style={{letterSpacing:"2px"}} class="text-md  font-semibold text-slate-500 text-left">MongoDB</h2>
                <div className='flex justify-center items-center gap-3'>
                <progress class="progress progress-error w-56" value="65" max="100"></progress>
                <p className='ml-2 font-semibold'>65%</p>
                </div>
                </div>

                <div className='mb-2'>
                <h2 style={{letterSpacing:"2px"}} class="text-md  font-semibold text-slate-500 text-left">Firebase</h2>
                <div className='flex justify-center items-center gap-3'>
                <progress class="progress progress-warning w-56" value="65" max="100"></progress>
                <p className='ml-2 font-semibold'>65%</p>
                </div>
                </div>

               </div>



                <div class="card-actions justify-end">
                </div>
            </div>
            </div>
            
            {/* cards */}
                <div class="card bg-base-100 shadow-xl">

                 <div class="card-body">
                <h2 class="text-2xl py-3 font-bold text-slate-500 text-center">Tools <hr /> </h2>

               {/* main div */}
              

               <div className="lg:flex flex-col justify-center items-center">


               <div className='mb-2'>
                <h2 style={{letterSpacing:"2px"}} class="text-md  font-semibold text-slate-500 text-left">Github & Gitlab</h2>
                <div className='flex justify-center items-center gap-3'>
                <progress class="progress w-56" value="85" max="100"></progress>
                <p className='ml-2 font-semibold'>85%</p>
                </div>
                </div>

                <div className='mb-2'>
                <h2 style={{letterSpacing:"2px"}} class="text-md  font-semibold text-slate-500 text-left">Heroku</h2>
                <div className='flex justify-center items-center gap-3'>
                <progress class="progress progress-secondary w-56" value="80" max="100"></progress>
                <p className='ml-2 font-semibold'>80%</p>
                </div>
                </div>
                
                <div className='mb-2'>
                <h2 style={{letterSpacing:"2px"}} class="text-md  font-semibold text-slate-500 text-left">Netlify</h2>
                <div className='flex justify-center items-center gap-3'>
                <progress class="progress progress-accent w-56" value="80" max="100"></progress>
                <p className='ml-2 font-semibold'>80%</p>
                </div>
                </div>

                <div className='mb-2'>
                <h2 style={{letterSpacing:"2px"}} class="text-md  font-semibold text-slate-500 text-left">Figma</h2>
                <div className='flex justify-center items-center gap-3'>
                <progress class="progress progress-accent w-56" value="80" max="100"></progress>
                <p className='ml-2 font-semibold'>80%</p>
                </div>
                </div>

                <div className='mb-2'>
                <h2 style={{letterSpacing:"2px"}} class="text-md  font-semibold text-slate-500 text-left">Vs Code</h2>
                <div className='flex justify-center items-center gap-3'>
                <progress class="progress progress-primary w-56" value="80" max="100"></progress>
                <p className='ml-2 font-semibold'>90%</p>
                </div>
                </div>

               </div>



                <div class="card-actions justify-end">
                </div>
            </div>
            </div>
            

            </div>
        </div>
    );
};

export default Skills;