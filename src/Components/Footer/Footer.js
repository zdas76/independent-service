import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='bg-dark'>
            <h3 className='info text-center py-5' style={{ color: 'white' }}>Footer &copy; {year}</h3>

        </div>
    );
};

export default Footer;