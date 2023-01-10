import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className="container text-center">
        <h4 id="header-feedback">Feedback Form</h4>
        <NavLink to='/' activeClassName = 'active'>Home</NavLink> &nbsp;
        <NavLink to='/about' activeClassName = 'active'>About</NavLink>
    </div>
  )
}

export default Header