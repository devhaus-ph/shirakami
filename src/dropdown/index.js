import './styles.css'
import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Button from '../button'

function Dropdown(props) {
  const VISIBLE = 'menu-active'
  const refToggleButton = useRef()
  const [displayStatus, setDisplayStatus] = useState('')
  const openDropdownMenu = () => setDisplayStatus(VISIBLE)
  const closeDropdownMenu = () => setDisplayStatus('')

  function toggleDropdownMenu() {
    displayStatus !== VISIBLE ? openDropdownMenu() : closeDropdownMenu()
  }

  function handleClickOutside(e) {
    if (!refToggleButton.current.contains(e.target)) closeDropdownMenu()
  }

  useEffect(() => {
    document.body.addEventListener('click', handleClickOutside)
    return () => document.body.removeEventListener('click', handleClickOutside)
  }, [displayStatus])

  return (
    <div className="dropdown">
      <div ref={refToggleButton} onClick={toggleDropdownMenu}>
        <Button variant="icon" icon={props.icon} iconSize={props.iconSize} />
      </div>
      <dl className={`menu ${displayStatus}`}>{props.children}</dl>
    </div>
  )
}

Dropdown.Item = props => {
  let styleName = [props.component, props.className].join(' ').trim()
  return (
    <dt className={styleName} onClick={props.onClick}>
      {props.children}
    </dt>
  )
}

/*---------------
    PropTypes
---------------*/
Dropdown.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  icon: PropTypes.string,
  iconSize: PropTypes.number,
}

Dropdown.Item.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
  onClick: PropTypes.func,
}

/*-------------------
    Default Props
-------------------*/
Dropdown.defaultProps = {
  icon: 'more',
  iconSize: 18,
}

Dropdown.Item.defaultProps = {
  component: 'item',
}

export default Dropdown
