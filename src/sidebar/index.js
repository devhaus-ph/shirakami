import './styles.css'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '../button'

function Sidebar(props) {
  // Create sidebar visibility state
  const [visibility, setVisibility] = useState('')

  // Create sidebar actions
  const openSidebar = () => setVisibility('sk-sidebar-show')
  const closeSidebar = () => setVisibility('')

  // Create sidebar mobile menu
  let sidebarMobileMenu = visibility ? (
    <Button onClick={closeSidebar} variant="text">
      Close
    </Button>
  ) : (
    <Button onClick={openSidebar} variant="text">
      Menu
    </Button>
  )

  // Build CSS classes
  const styleName = ['sk-sidebar', props.className].join(' ').trim()

  return (
    <aside className={styleName}>
      <div className={`sk-sidebar-content ${visibility}`.trim()}>
        {props.children}
      </div>
      <div className="sk-sidebar-mobile-menu">{sidebarMobileMenu}</div>
    </aside>
  )
}

/*--  Sub Components  --*/
Sidebar.Menu = props => {
  const className = ['sk-sidebar-menu', props.className].join(' ').trim()
  const label = props.label && (
    <label className="sk-sidebar-label">{props.label}</label>
  )

  return (
    <dl className={className}>
      {label}
      {props.children}
    </dl>
  )
}

/*--  PropTypes  --*/

Sidebar.Menu.propTypes = {
  label: PropTypes.string,
}

export default Sidebar
