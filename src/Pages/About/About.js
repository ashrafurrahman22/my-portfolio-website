import React from 'react';
import pic from '../../assets/OPU PIC.jpg';
import address from '../../assets/address.jpg';
import mobile from '../../assets/mobile.png';
import email from '../../assets/email.png';
import github from '../../assets/github.jpg';
import linkedin from '../../assets/linkedin.png';
import education from '../../assets/education.png';
import facebook from '../../assets/Facebook-logo.png';

const About = () => {
    return (
        <div className='min-h-screen'>
            <div>
            <div className="lg:hero bg-base-200 rounded-lg">
        <div className="lg:hero-content p-12 gap-x-20 flex-col lg:flex-row-reverse">
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

                 <div className=' bg-base-200  border-2 rounded-xl p-10'>
                     <p className='text-center text-2xl text-secondary font-semibold uppercase'>info</p>
                    <div>
                     <p className="text-xl ml-2 text-secondary font-semibold">Education:</p>
                  <div className="lg:flex items-center border rounded-xl mb-3 gap-2">
                  <img className='w-10' src={education} alt="" />
                  <p>B.B.A. (Management) under National University</p>
                  </div>
                  </div>
 
                  <div>
                  <p className="text-xl ml-2 text-secondary font-semibold">Address:</p>
                  <div className="lg:flex  items-center mb-3 gap-2 border rounded-xl">
                  <img className='w-8' src={address} alt="" />
                  <p>Chittagong, Bangladesh</p>
                  </div>
                  </div>
 
                  <div>
                  <p className="text-xl ml-1 text-secondary font-semibold">Email:</p>
                  <div className="lg:flex border rounded-xl items-center gap-2 mb-3">
                  <img className='w-8' src={email} alt="" />
                  <p className='break-words'>ashrafurrahman22@gmail.com</p>
                  </div>
                  </div>
 
                  <div>
                  <p className="text-xl ml-1 text-secondary font-semibold">Phone:</p>
                  <div className="lg:flex border rounded-xl items-center mb-3 gap-2">
                  <img className='w-7' src={mobile} alt="" />
                  <p>+8801721778884</p>
                  </div>
                  </div>

                  <div className="flex justify-center mt-7">
                        <div className='mr-7'>
                        <a target='blank' href="https://github.com/ashrafurrahman22">
                 <img className='w-10' src={github} alt="" />
                 </a>
                        </div>

                        <div className='mr-3.5'>
                 <a target='blank' href="https://www.linkedin.com/in/ashrafur-rahman-503694218/">
                 <img className='w-10 rounded-xl' src={linkedin} alt="" />
                 </a>
                 </div>
                        <div>
                 <a target='blank' href="https://www.facebook.com/profile.php?id=100008326211230">
                 <img className='w-16 rounded-xl' src={facebook} alt="" />
                 </a>
                 </div>

                 </div>

                 

                  </div>

                 

                 <div>
                
                 

                 </div>
            </div>
        </div>
            
        
    </div>
        </div>
        </div>
    );
};

export default About;