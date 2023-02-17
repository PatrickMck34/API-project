import { createContext } from "react"; 
import React, { useRef, useState, useContext } from 'react';

const AvgContext = React.createContext()

export function AvgStarContext({children}){
    
    const [avgStar, setAvgStar] = useState(3)
    
    const average = {
        avgStar
    }
    return(
        <>
<AvgContext.Provider value={average}>
        {children}
      </AvgContext.Provider>
        </>
    )
}
export const useAvg = () => useContext(AvgContext)