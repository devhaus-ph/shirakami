import './styles.css'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '../button'

function Sidebar(props) {
  const className = ['sidebar', props.className].join(' ').trim()
  const [visibility, setVisibility] = useState('')
  const openSidebar = () => setVisibility('show')
  const closeSidebar = () => setVisibility('')

  let sidebarMobileMenu = visibility ? (
    <React.Fragment>
      <Button variant="text">Logout</Button>
      <Button onClick={closeSidebar} variant="text">
        Close
      </Button>
    </React.Fragment>
  ) : (
    <Button onClick={openSidebar} variant="text">
      Menu
    </Button>
  )

  return (
    <aside className={className}>
      <div className={`content ${visibility}`.trim()}>{props.children}</div>
      <div className="mobile-menu">{sidebarMobileMenu}</div>
    </aside>
  )
}

/*----------------
    Components
----------------*/
Sidebar.Menu = props => {
  const className = ['menu', props.className].join(' ').trim()
  const label = props.label && <label className="label">{props.label}</label>

  return (
    <dl className={className}>
      {label}
      {props.children}
    </dl>
  )
}

/*---------------
    PropTypes
---------------*/
Sidebar.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

Sidebar.Menu.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  label: PropTypes.string,
}

export default Sidebar
