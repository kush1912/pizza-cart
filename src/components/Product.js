import React  from 'react'
import { useContext, useState } from 'react'
import {Link } from 'react-router-dom'
import { CartContext } from '../pages/CartContext'
import peproni from '../assets/peproni.png'
function Product( props) {

    const [isAdding,setIsAdding] = useState(false); 
    const {cart, setCart} = useContext(CartContext)
    const addToCart = (event,product) =>{
        //preventDefault is basically event.stopPropogation, but since we are using Link and not anchor tags so it will not work.
        // We are doing this so, that when we click on Add to Cart button it should not redirect us to the Product Details Page.
        event.preventDefault();
        //console.log(product);
        
        let _cart = {...cart};  //Cloning the data recieved from App.js using contextAPI
        if(!_cart.items){
            _cart.items = {}   //Creating the items if its nit present inside Cart
        }

        if(_cart.items[product._id]){  //We already have id of the product from the event being called from cart Items
            _cart.items[product._id]+=1;  //increase the Quantity of the item
        } else{
            _cart.items[product._id]=1;
        }
        if(!_cart.totalItems){
            _cart.totalItems=0;
        }
        _cart.totalItems+=1;
        
        setCart(_cart);
        setIsAdding(true);
        setTimeout(()=>{
            setIsAdding(false);
        },1000)
        /*cart Data-definition - will be stored in local storage
         We should generally store the ids of the item and then later fetch the details from the server again.
        Cause Prices and other details of the pages might change 
        const cart = {
            items:{
                _id:count
            },
            totalItems:
        }
        */
    }

    //console.log(props.product);
    
    if(!props.product) return(<></>)
    return (
        <Link to={`/products/${props.product._id}`}>
            <div className='w-5/6 mx-auto'>
                {/* <img className='h-50' src={props.product.image} alt="pizza-type-icon" /> */}
                <img className='h-50' src={peproni} alt="pizza-type-icon" />
                <div className='text-center'>
                    <h2 className='text-lg font-bold py-2'>{props.product.name}</h2>
                    <span className='bg-gray-200 py-1 rounded-full text-sm px-4'>{props.product.size}</span>
                </div>
                <div className='flex justify-between  mt-4'>
                    <span>Rs. {props.product.price}</span>
                    <button disabled={isAdding} onClick={(e)=>{addToCart(e,props.product)}} 
                    className={`${isAdding ? 'bg-green-500' : 'bg-yellow-500'} px-4 rounded-full font-bold py-1`}>ADD{isAdding ? 'ED':'' }</button>
                </div>
            </div>
        </Link>
    )
}

export default Product
