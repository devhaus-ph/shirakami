import './styles.css'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '../button'
import Container from '../container'

function Modal(props) {
  const VISIBLE = 'visible'
  const [displayStatus, setDisplayStatus] = useState('')
  const openModal = () => setDisplayStatus(VISIBLE)
  const closeModal = () => setDisplayStatus('')
  let modal = <>{openButton}</>

  const openButton = (
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

  if (displayStatus) {
    modal = (
      <div>
        {openButton}
        <div className="modal">
          <Container>
            {closeButton}
            {props.children}
          </Container>
        </div>
      </div>
    )
  } else {
    modal = <>{openButton}</>
  }

  return modal
}

Modal.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.string,
}

Modal.defaulProps = {
  icon: 'filter',
}

export default Modal
