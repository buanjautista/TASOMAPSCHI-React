import { createContext, useState } from "react";

export const LampsContext = createContext()

export function LampsProvider({children}){
    const [lampState,setLampState] = useState(Array(60).fill(false));
    const [lampHover, setLampHover] = useState([0, false])
    const [currentArea, setCurrentArea] = useState("Shiokaze")

    const changeArea = (area) => {
      setLampState(Array(60).fill(false));
      setCurrentArea(area)
    }
  
    const resetState = () => {
      setLampState(Array(60).fill(false));
      setCurrentArea("Shiokaze");
    }

    return <LampsContext.Provider value={
        {lampState, setLampState, lampHover, setLampHover, currentArea, changeArea, resetState}
        }>
        {children}
    </LampsContext.Provider>
}