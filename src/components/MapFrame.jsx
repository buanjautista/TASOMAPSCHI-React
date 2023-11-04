/* eslint-disable react/prop-types */

import { nanoid } from "nanoid"
import { convertPos, getAreaInfo } from "../utils/utils"
import MapImage1 from '/src/assets/images/ShiokazePier.png'
import MapImage2 from '/src/assets/images/FutagoBridge.png'
import MapImage3 from '/src/assets/images/GengetsuLakeside.png'

const getMapImage = (area) => {
  let mapImage
  switch(area) {
    case "Shiokaze": 
      mapImage = MapImage1;
      break;
    case "Futago":
      mapImage = MapImage2;
      break;
    case "Gengetsu":
      mapImage = MapImage3;
      break;
  }
  return mapImage || MapImage1
}

export const MapFrame = ({lampState, currentArea}) => {
  let areaInfo = getAreaInfo(currentArea)
  let lampInfo = areaInfo.lamps
  let mapImage = getMapImage(currentArea) || (areaInfo.mapImage)

  return (
    <>
      <div className="lamp-box">
      {
        lampState?.map((lamp,index) => {
          let coords = convertPos(lampInfo[index].x, lampInfo[index].y);
          return (lampState[index] && 
            <div key={nanoid()} className="lamp-icon" style={{top: `${coords.y}%`, left: `${coords.x}%`}}>
              {
                lampInfo.airship == ("true" || "upgraded") 
                ? <img className="icon" src="./src/assets/images/airship.png"/>
                : <img className="icon" src="./src/assets/images/sourceLamp.png"/>
              }
              {lamp}
            </div>)
        })
      }
      <img src={mapImage} className="map-img" />
      </div>
    </>
  )
}
