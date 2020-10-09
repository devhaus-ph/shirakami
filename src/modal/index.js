import './styles.css'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '../button'

function Modal(props) {
  // Create modal visibility state
  const [visibility, setVisibility] = useState(false)

  // Create modal actions
  const openModal = () => setVisibility(true)
  const closeModal = () => setVisibility(false)

  // Create button to open modal
  const btnOpenModal = (
    <Button variant="icon" icon={props.icon} onClick={openModal} />
  )

  // Create modal
  let modal = <React.Fragment>{btnOpenModal}</React.Fragment>

  // Create close button for modal
  const closeButton = (
    <Button
      onClick={closeModal}
      className="sk-modal-close-button"
      variant="icon"
      icon="close"
      iconSize={18}
    />
  )

  // Evaluate modal visibility
  if (visibility) {
    modal = (
      <div>
        {btnOpenModal}
        <div className="sk-modal">
          <div className="sk-modal-container">
            {closeButton}
            {props.children}
          </div>
        </div>
      </div>
    )
  } else {
    modal = <React.Fragment>{btnOpenModal}</React.Fragment>
  }

  return modal
}

Modal.propTypes = {
  icon: PropTypes.string.isRequired,
}

export default Modal
