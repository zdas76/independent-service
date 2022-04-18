import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    
    return (
        <div>
            <h1 className='text-center my-5 fw-bold'>My Servicec</h1>
            <div className='w-100 row d-lg-flex p-4'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;