import React from 'react'
import Product from './Product'
import productItems  from '../assets/data'

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
    
/*
const fetchJson = () => {
  fetch('./data.json')
  .then(response => {
    return response.json();
  }).then(data => {
    setData(data);
  }).catch((e: Error) => {
    console.log(e.message);
  });
}
*/

    useEffect(()=>{
        // fetch('./db.json')  // fetch return a promise
        // .then(response => response.json())     //response is received in the form of stream which needs to be convertedinto Json Onjects, which also returns a promise
        // .then(allProducts => {
            // console.log(allProducts);
            // setProductList(allProducts); 
            setProductList(productItems.productItems); 
        // })
        // .catch(e=>console.error(e.message));
    }
    , []);

    return (
        <div className="container mx-auto pb-24 px-5">
            <h1 className='text-lg fon-bold my-8'>All Pizza's</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-8 gap-24 align-center'>
                {
                    productList.map(product => <Product key={product._id} product={product} />)
                }
                <Product/>
            </div>
        </div>
    )
}

export default ProductList
