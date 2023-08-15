import React from 'react'
import { NavLink  } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      Navbar
            <ul>
            <li><NavLink to="/"> Hero </NavLink></li>
                <li><NavLink to="/main"> Main </NavLink></li>
                <li><NavLink to="/product"> Product </NavLink></li>
            </ul>

    </div>
  )
}

export default Navbar
