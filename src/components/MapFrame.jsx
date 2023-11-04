/* eslint-disable react/prop-types */

export const MapFrame = ({mapImage, lampState}) => {
  return (
    <div>
      {
        lampState?.map((name) => {<div>{name.name}</div>})
      }
      <img src={mapImage} className="map-img" />
    </div>
  )
}
