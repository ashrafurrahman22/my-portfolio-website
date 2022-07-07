import React from 'react';
import firstPic from '../../../assets/haramain/papaya.png';
import secondPic from '../../../assets/haramain/heading.png';
import thirdPic from '../../../assets/haramain/singleItem.png';


const HaramainPerfumes = () => {
    return (
        <div className="min-h-screen">
        <div class="carousel w-full">
<div id="slide1" class="carousel-item relative w-full">
<img src={firstPic} />
<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
  <a href="#slide4" class="btn btn-circle">❮</a> 
  <a href="#slide2" class="btn btn-circle">❯</a>
</div>
</div> 
<div id="slide2" class="carousel-item relative w-full">
<img src={secondPic} />
<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
  <a href="#slide1" class="btn btn-circle">❮</a> 
  <a href="#slide3" class="btn btn-circle">❯</a>
</div>
</div> 
<div id="slide3" class="carousel-item relative w-full">
<img src={thirdPic} />
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
            <li>Storing perfumeries</li>
            <li>Products Stocks and Delivery Update System</li>
            <li>New item add system</li>
            <li>Individual added item list</li>
            <li>Login Authentication with firebase</li>
        </ol>
        
           </div>
           <div>
           <h2 className="mt-5 mb-3 text-3xl font-semibold">Technology</h2>
        <ol className='list-disc ml-5 text-xl'>
            <li>Bootstrap</li>
            <li>React</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>Firebase</li>
            </ol>
           </div>

           <div className='flex flex-col gap-10 py-5'>
           <a href="https://al-haramain-perfumes-5bad9.web.app/" target='blank' className="w-full">
          <button class="btn w-full btn-primary">Live Link</button>
          </a>
          <a href="https://github.com/ashrafurrahman22/al-haramain-website" target='blank' className="w-full">
          <button class="btn w-full btn-primary">client-side-repo-Link</button>
          </a>
          <a href="https://github.com/ashrafurrahman22/al-haramain-website-server" target='blank' className="w-full">
          <button class="btn w-full btn-primary">Server-side-repo-Link</button>
          </a>
           </div>
       </div>
      </div>
    </div>

    </div>
    );
};

export default HaramainPerfumes;