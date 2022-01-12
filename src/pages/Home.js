import React from 'react'
import ProductList from '../components/ProductList'
import {Link} from 'react-router-dom'
import pizza from '../assets/pizza.png'

export default function Home() {
    return (
        <>
            <div className='hero py-10'>
                <div className='container mx-auto flex items-center justify-between'>
                    <div className='w-1/2  pl-10'>
                        <h6 className='text-lg'><em>Are you Hungry?</em></h6>
                        <h1 className='text-3x1 md:text-6xl font-bold'>Don't Wait !</h1>
                        <Link to="/products">
                            <button className='py-1 px-4 rounded-full text-white font-bold mt-4 bg-yellow-500 hover:bg-yellow-600'>Order Now</button>
                        </Link>
                    </div>
                    <div className='w-1/2'>
                        <img className='w-4/6' src={pizza} alt='Pizza-icon'></img>
                    </div>
                </div>
            </div>
            <div>
                <ProductList/>
            </div>
        </>
    )
}
