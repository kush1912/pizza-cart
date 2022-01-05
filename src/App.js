import React from 'react'

import {BrowserRouter as Router,Routes, Route } from 'react-router-dom' // All are TitleCase
//Content inside router needs to be wrapped inside a container tag

import Home from './pages/Home'
import Navigation from './components/Navigation'
// import Products from './pages/Products'
import Cart from './pages/Cart'
import ProductDetails from './pages/ProductDetails'
import { CartContext } from './pages/CartContext'
import {useState, useEffect } from 'react'
import ProductList from './components/ProductList'


export default function App() {
const [cart, setCart] = useState({});
useEffect(()=>{
    //fetching the data from localStorage
    const cart = window.localStorage.getItem('cart');
    setCart(JSON.parse(cart));
},[])

useEffect(()=>{
    window.localStorage.setItem('cart',JSON.stringify(cart));
},[cart]); //this time we are passing cart in the dependecny array cause we want to monitor the changes in the cart. 

    return (
        <>
            <Router>
                <CartContext.Provider value={{cart,setCart}}>
                    <Navigation/>
                    
                    <Routes>  
                        <Route path="/" element={<Home/>} exact></Route>
                        <Route path="/products" exact element={<ProductList/>}></Route>
                        <Route path="/cart" element={<Cart/>}></Route>
                        <Route path="/products/:_id" element={<ProductDetails/>}></Route>
                    </Routes>
                </CartContext.Provider>
            </Router>
        </>
    )
}


/*
Root Component
- Class component
- Functional Component - recommended
*/

/* 1. These empty brackets are called fragments, 
            return can't return 2 elements together, 
            Jsx compoenents can't return 2 elements
            hence they need to be wrapped inside some container element div, fragments.
          
    2. Version Mismatches -  backward compatibilty is not supported
        1. Switch was replaced by routes
        2. components was replaced by element 
    
    
*/

/* We can use the href tags as well here, if the file was named as .js extension, 
                    but <a></a> tags will not behave as a single page application and will render the page on 
                    each click, which makes no sense as an application needs to be an SPA.
<Link to="/">Home</Link>
<Link to="/about">About</Link> */
/* Routes array same as in Angular in routing module.ts file */

/*
cartContext - value prop is passed and is wrapped at the parent level and will be available to all the child components.
 */