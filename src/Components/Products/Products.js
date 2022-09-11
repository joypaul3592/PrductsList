import React, { useEffect, useState } from 'react';
import { GrPowerReset } from 'react-icons/gr';
import { BsFillCartDashFill } from 'react-icons/bs';
import { IoIosHappy } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';


const Products = ({ handelCart }) => {
    const [productsData, setProductsData] = useState([])
    const [selectValue, setselectValue] = useState('all');
    const [filterValue, setFilterValue] = useState([])
    const [size, setSize] = useState('all');
    const [inputValue, setInputValue] = useState('');
    const [onButton, setOnBUtton] = useState(false);
    // const [inputValues, setInputValues] = useState({})

    useEffect(() => {
        fetch('/Products.json')
            .then(res => res.json())
            .then(data => {
                setProductsData(data)
                setFilterValue(data)
            })
    }, [])



    useEffect(() => {
        if (selectValue !== undefined) {
            if (selectValue == 'all' && size == 'all') {
                if (inputValue !== '') {
                    const newValue = productsData.filter(product => (product.type.toLowerCase().includes(inputValue.toLowerCase())));
                    setFilterValue(newValue)
                } else {
                    setFilterValue(productsData)
                }
            } else if (selectValue == 'all' && size !== 'all' && inputValue == '') {
                const newValue = productsData.filter(product => (product.size == size));
                setFilterValue(newValue)
            } else if (inputValue !== '') {
                const newValue = productsData.filter(product => (product.type.toLowerCase().includes(inputValue.toLowerCase())));
                setFilterValue(newValue)
            } else if (size !== undefined) {
                if (size == 'all') {
                    const newValue = productsData.filter(product => (product.type == selectValue && product.size !== size));
                    setFilterValue(newValue)
                } else {
                    const newValue = productsData.filter(product => (product.type == selectValue && product.size == size));
                    setFilterValue(newValue)
                }
            } else {
                const newValue = productsData.filter(product => (product.type == selectValue));
                setFilterValue(newValue)
            }
        } else if (size !== 'all') {
            const newValue = productsData.filter(product => (product.size == size));
            setFilterValue(newValue)
        }
    }, [selectValue, size, inputValue])





    let data = []
    const handelValue = ({ id }) => {
        const newArr = productsData.filter(data => data.id == id);
        const duble = data.find(d => d.id == id)
        if (duble) {
            const newArr = data.filter(da => da.id !== duble.id);
            data = newArr
        } else {
            data.push(...newArr)
        }

    }
    console.log(data)




    const handelCount = ({ value, id }) => {

        if (value) {
            const ProductCount = data.filter(d => d.id == id);
            if (ProductCount.length) {
                console.log('if');
                const objIndex = data.findIndex((obj => obj.id == id));
                data[objIndex].count = value;
            }
        }
        console.log(data)
    }

    // const handleChange = ({ target, id }) => {
    //     console.log(id)
    //     setInputValues({
    //         ...inputValues,
    //         count: target.value,
    //         id: id
    //     })
    // }
    // console.log(inputValues)


    return (
        <div className=' max-w-7xl mx-auto px-10'>
            <h1 className=' text-2xl font-bold text-sky-500 my-10'>Products list</h1>
            <div className=' flex items-center justify-between  py-3 '>
                <div className=' flex items-center'>
                    <select
                        onChange={(e) => {
                            setselectValue(e.target.value)
                        }}
                        value={selectValue}
                        className=' mr-3 border border-gray-600 text-sm font-medium px-2 py-[2px]'>
                        <option value='all'>- All</option>
                        <option value='hoodie'>- Hoodies</option>
                        <option value='shart'>- Shart</option>
                        <option value='pant'>- Pant</option>
                    </select>

                    <select
                        onChange={(e) => {
                            setSize(e.target.value)
                        }}
                        value={size}
                        className=' mr-3 border border-gray-600 text-sm font-medium px-2 py-[2px] '>
                        <option value='all'>- All</option>
                        <option value='md'>- md</option>
                        <option value='lg'>- lg</option>
                        <option value='Xl'>- Xl</option>
                    </select>
                    <div>
                        <button onClick={() => {
                            setSize('all')
                            setselectValue('all')
                            setInputValue('')
                            setFilterValue(productsData)
                        }} className=' cursor-pointer flex items-center text-sm font-medium'><GrPowerReset className=' text-sky-500 mr-1 text-xs' />Reset</button>
                    </div>
                </div>
                <div className=' flex items-center'>
                    <div className=' mr-4'>
                        <label className=' mr-2 font-medium' htmlFor="html">Search:</label>
                        <input onChange={(e) => setInputValue(e.target.value)} value={inputValue} className='bg-gray-200 py-1 focus:outline-none  px-1' type="text" id="html" name="fav_language" />
                    </div>
                    <div>
                        <button onClick={() => { handelCart(data) }} className=' py-[6px] rounded-sm px-3 bg-sky-400 text-white text-sm font-medium'>Add To Cart</button>
                    </div>
                </div>
            </div>
            <div>
                {
                    filterValue.map(product =>

                        <div key={product?.id} className=' flex items-center justify-around bg-white shadow-md my-10'>
                            <img className=' w-20 h-20 p-3' src={product?.img} alt="productimg" />
                            <h1 className=' uppercase text-sm font-medium w-40'>{product?.name}</h1>
                            <h1 className='text-sky-500'>{product?.color}</h1>
                            <h1 className=' text-sm font-medium text-green-500 flex items-center'><IoIosHappy className=' mr-1' />{product?.available}</h1>
                            <h1>${product?.price}</h1>



                            <from className=' flex items-center '>
                                <input
                                    onClick={(e) => handelCount({ value: e.target.value, id: product.id })}
                                    // onChange={({ target }) => handleChange({ target: target, id: product.id })}
                                    className={`w-10 pl-2 text-sm font-semibold mr-1 py-[2px] placeholder:text-gray-900 bg-gray-200 `} type="number" name={product?.name} placeholder='1' />

                                <label onClick={(e) => handelValue({ id: product?.id }, setOnBUtton(true))} className=' cursor-pointer py-1 flex mx-1' htmlFor={product?.name}> <BsFillCartDashFill />  <input className='bg-white ml-3' type="checkbox" id={product?.name} name={product?.name} /> </label>
                            </from>
                        </div>

                    )
                }
            </div>

        </div >
    );
};

export default Products;