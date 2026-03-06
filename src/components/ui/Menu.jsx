
import React from 'react'
import { NavLink } from 'react-router-dom'

function Menu() {
  return (
        <div className="hidden md:block">
          <nav>
            <ul className="flex gap-4 flex-col md:flex-row">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/country">Country</NavLink></li>
              <li><NavLink to="/india">India</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </nav>
    </div>
  )
}

export default Menu