import './styles.css'
import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Button from '../button'

function Dropdown(props) {
  // Create dropdown menu visibility state
  const [visibility, setVisibility] = useState(false)

  // Create dropdown actions
  const execute = {
    openDropdownMenu: function() {
      setVisibility(true)
    },
    closeDropdownMenu: function() {
      setVisibility(false)
    },
    toggleDropdownMenu: function() {
      visibility ? execute.closeDropdownMenu() : execute.openDropdownMenu()
    },
    handleClickOutside: function(e) {
      if (!refToggleButton.current.contains(e.target))
        execute.closeDropdownMenu()
    },
  }

  // Create event listener outside component
  useEffect(() => {
    document.body.addEventListener('click', execute.handleClickOutside)
    return () =>
      document.body.removeEventListener('click', execute.handleClickOutside)
  })

  // Create toggle button
  const refToggleButton = useRef()
  const toggleButton = (
    <div ref={refToggleButton} onClick={execute.toggleDropdownMenu}>
      <Button
        variant="icon"
        icon={props.icon}
        iconSize={props.iconSize}
        transparent
      />
    </div>
  )

  // Build CSS classes
  const dropdownMenuStyle = 'sk-dropdown-menu'
  const isVisible = visibility ? 'sk-dropdown-menu-show' : ''
  const styleName = [dropdownMenuStyle, isVisible].join(' ').trim()

  return (
    <div className="dropdown">
      {toggleButton}
      <dl className={styleName}>{props.children}</dl>
    </div>
  )
}

/*--  Sub Component  --*/
Dropdown.Item = props => {
  // Separate HTML attribute props
  const { children, className, ...other } = props

  // Build CSS classes
  const dropdownItemStyle = 'sk-dropdown-item'
  let styleName = [dropdownItemStyle, className].join(' ').trim()

  return (
    <dt className={styleName} {...other}>
      {children}
    </dt>
  )
}

/*--  Prop Types  --*/
Dropdown.propTypes = {
  icon: PropTypes.string,
  iconSize: PropTypes.number,
}

Dropdown.Item.propTypes = {
  onClick: PropTypes.func,
}

/*--  Default Props  --*/
Dropdown.defaultProps = {
  icon: 'more-vertical',
  iconSize: 18,
}

export default Dropdown
