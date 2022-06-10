import React from 'react';

const Contact = () => {
    return (
        <div id='contact'>
          <div className="hero my-5 bg-base-200 p-8 rounded-lg">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:w-2/6 lg:mx-16 lg:text-left">
      <h1 className="text-5xl font-bold">Let's Talk</h1>
      <p className="py-6 text-justify">My door is always open for a good cup of coffee.</p>
    </div>
    <div className="card flex-shrink-0 lg:w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Your Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Subject</span>
          </label>
          <input type="text" placeholder="Subject" className="input input-bordered" />
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea name="description" className='border' placeholder='Write Here...'  id="" cols="20" rows="5"></textarea>
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Contact;