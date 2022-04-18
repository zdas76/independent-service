import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    
    return (
        <div>
            <h1>Service Details: {serviceId}</h1>
            <h1>Comforme your booking</h1>
        </div>
    );
};

export default ServiceDetails;