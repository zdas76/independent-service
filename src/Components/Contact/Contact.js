import React from 'react';
import env from '../../image/env.png';

const Contact = () => {
    return (
        <div className='container py-5'>
            <h1 className='text-uppercase text-center'>Have Some Question?</h1>
            <div className="row my-5">
                <div className="col-md-6">
                    <img className='w-100' src={env} alt="" />
                </div>
                <div className="col-md-6">
                    <form className="row g-3">
                        <div className="col-md-12">
                            <label for="name" className="form-label">Your Name</label>
                            <input type="password" className="form-control" id="inputPassword4" />
                        </div>
                        <div className="col-md-12">
                            <label for="inputEmail4" className="form-label">Email</label>
                            <input type="email" className="form-control" id="inputEmail4" />
                        </div>
                        
                        <div className="col-12">
                            <label for="inputAddress" className="form-label">Your Message</label> <br />
                            <textarea className="form-control" name="" id="" cols="60" rows="6"></textarea>
                        </div>
                       
                        
                        
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Send</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Contact;