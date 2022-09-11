import React from 'react';

const Checkout = ({ datapass, proCount }) => {
    const data = datapass;
    const proCounts = proCount
    console.log(data);
    console.log(proCounts);

    return (
        <div>
            <h1>Checkout {data.length}</h1>
        </div>
    );
};

export default Checkout;