import React, { useContext } from 'react'
import './css/Navbar.css'
import { ActiveContext } from './ActiveContext'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faShoppingCart, faChartLine, faUser } from "@fortawesome/free-solid-svg-icons"

export default function Navbar(){

    const [isActive, setActive] = useContext(ActiveContext)

    return(
        <nav id="sidebar" className={isActive ? 'bg-dark active' : 'bg-dark'}>
            <div className="sidebar-header text-center">
                <h3>Admin Page</h3>
            </div>
            <div class="sidebar-sticky">
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">
                            <FontAwesomeIcon icon={faHome}/> &nbsp;
                            Dashboard <span class="sr-only">(current)</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <FontAwesomeIcon icon={faShoppingCart} /> &nbsp;
                            Products
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <FontAwesomeIcon icon={faUser} /> &nbsp;
                            Customers
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <FontAwesomeIcon icon={faChartLine} /> &nbsp;
                            Reports
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}