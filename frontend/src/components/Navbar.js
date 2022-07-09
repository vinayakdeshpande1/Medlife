import React from 'react'
import Header from './Header'
import cart from "../imgs/cart.png"
import login from "../imgs/login.png"
import medicine from '../imgs/Medlife.png' 
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <div className='header_main'>
        <nav class="navbar">
           <div class=" container-fluid green-800 maxwidth">
            
             <div className='col-5 col-sm-8 '>
               <form class="d-flex " role="search">
               <img src={medicine} className='icon'/>
                   <a class="navbar-brand text-light fontsize">Deliver At</a>
                   <input class="form-control me-2 searchinput" type="search" placeholder="Search for medicine and wellness products" aria-label="Search"/>
                   <button class="btn text-success btn_search btn-light searchbtn" type="submit">Search</button>
                   </form>
                   </div>
                   
                  <div  className=" col-sm-3 col-12 cart">
                    <span>Register</span>
                   <button class="btn mr-3 loginbtn" type="submit"><img src={cart} width="25px"/>    Cart</button>
                  <Link to="/section"> <button class="btn loginbtn" type="submit"><img src={login} width="25px"/>     Login</button></Link>
                   </div>
               
            </div>
        </nav>  
      
    </div>
  
    </>
  )
}

export default Navbar