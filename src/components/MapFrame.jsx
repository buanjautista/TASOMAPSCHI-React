/* eslint-disable react/prop-types */

import { nanoid } from "nanoid"
import { getAreaInfo } from "../utils/utils"

export const MapFrame = ({lampState, currentArea}) => {
  let areaInfo = getAreaInfo(currentArea)
  let lampInfo = areaInfo.lamps
  let mapImage = (areaInfo.mapImage) || "./src/assets/images/ShiokazePier.png"


  return (
    <div>
      <img src={mapImage} className="map-img" />
      <div className="lamp-box">
      {
        lampState?.map((lamp,index) => {
          return (lampState[index] && 
            <div key={nanoid()} className="lamp-icon" style={{top: `${lampInfo[index].y}px`, left: `${lampInfo[index].x}px`}}>
              {
                lampInfo.airship == ("true" || "upgraded") 
                  ? <img className="icon" src="./src/assets/images/airship.png"/>
                  : <img className="icon" src="./src/assets/images/sourceLamp.png"/>
              }
              {lamp}
            </div>)
        })
      }
      </div>
    </div>
  )
}
