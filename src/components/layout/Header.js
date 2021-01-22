import React, { useContext } from "react";
import "./Header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { ActiveContext } from './ActiveContext'
import { Link } from 'react-router-dom'

export default function Header(){

    const [isActive, setActive] = useContext(ActiveContext)
    
    const openSideBar = () =>{
        console.log(isActive);
        setActive(!isActive)
    }

    return (
        <nav className="navbar navbar-dark bg-dark">
            <button id="togglebox" onClick={openSideBar}><FontAwesomeIcon icon={faBars} size="2x"/></button>
            <div class="my-2 my-md-0 mr-md-3">
                <Link>
                    <span class="p-2" href="#">Features</span>
                </Link>
                <Link>
                    <span class="p-2" href="#">Enterprise</span>
                </Link>
                <Link>
                    <span class="p-2" href="#">Support</span>
                </Link>
                <Link>
                    <span class="p-2" href="#">Pricing</span>
                </Link>
            </div>
        </nav>
    )
}
