import { useContext } from "react"
import { LampsContext } from "../contexts/LampContext"

export const MapChanger = () => {
    const { changeArea } = useContext(LampsContext)

  return (
    <div className='flex-between'>
        <button onClick={() => changeArea("Shiokaze")}>Shiokaze</button>
        <button onClick={() => changeArea("Futago")}>Futago</button>
        <button onClick={() => changeArea("Gengetsu")}>Gengetsu</button>
    </div>
  )
}
