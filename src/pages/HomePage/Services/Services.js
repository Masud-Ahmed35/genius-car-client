import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setServices(data);
            })
    }, [])

    return (
        <div>
            <div className='text-center'>
                <p className='text-xl font-bold text-orange-600'>Service</p>
                <h1 className='font-bold text-5xl my-5'>Our Service Area</h1>
                <p className='text-gray-500 w-1/2 mx-auto mb-12'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
            <div className='my-12 flex justify-center items-center'>
                <button className="btn bg-orange-600 text-lg px-5 font-semibold border-0 text-white normal-case">More Services</button>
            </div>
        </div>
    );
};

export default Services;