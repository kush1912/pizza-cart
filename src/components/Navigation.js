import React from 'react'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../pages/CartContext'
import logo from '../assets/logo.png'
import cartLogo from '../assets/cart.png'

export default function Navigation() {
    const cartStyle={
        background:'#F5960D',
        display:'flex',  
        padding:'6px 12px',
        borderRadius:'50px'  
    }

    const {cart } =useContext(CartContext);

    return (     
        <>
            <nav className="container mx-auto flex items-center justify-between px-4 py-4">
                    <Link to="/">
                        <img style={{height:45}} src={logo} alt='logo'></img>
                    </Link>
                <ul className='flex items-center justify-between px-4 py-4'>
                    <li className='ml-6'><Link to="/">Home</Link></li>
                    <li className='ml-6'><Link to="/register">Register</Link></li>
                    <li className='ml-6'><Link to="/login">Login</Link></li>
                    <li className='ml-6'><Link to="/products">Products</Link></li>
                    <li className='ml-6'>
                        <Link to="/cart">
                            <div style={cartStyle}>
                                <span>{cart.totalItems? cart.totalItems:0}</span>
                                <img className='ml-2' src={cartLogo} alt="cart-logo"></img>
                            </div>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}


/*
Two ways of applyig css
    1. by passing Javascript Object
    2. by passing reference of Javascript Object
*/