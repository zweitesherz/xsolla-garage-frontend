import React from 'react'
import CalendarAndHello from '../CalendarAndHello/CalendarAndHello'
import { sideBar } from './SideBarStyles.module.css'

const SideBar = () => {
  return (
    <aside className={sideBar}>
      <CalendarAndHello/>
    </aside>
  )
}
export default SideBar