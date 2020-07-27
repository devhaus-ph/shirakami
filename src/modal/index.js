import './styles.css'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '../button'

function Modal(props) {
  const [visibility, setVisibility] = useState(false)
  const openModal = () => setVisibility(true)
  const closeModal = () => setVisibility(false)
  let modal = <>{btnOpenModal}</>

  const btnOpenModal = (
    <Button variant="icon" icon={props.icon} onClick={openModal} />
  )

  const closeButton = (
    <Button
      onClick={closeModal}
      className="close-button"
      variant="icon"
      icon="close"
      iconSize={18}
    />
  )

  if (visibility) {
    modal = (
      <div>
        {btnOpenModal}
        <div className="modal">
          <div className="container">
            {closeButton}
            {props.children}
          </div>
        </div>
      </div>
    )
  } else {
    modal = <>{btnOpenModal}</>
  }

  return modal
}

Modal.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.string.isRequired,
}

export default Modal
