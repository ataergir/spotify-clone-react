import React from 'react'
import "./SidebarIcon.css"

function SidebarIcon({ Icon }) {
  return (
    <div className='sidebarIcons'>
        <Icon className="sidebar__icon" />
    </div>
  )
}

export default SidebarIcon