import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`)
    }

    return (
        <div className="col-md-4 border border-warning border-2 p-2 " >
                <img className='img-fluid' src={img} alt="/" />
                <p className='display-4 fw-bold'> {name}</p>
                <p className='fs-4'> {description}</p>
                <p className='fs-4'> BD : Tk.{price}/-</p>
            <button className='w-100 fs-3 border-0' onClick={() => navigateToServiceDetail(id)}>Get Service</button>
            </div>
    );
};

export default Service;