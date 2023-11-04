/* eslint-disable react/prop-types */

import { getAreaLamps } from "../utils/utils"



export const SwitchBox = ({setLamps, lampState, currentArea}) => {
  let currentAreaLamps = getAreaLamps(currentArea)

  const LampSwitch = ({lamp, index}) => {
      return (
        <>
          <button onClick={setLamps} className={`lamp-button ${lampState[index] && "lamp-active"}`} value={index}>
            {lamp.name}
            <div className="lamp-extra-info">
            {(lamp.sourcereq > 0) && <span className="source-req">{lamp.sourcereq}</span>}
          { (lamp.airship == ("true" || "upgraded")) && <img src="./src/assets/images/airship.png" className={`icon ${(lamp.airship == "upgraded") && "upgraded"}`}/> }
            </div>
          </button>
        </>
      )
  }

  return (
    <form onSubmit={setLamps} className="lamp-grid">
      {
        currentAreaLamps.map((lamp,index) => {
          return (
            <>
              <LampSwitch key={index} index={index} lamp={lamp} />
            </>
          );
        })
      }
    </form>
  )
}
