import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Intotal from '../InTotal-Summary/Intotal';
import './Body.css'
const Body = () => {
    const [services, setservice] = useState([]);

    useEffect(() => {
        fetch('../../data.JSON')
            .then(res => res.json())
            .then(data => setservice(data));
    }, []);
    const [summary, setsummary] = useState([]);
    const handeladdtocard = data => {
        const newsummary = [...summary, data];
        setsummary(newsummary);
    }
    return (
        <div className="body">
            <div className="carts">
                {
                    services.map(service => <Cart service={service} key={service.id} handeladdtocard={handeladdtocard}></Cart>)
                }
            </div>
            <div className="summary">
                <Intotal summary={summary}></Intotal>
            </div>
        </div>
    );
};

export default Body;