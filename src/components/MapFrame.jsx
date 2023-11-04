/* eslint-disable react/prop-types */

import { getAreaInfo } from "../utils/utils"

export const MapFrame = ({lampState, currentArea}) => {
  let mapImage = (getAreaInfo(currentArea).mapImage) || "./src/assets/images/ShiokazePier.png"
  return (
    <div>
      <div className="lampBox">
      {
        lampState?.map((name) => {return (<div>{name.name}</div>)})
      }
      </div>
      <img src={mapImage} className="map-img" />
    </div>
  )
}
