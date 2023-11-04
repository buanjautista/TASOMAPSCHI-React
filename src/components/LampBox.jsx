/* eslint-disable react/prop-types */
import { LampSwitch } from './LampSwitch'


export const LampBox = ({setLamps, areaLamps}) => {
    // console.log([areaLamps])
  return (
    <div>
      {areaLamps?.map((name) => {<div>{name.name}</div>})}
      <LampSwitch setLamps={setLamps}/>
    </div>
  )
}
