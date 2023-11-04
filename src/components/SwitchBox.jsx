/* eslint-disable react/prop-types */

import { getAreaLamps } from "../utils/utils"



export const SwitchBox = ({setLamps, lampState, currentArea}) => {
  let currentAreaLamps = getAreaLamps(currentArea)

  const LampSwitch = ({lamp, index}) => {
      return (
        <>
          <button onClick={setLamps} className={`lamp-button ${lampState[index] && "switch-active"}`} value={index}>
            {lamp.name}
            <div className="switch-extra-info">
            {(lamp.sourcereq > 0) && <span className="source-req">{lamp.sourcereq}</span>}
          { (lamp.airship == ("true" || "upgraded")) && <img src="./src/assets/images/airship.png" className={`icon ${(lamp.airship == "upgraded") && "upgraded"}`}/> }
            </div>
          </button>
        </>
      )
  }

  return (
    <form onSubmit={setLamps} className="switch-grid">
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
