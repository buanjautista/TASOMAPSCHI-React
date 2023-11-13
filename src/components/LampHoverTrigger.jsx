import { useContext } from "react";
import { LampsContext } from "../contexts/LampContext";

export const LampHoverTrigger = (index) => {
    const { setLampHover } = useContext(LampsContext)

    return (
        <>
            <div onMouseEnter={() => setLampHover([index, true])} 
            onMouseLeave={() => setLampHover([index, false])} 
            style={{width: "100%", height: "100%", position: "absolute", top: 0, zIndex: -1}} />
        </>
    )
}
