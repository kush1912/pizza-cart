import React from 'react'

import {useState,useEffect} from 'react'

import {useParams,useNavigate } from 'react-router-dom'
import {addToCart} from '../components/Product';

function ProductDetails() {

    const [product, setProduct]=useState({});
    const params = useParams();
    //console.log(params);
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`/api/products/${params._id}`)
        .then(response=> response.json())
        .then(product=>setProduct(product))
    }, [params._id])

    return (
        <div className="container mx-auto mt-12">
            <button className="mb-12 font-bold" onClick={()=>{navigate(`/`)}}>Back</button>
            <div className="flex">
                <img src={product.image} alt="pizza-details-icon" />
                <div>
                    <h1 className="text-xl font-bold">{product.name}</h1>
                    <div className="text-md">{product.size}</div>
                    <div className="font-bold mt-2">Rs. {product.price}</div>
                    <button  className="bg-yellow-500 py-1 px-8 rounded-full font-bol mt-4">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
