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
            <div className='bg-base-200 mb-24 p-10 rounded-2xl grid lg:grid-cols-3 sm:grid-cols-1 gap-6'>

            {/* cards */}
                <div class="card bg-base-100  shadow-xl">

                 <div class="card-body">
                <h2 class="text-2xl font-bold text-slate-500 text-center">Front-End</h2>

               {/* main div */}
              

               <div className="lg:flex flex-col justify-center items-center">

               <div className="flex justify-center items-center">
                <img src={kongkal} className='lg:w-16 w-6' alt="" />
                <progress class="progress progress-error w-56" value="85" max="100"></progress>
                <p className='ml-2 font-semibold'>85%</p>
                </div>

                <div className="flex justify-center items-center">
                <img src={styles} className='lg:w-12 w-5 ml-1' alt="" />
                <progress class="progress progress-primary w-56" value="90" max="100"></progress>
                <p className='ml-2 font-semibold'>90%</p>
                </div>
                
                <div className="flex justify-center items-center">
                <img src={bootstrap} className='lg:w-14 w-7 ml-1' alt="" />
                <progress class="progress progress-primary w-56" value="95" max="100"></progress>
                <p className='ml-2 font-semibold'>95%</p>
                </div>

                <div className="flex justify-center items-center">
                <img src={tailwind} className='lg:w-12 w-6 ml-1' alt="" />
                <progress class="progress progress-info w-56" value="85" max="100"></progress>
                <p className='ml-2 font-semibold'>85%</p>
                </div>
                
                <div className="flex justify-center items-center">
                <img src={javascript} className='lg:w-10 w-6 rounded lg:ml-3 ml-2 mr-1' alt="" />
                <progress class="progress progress-warning w-56" value="75" max="100"></progress>
                <p className='ml-2 font-semibold'>75%</p>
                </div>

                <div className="flex justify-center my-2 items-center">
                <img src={react} className='lg:w-12 w-6 rounded-xl ml-1 mr-1' alt="" />
                <progress class="progress progress-info w-56" value="80" max="100"></progress>
                <p className='ml-2 font-semibold'>80%</p>
                </div>

               </div>



                <div class="card-actions justify-end">
                </div>
            </div>
            </div>
            
            {/* cards */}
                <div class="card bg-base-100 shadow-xl">

                 <div class="card-body">
                <h2 class="text-2xl font-bold text-slate-500 text-center">Back-End</h2>

               {/* main div */}
              

               <div className="lg:flex flex-col justify-center items-center">
               <div className="flex justify-center items-center">
                <img src={node} className='lg:w-10 w-6 mr-1' alt="" />
                <progress class="progress progress-error ms-2 w-56" value="35" max="100"></progress>
                <p className='ml-2 font-semibold'>35%</p>
                </div>

                <div className="flex justify-center my-2 items-center">
                <img src={express} className='lg:w-12 w-6 mr-1' alt="" />
                <progress class="progress w-56" value="40" max="100"></progress>
                <p className='ml-2 font-semibold'>40%</p>
                </div>
                
                <div className="flex justify-center my-2 items-center">
                <img src={mongodb} className='lg:w-12 w-6 lg:mr-0 mr-1' alt="" />
                <progress class="progress progress-error w-56" value="55" max="100"></progress>
                <p className='ml-2 font-semibold'>55%</p>
                </div>

               </div>



                <div class="card-actions justify-end">
                </div>
            </div>
            </div>
            
            {/* cards */}
                <div class="card bg-base-100 shadow-xl">

                 <div class="card-body">
                <h2 class="text-2xl font-bold text-slate-500 text-center">Tools</h2>

               {/* main div */}
              

               <div className="lg:flex flex-col justify-center items-center">
               <div className="flex justify-center items-center">
                <img src={firebase} className='lg:w-9 w-5 mr-1' alt="" />
                <progress class="progress progress-warning w-56" value="80" max="100"></progress>
                <p className='ml-2 font-semibold'>80%</p>
                </div>

                <div className="flex my-2 justify-center items-center">
                <img src={github} className='lg:w-10 w-5 mr-1 mt-1' alt="" />
                <progress class="progress w-56" value="90" max="100"></progress>
                <p className='ml-2 font-semibold'>90%</p>
                </div>
                
                <div className="flex my-2  justify-center mt-1 items-center">
                <img src={heroku} className='lg:w-14 w-6 mr-2 mt-1' alt="" />
                <progress class="progress progress-primary w-56" value="75" max="100"></progress>
                <p className='ml-2 font-semibold'>75%</p>
                </div>

                <div className="flex justify-center mt-1 items-center">
                <img src={git} className='lg:w-12 w-6 mr-1' alt="" />
                <progress class="progress progress-info w-56" value="80" max="100"></progress>
                <p className='ml-2 font-semibold'>80%</p>
                </div>
                

                <div className="flex justify-center my-2 items-center">
                <img src={vscode} className='lg:w-10 w-6 mr-1' alt="" />
                <progress class="progress progress-info w-56" value="90" max="100"></progress>
                <p className='ml-2 font-semibold'>90%</p>
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