import React from 'react';
import first from '../../../assets/techland/navbar.png';
import second from '../../../assets/techland/products.png';
import third from '../../../assets/techland/Dashboard.png';
import fourth from '../../../assets/techland/login.png';
import fifth from '../../../assets/techland/footer.png';


const Techland = () => {
    return (
        <div className="min-h-screen mt-8">
            <div class="carousel w-full rounded-xl">

  <div id="slide1" class="carousel-item relative w-full">
    <img src={first} />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" class="btn btn-circle">❮</a> 
      <a href="#slide2" class="btn btn-circle">❯</a>
    </div>
  </div> 

  <div id="slide2" class="carousel-item relative w-full">
    <img src={second} />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" class="btn btn-circle">❮</a> 
      <a href="#slide3" class="btn btn-circle">❯</a>
    </div>
  </div> 

  <div id="slide3" class="carousel-item relative w-full">
    <img src={third} />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" class="btn btn-circle">❮</a> 
      <a href="#slide4" class="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" class="carousel-item relative w-full">
    <img src={fourth} />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" class="btn btn-circle">❮</a> 
      <a href="#slide4" class="btn btn-circle">❯</a>
    </div>
  </div>


</div>

        <div style={{fontFamily:"Aleo"}} className='min-h-screen'>
          <div className='my-5 bg-base-200 rounded-xl p-5'>
          <div className='lg:flex justify-center gap-20'>

               <div>

             <h2 className="mt-5 mb-3 text-3xl font-semibold">Features</h2>
               <ol className='list-disc ml-5 text-xl'>
                <li>Product purchase or Cancel System</li>
                <li>Updated Reviews</li>
                <li>All Products</li>
                <li>Dashboard</li>
                <li>Login Authentication with firebase</li>
            </ol>
            
               </div>
               <div>
               <h2 className="mt-5 mb-3 text-3xl font-semibold">Technology</h2>
            <ol className='list-disc ml-5 text-xl'>
                <li>Tailwind Css (daisyUI)</li>
                <li>React.js</li>
                <li>Node.js Express.js</li>
                <li>MongoDB</li>
                <li>Firebase</li>
                </ol>
               </div>

               <div className='flex flex-col gap-10 py-5'>
               <a href="https://techlandbd-f6a97.firebaseapp.com/" target='blank' className="w-full">
              <button class="btn w-full font-medium btn-primary">Live Link</button>
              </a>
              <a href="https://github.com/ashrafurrahman22/techland-website" target='blank' className="w-full">
              <button class="btn w-full btn-primary font-medium">client-side-repo-Link</button>
              </a>
              <a href="https://github.com/ashrafurrahman22/techland-website-server" target='blank' className="w-full">
              <button  class="btn w-full btn-primary font-medium">Server-side-repo-Link</button>
              </a>
               </div>
           </div>
          </div>
        </div>

        </div>
    );
};

export default Techland;