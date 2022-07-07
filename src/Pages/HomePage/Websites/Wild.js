import React from 'react';
import present from '../../../assets/wild/zebras.png';
import past from '../../../assets/wild/hello.png';
import future from '../../../assets/wild/Screenshot (81).png';

const Wild = () => {
    return (
        <div className="min-h-screen">
            <div class="carousel w-full">
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
                <li>Wild-life-Photos with Details</li>
                <li>Wild Photographer's different types of Services</li>
                <li>Service Booking with form</li>
                <li>About Section</li>
                <li>Firebase Authentication</li>
            </ol>
            
               </div>
               <div>
               <h2 className="mt-5 mb-3 text-3xl font-semibold">Technology</h2>
            <ol className='list-disc ml-5 text-xl'>
                <li>JSX</li>
                <li>React</li>
                <li>React-Router-Dom</li>
                <li>React-BootStrap</li>
                <li>Firebase</li>
                </ol>
               </div>

               <div className='flex flex-col gap-10 py-5'>
               <a href="https://wild-movements.web.app/" target='blank' className="w-full">
              <button class="btn w-full btn-primary">Live Link</button>
              </a>
              <a href="https://github.com/ashrafurrahman22/wild-movements-website" target='blank' className="w-full">
              <button class="btn w-full btn-primary">client-side-repo-Link</button>
              </a>
               </div>
           </div>
          </div>
        </div>

        </div>
    );
};

export default Wild;