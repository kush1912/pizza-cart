import {useContext, useState, useEffect} from 'react'
import { CartContext } from './CartContext'

import emptyCart from '../assets/empty-cart.png'
export default function Cart() {
    let grandTotal=0;
    //Sharing the data through ContextAPI
    const {cart,setCart} = useContext(CartContext);
    
    const [products, setProducts] =useState([]);
    const [priceFetched, togglePriceFetched]=useState(false);
    
    useEffect(() => {
       if(!cart.items) return;
       if(priceFetched) return;
       fetch('/api/products/cart-items',{
           method:'POST',
           headers:{
               'content-Type':'application/json'
           },
           body:JSON.stringify({ids:Object.keys(cart.items)})
       }).then(res=>res.json())
       .then(products=> {
            setProducts(products);
            togglePriceFetched(true);
        });  
    }, [cart,priceFetched])

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
    
    const decrement =(productId)=>{
        const existingQty = cart.items[productId];
        if( existingQty===1) return;
        const _cart = {...cart};
        _cart.items[productId]=existingQty-1;
        _cart.totalItems-=1;
        setCart(_cart);
    }
    const getSum =(productId, price)=>{
        const sum = price*getQty(productId);
        grandTotal+=sum;
        return sum;
    }

    const handleDelete=(productId)=>{
        const _cart = {...cart};
        const qty = _cart.items[productId];
        delete _cart.items[productId]; //Delete keyword is used to delete property from an object.
        _cart.totalItems-=qty;
        setCart(_cart);
        setProducts(products.filter((product)=>product._id!==productId))  //filter always return true/false
    }

    const handleOrderNow = ()=>{
        window.alert(`Order Placed Succesfullly of total amount: ${grandTotal}`);
        setProducts([]);
        setCart([]);
    }

    return (
        !products.length ?
        <div>
            <img className='mx-auto w-1/2 mt-12' src={emptyCart} alt="empty-cart" />
        </div>
        : 
        <div className="container mx-auto lg:w-1/2 w-full pb-24">
            <h1>Cart Items</h1>
            <ul>
                {
                    products.map(product=>{
                        return (
                            <li className='"mb-12' key={product._id}>
                                <div className="flex items-center mb-4 justify-between">
                                    <div className="flex items-center">
                                        <img className="h-16" src={product.image} alt="icon"/>
                                        <span className="font-bold ml-4 w-48">{product.name}</span>
                                    </div>
                                    <div>
                                        <button onClick={()=>{decrement(product._id)}} className="bg-yellow-500 px-4 py-2 rounded-full leading-none text-white">-</button> 
                                        <b className="px-4">{getQty(product._id)}</b>
                                        <button onClick={()=>{increment(product._id)}} className="bg-yellow-500 px-4 py-2 rounded-full leading-none text-white">+</button>
                                    </div>
                                    <div>
                                        <span>Rs. {getSum(product._id, product.price)}</span>
                                        <button onClick={()=>{handleDelete(product._id)}} className="bg-red-500 px-4 py-2 ml-2 mt-2 rounded-full leading-none text-white">Delete</button>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }
                
                <hr className="my-6"/>
                <div className="text-right">
                    <b>Grand Total</b> Rs. {grandTotal}
                </div>
                <div className="text-right mt-6">
                    <button onClick={()=>{handleOrderNow()}} className="bg-yellow-500 px-4 py-2 rounded-full leading-none">Order Now</button>
                </div>
            </ul>
        </div>
    )
}
