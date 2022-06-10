import React from 'react';
import pic from '../../assets/OPU PIC.jpg';
import address from '../../assets/address.jpg';
import mobile from '../../assets/mobile.png';
import email from '../../assets/email.png';
import github from '../../assets/github.jpg';
import linkedin from '../../assets/linkedin.png';
import education from '../../assets/education.png';

const About = () => {
    return (
        <div className='min-h-screen'>
            <div>
            <div className="hero bg-base-200 rounded-lg">
        <div className="hero-content p-12 gap-x-20 flex-col lg:flex-row-reverse">
            <img src={pic} className="max-w-sm rounded-lg shadow-2xl" />
            <div>
                <h1 className="text-5xl font-bold">Ashrafur Rahman</h1>
                <h3 className="py-6 text-3xl font-semibold">
                     Jr. Front-End Web Developer
                 </h3>
                 <p className='text-justify mb-5'>Hard-working web developer with a flair for creating elegant solutions in the least
amount of time. With a proven ability to adapt to both self-starting and collaborative
environments while staying focused on achieving high-quality results under strict
deadlines. Eager to obtain a challenging position at a prestigious company that will
expand my learning and build upon my developer skills.</p>

                 <div className="flex items-center mb-3 gap-2">
                 <img className='w-10' src={education} alt="" />
                 <p>B.B.A. (Management) under National University</p>
                 </div>

                 <div className="flex items-center mb-3 gap-2">
                 <img className='w-10' src={address} alt="" />
                 <p>Chittagong, Bangladesh</p>
                 </div>

                 <div className="flex items-center gap-2 mb-3">
                 <img className='w-10' src={email} alt="" />
                 <p>ashrafurrahman22@gmail.com</p>
                 </div>

                 <div className="flex items-center mb-3 gap-2">
                 <img className='w-10' src={mobile} alt="" />
                 <p>+8801721778884</p>
                 </div>

                 <div className="flex items-center mb-3 gap-2">
                 <img className='w-10' src={github} alt="" />
                 <a target='blank' href="https://github.com/ashrafurrahman22">
                     <p className='text-blue-600 text-xl'>github</p>
                 </a>
                 </div>

                 <div className="flex items-center mb-3 gap-2">
                 <img className='w-10 rounded-xl' src={linkedin} alt="" />
                 <a target='blank' href="https://www.linkedin.com/in/ashrafur-rahman-503694218/">
                 <p className='text-blue-600 text-xl'>Linkedin</p>
                 </a>
                 </div>
            </div>
        </div>
            
        
    </div>
        </div>
        </div>
    );
};

export default About;