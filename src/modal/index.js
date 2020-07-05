import './styles.css'
import React from 'react'
import PropTypes from 'prop-types'

function Modal(props) {
  const displayStatus = () => (props.display ? 'modal-active' : '')
  const styleName = ['modal', displayStatus()].join(' ')

  return (
    <div className={styleName}>
      <div className="container modal-container">
        <Modal.Toggle />
        {props.children}
      </div>
    </div>
  )
}

Modal.Toggle = (props) => (
  <div className="modal-close-button" onClick={props.onClick}>
    {props.children}
  </div>
)

Modal.propTypes = {
  children: PropTypes.node,
  display: PropTypes.bool,
}

Modal.Toggle.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
}

export default Modal
