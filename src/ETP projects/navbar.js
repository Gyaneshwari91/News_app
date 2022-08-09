import React from "react";
import { Link } from "react-router-dom";
export function Navbar(){
    return(
        <nav className='allnavele'>
            
            <Link to='/'  className='navbar'>Home</Link>
            <Link to='/RegisterPage' className='navbar'>Register</Link>
            <Link to='/LoginPage' className='navbar'>Login</Link>
            <Link to='/AboutPage' className='navbar'>About</Link>
            <Link to='/ContactPage' className='navbar'>Contact</Link> 
            

            {/* <a href='/HomePage' className='navbar'>Home</a>
            <a href='/RegisterPage' className='navbar'>Register</a>
            <a href='/LoginPage' className='navbar'>Login</a>
            <a href='/AboutPage' className='navbar'>About</a>
            <a href='/ContactPage' className='navbar'>Contact</a> */}    

        </nav>
    
    )
}