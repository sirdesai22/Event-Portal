import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar fixed">
           
            <div className="logo">
                <img src="/KLE_Technological_University_Logo.png" alt="" className="logo-img" />
            </div>

            <h1 className="project_title">ACM / CSI Portal</h1>
          
            <ul className="nav-links">
            </ul>
        </nav>
    )
}

export default Navbar