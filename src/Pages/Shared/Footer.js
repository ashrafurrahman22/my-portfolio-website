import React from 'react';

const Footer = () => {

        const today = new Date();
        const year = today.getFullYear(); 
    return (
        <div style={{backgroundColor:'gainsboro'}} className='bg-base-200 rounded-lg p-2 mt-3'>
            <p className='text-center mb-5'>Copyright © {year}. All Rights Reserved by Developer Ashrafur Rahman.</p>
        </div>
    );
};

export default Footer;