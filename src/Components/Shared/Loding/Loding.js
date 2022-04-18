import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loding = () => {
    return (
        <div style={{height:'400px'}} className='w-100 justify-content-center align-content-center'>
            <Spinner animation="border" variant="success" /> 
        </div>
    );
};

export default Loding;