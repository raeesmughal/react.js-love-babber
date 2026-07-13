import React from 'react'
import Home from './Home'
import About from './About'
import Dashboard from './Dashboard'
import { Link, NavLink } from 'react-router-dom'
import './nav.css'

const Navbar = () => {
    return (
        <div className='navbar'>

            <ul>
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : "non-active-link"}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : "non-active-link"}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard" className={({ isActive }) => isActive ? "active-link" : "non-active-link"}>Dashboard</NavLink>
                </li>
            </ul>

        </div>
    )
}

export default Navbar