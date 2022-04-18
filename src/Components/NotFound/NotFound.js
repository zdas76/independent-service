import React from 'react';
import img404 from '../../image/404.png'

const NotFound = () => {
    return (
        <div className='d-flex align-center'>
            <img className='mx-auto' src={img404} alt="" />
        </div>
    );
};

export default NotFound;
