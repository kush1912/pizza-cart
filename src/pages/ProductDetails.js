import React from 'react'
import {useContext, useState,useEffect} from 'react'
import {useParams,useNavigate } from 'react-router-dom'
import { CartContext } from '../pages/CartContext'

function ProductDetails() {

    const [isAdding,setIsAdding] = useState(false); 
    const {cart, setCart} = useContext(CartContext)
    const [product, setProduct]=useState({});
    const params = useParams();
    //console.log(params);
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`/api/products/${params._id}`)
        .then(response=> response.json())
        .then(product=>setProduct(product))
    }, [params._id])

    const addToCartFromDetails = (event,product) =>{
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
    }


    return (
        <div className="container mx-auto px-4 mt-12">
            <button className='py-1 px-4 rounded-full font-bold mt-4 mb-4 bg-yellow-500 hover:bg-yellow-600' onClick={()=>{navigate(`/`)}}>Back</button>
            <div className="sm:flex-col mx-auto">
                <img className="mr-5" src={product.image} alt="pizza-details-icon" />
                <div>
                    <h1 className="text-xl font-bold">{product.name}</h1>
                    <div className="text-md">{product.size}</div>
                    <div className="font-bold mt-2">Rs. {product.price}</div>
                    <button disabled={isAdding} onClick={(e)=>{addToCartFromDetails(e,product)}} 
                    className={`${isAdding ? 'bg-green-500' : 'bg-yellow-500'} px-4 rounded-full font-bold py-1`}>Add{isAdding ? 'ed':'' } to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
