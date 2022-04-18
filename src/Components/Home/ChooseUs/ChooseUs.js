import React from 'react';
import lawyer from '../../../image/Lawyer.jpg'

const ChooseUs = () => {
    return (
        <div className=' row mx-auto my-5'>
            <div className='col-md-6 px-3 py-2'>
                <img className='w-100' src={lawyer} alt="" />
            </div>
            <div className='mx-auto ps-5 col-md-6'>
                <h1 className='mb-5 fw-bold border-bottom pb-2'>Why You Choose Me!</h1>
                <ul className='d-flex flex-column h3 '>
                    <li className='my-3'>Focus on your strengths and skills</li>
                    <li className='my-3'>Describe a personal experience that inspired you</li>
                    <li className='my-3'>Give examples of your past success and how it motivates you</li>
                    <li className='my-3'>Relate your values and philosophy to the job</li>
                    <li className='my-3'>Discuss how you plan to contribute to the firm</li>
                    <li className='my-3'>Give examples of your past success and how it motivates you</li>
                </ul>
            </div>
        </div>
    );
};

export default ChooseUs;