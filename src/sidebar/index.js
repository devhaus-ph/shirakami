import './styles.css'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '../button'

function Sidebar(props) {
  const styleName = ['sidebar', props.className].join(' ').trim()
  const [displayStatus, setDisplayStatus] = useState('')
  const openSidebar = () => setDisplayStatus('active')
  const closeSidebar = () => setDisplayStatus('')

  let sidebarFooter = displayStatus ? (
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
    <aside className={styleName}>
      <div className={`content ${displayStatus}`.trim()}>{props.children}</div>
      <div className="footer">{sidebarFooter}</div>
    </aside>
  )
}

/*----------------
    Components
----------------*/
Sidebar.Menu = props => {
  const styleName = ['menu', props.className].join(' ').trim()
  let label = props.label && <label className="label">{props.label}</label>

  return (
    <dl className={styleName}>
      {label}
      {props.children}
    </dl>
  )
}

Sidebar.Item = props => {
  const styleName = ['item', props.className].join(' ').trim()
  return <dt className={styleName}>{props.children}</dt>
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

Sidebar.Item.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default Sidebar
