import React, { useContext } from 'react'
import './Navbar.css'
import { ActiveContext } from './ActiveContext'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faShoppingCart, faChartLine, faUser } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom'

export default function Navbar(){

    const [isActive] = useContext(ActiveContext)

    return(
        /*eslint-disable */
        <nav id="sidebar" className={isActive ? 'bg-dark active' : 'bg-dark'}>
            <div className="sidebar-header">
                <h3>Admin Page</h3>
            </div>
            <div class="sidebar-sticky">
                <ul class="nav flex-column">
                    <Link to="/">
                        <li class="nav-item nav-link active">
                            <FontAwesomeIcon icon={faHome}/> &nbsp;
                            Dashboard <span class="sr-only">(current)</span>
                        </li>
                    </Link>
                    <Link to="/product">
                        <li class="nav-item nav-link">
                            <FontAwesomeIcon icon={faShoppingCart} /> &nbsp;
                            Products
                        </li>
                    </Link>
                    <Link to="/about">
                        <li class="nav-item nav-link">
                            <FontAwesomeIcon icon={faUser} /> &nbsp;
                            Customers
                        </li>
                    </Link>
                    <Link to="/report">
                        <li class="nav-item nav-link">
                            <FontAwesomeIcon icon={faChartLine} /> &nbsp;
                            Reports
                        </li>
                    </Link>
                </ul>
            </div>
        </nav>
        /*eslint-disable */
    )
}