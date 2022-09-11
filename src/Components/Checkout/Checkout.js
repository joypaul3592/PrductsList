import React from 'react';

const Checkout = ({ data, proCount }) => {
    console.log(data, proCount);
    return (
        <div>
            {/* {
                data.map(d => <h1>{d.name}</h1>)
            } */}
            <h1>Checkout</h1>
        </div>
    );
};

export default Checkout;