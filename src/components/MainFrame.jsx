/* eslint-disable react/prop-types */
import { MapChanger } from './MapChanger'
import { MapFrame } from './MapFrame'
import { SwitchBox } from './SwitchBox'



export const MainFrame = () => {
  return (
    <main className='main-frame'>
      <section name="MapFrame" className='content-col'>
        <MapChanger />
        <MapFrame/>
      </section>

      <section>
        <SwitchBox/>
      </section>
    </main>
  )
}