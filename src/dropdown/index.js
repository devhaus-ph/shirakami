import './styles.css'
import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Button } from './../'

const VISIBLE = 'dropdown-menu-active'

function Dropdown(props) {
  const refToggleButton = useRef()

  // List of CSS class in object styleName.
  const [styleName, setStyleName] = useState({
    dropdownMenu: 'dropdown-menu',
    status: '',
  })

  // Adds an event that closes the component.
  // Remove the event if the component was destroyed.
  useEffect(() => {
    document.body.addEventListener('click', handleClickOutside)
    return () => document.body.removeEventListener('click', handleClickOutside)
  }, [styleName])

  function handleClickOutside(e) {
    if (!refToggleButton.current.contains(e.target)) closeDropdownMenu()
  }

  function toggleDropdownMenu() {
    if (styleName.status !== VISIBLE) openDropdownMenu()
    if (styleName.status === VISIBLE) closeDropdownMenu()
  }

  function openDropdownMenu() {
    setStyleName({ ...styleName, status: VISIBLE })
  }

  function closeDropdownMenu() {
    setStyleName({ ...styleName, status: '' })
  }

  styleName.values = () => Object.values(styleName).join(' ')

  return (
    <div className="dropdown">
      <div
        className="dropdown-toggle"
        ref={refToggleButton}
        onClick={toggleDropdownMenu}>
        <Button variant="icon" icon={props.icon} iconSize={props.iconSize} />
      </div>
      <div className={styleName.values()}>{props.children}</div>
    </div>
  )
}

Dropdown.Menu = (props) => <dl>{props.children}</dl>

Dropdown.Item = (props) => (
  <dt className="dropdown-item" onClick={props.onClick}>
    {props.children}
  </dt>
)

/*---------------
    PropTypes
---------------*/
Dropdown.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.string,
  iconSize: PropTypes.number,
}

Dropdown.Menu.propTypes = {
  children: PropTypes.node,
}

Dropdown.Item.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
}

/*-------------------
    Default Props
-------------------*/
Dropdown.defaultProps = {
  icon: 'more',
  iconSize: 18,
}

export default Dropdown
