import {useContext, useState, useEffect} from 'react'
import { CartContext } from './CartContext'

export default function Cart() {
    const {cart,setCart} = useContext(CartContext);
    const [products, setProducts] =useState([]);
    useEffect(() => {
       if(!cart.items){
           return;
       }
       fetch('/api/products/cart-items',{
           method:'POST',
           headers:{
               'content-Type':'application/json'
           },
           body:JSON.stringify({ids:Object.keys(cart.items)})
       }).then(res=>res.json())
       .then(products=> setProducts(products))  
    }, [cart])

    const  getQty =(productId)=>{
        return cart.items[productId];
    }

    const increment =(productId)=>{
        const existingQty = cart.items[productId];
        const _cart = {...cart};
        _cart.items[productId]=existingQty+1;
        _cart.totalItems+=1;
        setCart(_cart);
    }
    return (
        <div className="container mx-auto lg:w-1/2 w-full pb-24">
            <h1>Cart Items</h1>
            <ul>
                {
                    products.map(product=>{
                        return (
                            <li>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <img className="h-16" src={product.image} alt="icon"/>
                                        <span className="font-bold ml-4 w-48">{product.name}</span>
                                    </div>
                                    <div>
                                        <button onClick={()=>{decrement(product._id)}} className="bg-yellow0-500 px-4 py-2 rounded-full leading-none">-</button> 
                                        <b className="px-4">{getQty(product._id)}</b>
                                        <button onClick={()=>{increment(product._id)}} className="bg-yellow0-500 px-4 py-2 rounded-full leading-none">+</button>
                                    </div>
                                    <div>
                                        <span>Rs. {product.price}</span>
                                        <button className="bg-red-500 px-4 py-2 rounded-full leading-none text-white">Delete</button>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }
                
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
