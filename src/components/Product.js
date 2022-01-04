import React from 'react'

import {Link } from 'react-router-dom'

function Product( props) {
    if(!props.product) return(<></>)
    
    //console.log(props.product);
    return (
        <Link to={`/products/${props.product._id}`}>
            <div>
                <img src={props.product.image} alt="pizza-type-icon" />
                <div className='text-center'>
                    <h2 className='text-lg font-bold py-2'>{props.product.name}</h2>
                    <span className='bg-gray-200 py-1 rounded-full text-sm px-4'>{props.product.size}</span>
                </div>
                <div className='flex justify-between items-center mt-4'>
                    <span>$ {props.product.price}</span>
                    <button className='bg-yellow-500 px-4 rounded-full font-bold py-1'>ADD</button>
                </div>
            </div>
        </Link>
    )
}

export default Product
