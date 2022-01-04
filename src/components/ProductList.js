import React from 'react'
import Product from './Product'

//Importing Hooks
import {useState, useEffect} from 'react';


function ProductList() {
    /*destructuring assignments which returns an array
        of two elements ProductList -  data and the reference to that data
        setProductList - reference to the data
        
        These states are reactive that means any change will re-render the components.
    */
    const[productList, setProductList] = useState([]);

    /*
    useEffect() - mounts the component initially, - Similar to ngOnInit() in Angular
    An anonymous function is passed and an array is passed which is called dependency array
    we write the functioanluty to be implemented when the state changes,
    if the dependency array is empty it only runs once.
     */
    
    useEffect(()=>{
        fetch('/api/products')  // fetch return a promise
        .then(response => response.json())     //response is received in the form of stream which needs to be convertedinto Json Onjects, which also returns a promise
        .then(allProducts => {
            setProductList(allProducts); 
        });
    }, []);

    return (
        <div className="container mx-auto pb-24">
            <h1 className='text-lg fon-bold my-8'>Products</h1>
            <div className='grid grid-cols-5 my-8 gap-24'>
                {
                    productList.map(product => <Product key={product._id} product={product} />)
                }
                <Product/>
            </div>
        </div>
    )
}

export default ProductList
