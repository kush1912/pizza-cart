import React from 'react'

export default function Cart() {
    return (
        <div className="container mx-auto lg:w-1/2 w-full pb-24">
            <h1>Cart Items</h1>
            <ul>
                <li>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <img className="h-16" src="" alt="icon"/>
                            <span className="font-bold ml-4 w-48">Double Peproni</span>
                        </div>
                        <div>
                            <button className="bg-yellow0-500 px-4 py-2 rounded-full leading-none">-</button> 
                            <b className="px-4">2</b>
                            <button className="bg-yellow0-500 px-4 py-2 rounded-full leading-none">+</button>
                        </div>
                        <div>
                            <span>Rs. 500</span>
                            <button className="bg-red-500 px-4 py-2 rounded-full leading-none text-white">Delete</button>
                        </div>
                    </div>
                </li>
                <hr className="my-6"/>
                <div className="text-right">
                    <b>Grand Total</b> Rs. 1000
                </div>
                <div className="text-right mt-6">
                    <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none">Order Now</button>
                </div>
            </ul>
        </div>
    )
}
