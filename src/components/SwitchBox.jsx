/* eslint-disable react/prop-types */

import { getAreaLamps } from "../utils/utils"
import { LampsContext } from "../contexts/LampContext"
import { LampHoverTrigger } from "./LampHoverTrigger"
import { Fragment, useContext } from "react"


export const SwitchBox = () => {
  const { lampState, resetState, currentArea, setLampState } = useContext(LampsContext)
  let currentAreaLamps = getAreaLamps(currentArea)

  const toggleLamp = (e) => {
    e.preventDefault()

    // GET LAMP INDEX, set the state of a specific lamp depending on switch
    let index = e.target.value;
    let newState = [...lampState]
    newState[index] = !lampState[index]
    setLampState(newState)
}

  const LampSwitch = ({lamp, index}) => {
      return (
        <>
          <div style={{position: "relative"}}>
            <button 
            onClick={toggleLamp} 
            className={`lamp-button ${lampState[index] && "switch-active"}`} 
            value={index}>
              {lamp.name}
                <div className="switch-extra-info">
                  {(lamp.sourcereq > 0) && <span className="source-req">{lamp.sourcereq}</span>}
                  {(lamp.airship == ("true" || "upgraded")) && <img src="./src/assets/images/airship.png" className={`icon ${(lamp.airship == "upgraded") && "upgraded"}`}/> }
                </div>
            </button>
                <LampHoverTrigger index={index}></LampHoverTrigger>
          </div>
        </>
      )
  }

  return (
    <>
      <form className="switch-grid">
        {
          currentAreaLamps.map((lamp,index) => {
            return (
              <Fragment key={index}>
                <LampSwitch index={index} lamp={lamp} />
              </Fragment>
            );
          })
        }
      </form>
      <button onClick={resetState}>Reset State</button>
    </>
  )
}
