import React, { useState, createContext } from "react";

export const ActiveContext = createContext();

export const ActiveProvider = (props) => {
    
    const [isActive, setActive] = useState(true);

    return (
        <ActiveContext.Provider value={[isActive,setActive]}>
            {props.children}
        </ActiveContext.Provider>
    );
};