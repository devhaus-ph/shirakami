import './styles.css'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '../button'

function Sidebar(props) {
  const styleName = [props.component, props.className].join(' ').trim()
  const [displayStatus, setDisplayStatus] = useState('')
  const openSidebar = () => setDisplayStatus('active')
  const closeSidebar = () => setDisplayStatus('')

  let sidebarFooter
  if (displayStatus) {
    sidebarFooter = (
      <div className="sidebar-footer">
        <Button variant="text">Logout</Button>
        <Button onClick={closeSidebar} variant="text">
          Close
        </Button>
      </div>
    )
  } else {
    sidebarFooter = (
      <div className="sidebar-footer">
        <Button onClick={openSidebar} variant="text">
          Menu
        </Button>
      </div>
    )
  }

  return (
    <aside className={styleName}>
      <div className={`sidebar-content ${displayStatus}`.trim()}>
        {props.children}
      </div>
      {sidebarFooter}
    </aside>
  )
}

/*----------------
    Components
----------------*/
Sidebar.Menu = (props) => {
  const styleName = [props.component, props.className].join(' ').trim()
  return <dl className={styleName}>{props.children}</dl>
}

Sidebar.Label = (props) => {
  const styleName = [props.component, props.className].join(' ').trim()
  return <label className={styleName}>{props.children}</label>
}

Sidebar.Item = (props) => {
  const styleName = [props.component, props.className].join(' ').trim()
  return <dt className={styleName}>{props.children}</dt>
}

/*---------------
    PropTypes
---------------*/
Sidebar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

Sidebar.Menu.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  label: PropTypes.string,
}

Sidebar.Label.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

Sidebar.Item.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

/*-------------------
    Deafult Props
-------------------*/
Sidebar.defaultProps = {
  component: 'sidebar',
}

Sidebar.Menu.defaultProps = {
  component: 'sidebar-menu',
}

Sidebar.Label.defaultProps = {
  component: 'sidebar-label',
}

Sidebar.Item.defaultProps = {
  component: 'sidebar-item',
}

export default Sidebar
