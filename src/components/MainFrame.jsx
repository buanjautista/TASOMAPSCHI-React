/* eslint-disable react/prop-types */
import { useState } from 'react'
import { useApi } from '../hooks/useApi'
import { MapFrame } from './MapFrame'
import { LampBox } from './LampBox'

export const MainFrame = () => {
  const [lampState,setLampState] = useState([]);
  const [areaData] = useApi();
  
  const setAreaLamps = (area) => {
    return [areaData[area]]
  }

  const setLamps = () => {
    console.log('Yes lamp')
  }
  const resetLamps = () => {
    // console.log('Resetting Lamps state')
    let a = Array(60).fill(0)
    // console.log(a)
    setLampState(a);
  }

  return (
    <div className='main-frame'>
      <div>
        <h4>TASOMAPSCHI</h4>
        <MapFrame mapImage={"./src/assets/images/ShiokazePier.png"} lamps={[areaData]}/>
      </div>

      <div>
        <LampBox setLamp={() => setLamps()} lamps={[areaData]}/>
        {/* <button onClick={getInfoAPI}>Update Data</button> */}
        <button onClick={resetLamps}>Reset State</button>
      </div>
    </div>
  )
}