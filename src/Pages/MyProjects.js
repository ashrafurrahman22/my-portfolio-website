import React from "react";


import design2 from '../assets/Techland-desing.png';
import design1 from '../assets/Introit-design.png';
import design3 from '../assets/perfumes-desing.png';
import { Link } from "react-router-dom";



const MyProjects = () => {
  return (
    <div style={{fontFamily:"Aleo"}} className="min-h-screen lg:p-8">
      <div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-7">


        <div class="card bg-base-100 shadow-xl hover:-translate-y-1 hover:scale-110 hover:card duration-700">
          <figure>
            <img
              src={design1}
              alt="Shoes"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Introit</h2>
            <p>A Front-End Web Development Services Web Application.</p>
            <div class="card-actions justify-end">
            <Link className="w-full" to='/introit'><button class="btn w-full btn-primary">Details</button></Link>
            </div>
          </div>
        </div>



        
        <div class="card bg-base-100 shadow-xl hover:-translate-y-1 hover:scale-110 hover:card duration-700">
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
  
        <div class="card bg-base-100 shadow-xl hover:-translate-y-1 hover:scale-110 hover:card duration-700">
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
            </div>
          </div>
        </div>
  
       

      </div>
    </div>
    </div>
  );
};

export default MyProjects;
