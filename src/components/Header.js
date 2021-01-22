import React, { useContext } from "react";
import "./css/Header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { ActiveContext } from './ActiveContext'

export default function Header(){

    const [isActive, setActive] = useContext(ActiveContext)
    
    const openSideBar = () =>{
        console.log(isActive);
        setActive(!isActive)
    }

    return (
        <nav className="navbar navbar-dark bg-dark">
            <button id="togglebox" onClick={openSideBar}><FontAwesomeIcon icon={faBars} size="2x"/></button>
        </nav>
    )
}
