import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = ({ datapass }) => {
    const data = datapass;
    const navigate = useNavigate()

    let subtotal = 0
    data?.map(d => {
        const price = d.price;
        const count = d.count
        subtotal += (count * price)
    })
    console.log(subtotal)



    return (
        <div className=' max-w-7xl mx-auto px-4'>
            <h1 className=' text-2xl font-semibold  mt-12 text-sky-500'>CheckOut Your Products</h1>
            <div className=' flex items-center'>
                <div className=' w-2/3'>
                    {
                        data.map(product =>

                            <div key={product?.id} className=' flex items-center justify-around bg-white shadow-md my-10'>
                                <img className=' w-20 h-20 p-3' src={product?.img} alt="productimg" />
                                <h1 className=' uppercase text-sm font-medium w-40'>{product?.name}</h1>
                                <h1 className='text-sky-500'>{product?.color}</h1>
                                <h1>${product?.price}</h1>

                                <input className={`w-10 pl-2 text-sm font-semibold mr-1 py-[2px] placeholder:text-gray-900 bg-gray-200 `} type="number" name={product?.name} placeholder={product.count} />
                            </div>

                        )
                    }
                </div>
                <div className='mx-10 w-1/3 px-5 border border-gray-300 '>
                    <h1 className=' mb-4 text-2xl font-bold text-gray-600'>Cart Total</h1>
                    <p className=' text-left font-semibold'>SubTotal <span className=' text-sky-600'>:${subtotal}.00</span> </p>
                    <h1 className=' text-left font-semibold'>Total: <span className=' text-sky-600'>${subtotal}.00</span> </h1>
                    <button onClick={() => navigate('/thanks')} className=' py-1 px-2 bg-sky-500 text-white my-4 rounded-sm'> Proceed to checkout</button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;