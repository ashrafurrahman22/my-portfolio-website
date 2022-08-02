import React from 'react';
import present from '../../../assets/Introit/Introit-design.png';
import past from '../../../assets/Introit/About.png';
import future from '../../../assets/Introit/Portfolio-design.png';

const Wild = () => {
    return (
        <div style={{fontFamily:"Aleo"}} className="min-h-screen mt-8">
            <div class="carousel rounded-xl w-full">
  <div id="slide1" class="carousel-item relative w-full">
    <img src={present} />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" class="btn btn-circle">❮</a> 
      <a href="#slide2" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" class="carousel-item relative w-full">
    <img src={past} />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" class="btn btn-circle">❮</a> 
      <a href="#slide3" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" class="carousel-item relative w-full">
    <img src={future} />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" class="btn btn-circle">❮</a> 
      <a href="#slide4" class="btn btn-circle">❯</a>
    </div>
  </div>
</div>

        <div className='min-h-screen'>
          <div className='my-5 bg-base-200 rounded-xl p-5'>
          <div className='lg:flex justify-center gap-20'>
               <div>

             <h2 className="mt-5 mb-3 text-3xl font-semibold">Features</h2>
               <ol className='list-disc ml-5 text-xl'>
                <li>Best UI / UX Design</li>
                <li>Responsive NavBar</li>
                <li>Portfolio Design</li>
                <li>Customer Review</li>
                <li>Service, Contact & About Page</li>
            </ol>
            
               </div>
               <div>
               <h2 className="mt-5 mb-3 text-3xl font-semibold">Technology</h2>
            <ol className='list-disc ml-5 text-xl'>
                <li>Tailwind CSS (DaisyUI)</li>
                <li>Font-Awesome</li>
                <li>Responsive-Design</li>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>React-Router</li>
                </ol>
               </div>

               <div className='flex flex-col items-center justify-center gap-10 py-5'>
               <a href="https://introit.netlify.app/" target='blank' className="w-full">
              <button class="btn font-medium w-full btn-primary">Live Link</button>
              </a>
              <a href="https://github.com/ashrafurrahman22/introit-website" target='blank' className="w-full">
              <button class="btn w-full btn-primary font-medium">client-side-repo-Link</button>
              </a>
               </div>
           </div>
          </div>
        </div>

        </div>
    );
};

export default Wild;