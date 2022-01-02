import React from 'react'

import {BrowserRouter as Router,Routes, Route, Link, } from 'react-router-dom' // All are TitleCase
//Content inside router needs to be wrapped inside a container tag

import Home from './pages/Home'
import About from './pages/About'

export default function App() {
    return (
        /*These empty brackets are called fragments, 
            return can't return 2 elements together, 
            Jsx compoenents can't return 2 elements
            hence they need to be wrapped inside some container element div, fragments.
           */ 
          
        /*
            Version Mismatches -  backward compatibilty is not supported
            1. Switch was replaced by routes
            2. components was replaced by element 
        */

        <>
        {/* <h1>helloo...from App</h1>   */}
            <Router>
                {/* We can use the href tags as well here, if the file was named as .js extension, 
                    but <a></a> tags will not behave as a single page application and will render the page on 
                    each click, which makes no sense as an application needs to be an SPA.
                */}
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>

                {/* Routes array same as in Angular in routing module.ts file */}
                <Routes>  
                    <Route path="/" element={<Home/>} exact></Route>
                    <Route path="/about" element={<About/>}></Route>
                </Routes>
            </Router>
        </>
    )
}


/*
Root Component
- Class component
- Functional Component - recommended
*/

