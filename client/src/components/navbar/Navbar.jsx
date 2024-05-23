import React, { useState } from 'react'
import "./navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";

export const Navbar = () => {
    const [menu,setMenu]=useState("home")
  return (
      <div className='navbar'>
          <img src='./images/logo.png' alt="logo" className='logo' />
          <ul className='navbar-menu'>
              
             <Link to="/"> <li className={menu==="home"?"active":""} onClick={()=>setMenu("home")}>Home</li></Link>
              <Link to="/addfood"><li className={menu==="menu"?"active":""}onClick={()=>setMenu("menu")}>Add Food</li></Link>
              <li className={menu==="mobile"?"active":""} onClick={()=>setMenu("mobile")}>Mobile-app</li>
              <li className={menu==="contact"?"active":""} onClick={()=>setMenu("contact")}>Contact us</li>              
          </ul>
          <div className="navbar-right">
              <SearchIcon/>
              <div className="navbar-search-icon">
                  <ShoppingCartIcon />
                  <div className="dot"></div>
              </div>
              <button>sign in</button>
          </div>
    </div>
  )
}
