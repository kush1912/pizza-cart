import React from 'react'

function Product( props) {
    debugger;
    console.log(props);
    return (
        <div>
            <img src="./images/peproni.png" alt="pizza-type-icon" />
            <div className='text-center'>
                <h2 className='text-lg font-bold py-2'> {props.product.product.name}</h2>
                <span className='bg-gray-200 py-1 rounded-full text-sm px-4'>{props.product.key}</span>
            </div>
            <div className='flex justify-between items-center mt-4'>
                <span>$ 500</span>
                <button className='bg-yellow-500 px-4 rounded-full font-bold py-1'>ADD</button>
            </div>
        </div>
    )
}

export default Product
