import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import favicon from '../../assets/favicon.ico';

const Navbar = () => {

      const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/projects'>Projects</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/about'>About Me</Link></li>
        
      </>

    return (
    <div style={{fontFamily:"Raleway", letterSpacing:"2px"}} className="navbar bg-info-100">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabindex="0" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          {menuItems}
        </ul>
      </div>
      <Link to='/' className="cursor-pointer btn btn-ghost normal-case text-xl">
        <div style={{fontFamily:"aleos", letterSpacing:"1px"}} className='flex items-center font-medium'>
        <img className='w-14' src={favicon} alt="" />
        <h3 className='font-semiBold'>Ashrafur Rahman</h3>
        </div>
        </Link>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal p-0">
        {menuItems}
      </ul>
    </div>
  </div>
    );
};

export default Navbar;