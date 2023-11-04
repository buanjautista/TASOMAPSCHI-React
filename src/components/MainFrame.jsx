/* eslint-disable react/prop-types */
import { useState } from 'react'
import { MapFrame } from './MapFrame'
import { LampBox } from './LampBox'


export const MainFrame = () => {
  const [lampState,setLampState] = useState(Array(60).fill(false));
  const [currentArea, setCurrentArea] = useState("Shiokaze")

  const setLamps = (e) => {
    e.preventDefault()
    let index = e.target.value;
    // console.log(e.target.value)
    let newState = [...lampState]
    newState[index] = !lampState[index]
    // console.log(lampState, newState)
    setLampState(newState)
  }
  const changeArea = (area) => {
    setCurrentArea(area)
  }

  const resetState = () => {
    setLampState(Array(60).fill(false));
    setCurrentArea("Shiokaze");
  }

  return (
    <main className='main-frame'>
      <section name="MapFrame">
        <div className='flex-between'>
          <button onClick={() => changeArea("Shiokaze")}>Shiokaze</button>
          <button onClick={() => changeArea("Futago")}>Futago</button>
          <button onClick={() => changeArea("Gengetsu")}>Gengetsu</button>
        </div>
        <MapFrame lampState={lampState} currentArea={currentArea}/>
      </section>

      <section>
        <LampBox setLamps={setLamps} lampState={lampState} currentArea={currentArea}/>
        <button onClick={resetState}>Reset State</button>
      </section>
    </main>
  )
}