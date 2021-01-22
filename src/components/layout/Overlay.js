import React, { useContext } from 'react'
import './Overlay.css'
import { ActiveContext } from './ActiveContext'

export default function Overlay(){

    const [isActive, setActive] = useContext(ActiveContext)

    const clicked = () => {
        setActive(!isActive)
    }

    return (
        <div className={isActive ? 'overlay active' : 'overlay'} onClick={clicked}/>
    )
}