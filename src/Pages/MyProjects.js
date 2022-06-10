import React from "react";


import design2 from '../assets/design2.jpg';
import design1 from '../assets/design1.jpg';
import design3 from '../assets/design3.jpg';
import { Link } from "react-router-dom";



const MyProjects = () => {
  return (
    <div id="projects" className="mb-5">
        <h2 className="my-6 text-3xl font-bold text-center">My Projcets</h2>
        <div className="grid mb-5 lg:grid-cols-3 sm:grid-cols-1 gap-7">
        
        <div class="card bg-base-100 shadow-xl">
          <figure>
            <img
              src={design2}
              alt="Shoes"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">TechLand Manufacturer</h2>
            <p>A Full Stack Manufacturer Web Application</p>
            <div class="card-actions justify-end">
            <Link className="w-full" to='/techland'><button class="btn w-full btn-primary">Details</button></Link>

            </div>
          </div>
        </div>
  
        <div class="card bg-base-100 shadow-xl">
          <figure>
            <img
              src={design3}
              alt="Shoes"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Al Haramain Perfumes</h2>
            <p>A Full Stack Inventory Management Web Application</p>
            <div class="card-actions justify-end">
            <Link className="w-full" to='/al-haramain-perfumes'><button class="btn w-full btn-primary">Details</button></Link>
            {/* <a className="w-full" target='blank' href="https://al-haramain-perfumes-5bad9.web.app/">
              <button class="btn w-full btn-primary">Live Link</button>
              </a>
              <a className="w-full" target='blank' href="https://github.com/ashrafurrahman22/al-haramain-website">
              <button class="btn btn-primary w-full">Client-Side-Repo-Link</button>
              </a>
              <a className="w-full" target='blank' href="https://www.google.com/url?sa=D&q=https://github.com/ashrafurrahman22/al-haramain-website-server&ust=1654877640000000&usg=AOvVaw3okwAEfkxLo38RCvkWRqEH&hl=en-GB">
              <button class="btn btn-primary w-full">Server-Side-Repo-Link</button>
              </a> */}
            </div>
          </div>
        </div>
  
        <div class="card bg-base-100 shadow-xl">
          <figure>
            <img
              src={design1}
              alt="Shoes"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Wild Movements</h2>
            <p>A Front-End wild photographers Website.</p>
            <div class="card-actions justify-end">
            <Link className="w-full" to='/wild-animals'><button class="btn w-full btn-primary">Details</button></Link>
              {/* <a className="w-full" target='blank' href="https://wild-movements.web.app/">
              <button class="btn w-full btn-primary">Live Link</button>
              </a>
              <a className="w-full" target='blank' href="https://github.com/ashrafurrahman22/wild-movements-website">

              <button class="btn w-full  btn-primary">Client-Side-Repo-Link</button>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
