import './styles.css'
import React from 'react'
import PropTypes from 'prop-types'

function Pagination({ activePage, totalPages }) {
  const remainingPage = totalPages - activePage
  const renderActive = <a className="item active">{activePage}</a>
  const renderHidden = <div className="hidden"></div>
  const renderEllipsis = <a className="ellipsis">...</a>

  function renderItem(children) {
    return <a className="item">{children}</a>
  }

  const first = () => {
    if (activePage > 2) return renderItem(1)
    if (activePage <= 2) return renderHidden
  }

  const firstToPrevious = () => {
    if (activePage > 3) {
      if (activePage - 2 <= 2) return renderItem(activePage - 2)
      if (activePage - 2 >= 3) return renderEllipsis
    }
    if (activePage <= 3) return renderHidden
  }

  const previous = () => {
    if (activePage >= 2) return renderItem(activePage - 1)
    if (activePage < 2) return renderHidden
  }

  const active = () => {
    return renderActive
  }

  const next = () => {
    if (remainingPage >= 1) return renderItem(activePage + 1)
    if (remainingPage < 1) return renderHidden
  }

  const nextToLast = () => {
    if (remainingPage > 2) {
      let condition = totalPages - (activePage + 1)
      if (condition <= 2) return renderItem(activePage + 2)
      if (condition >= 3) return renderEllipsis
    }
    if (remainingPage <= 2) return renderHidden
  }

  const last = () => {
    if (remainingPage > 1) return renderItem(totalPages)
    if (remainingPage <= 1) return renderHidden
  }

  return (
    <div className="pagination">
      {first()}
      {firstToPrevious()}
      {previous()}
      {active()}
      {next()}
      {nextToLast()}
      {last()}
    </div>
  )
}

Pagination.propTypes = {
  activePage: PropTypes.number,
  totalPages: PropTypes.number,
}

Pagination.defaultProps = {
  activePage: 1,
  totalPages: 1,
}

export default Pagination
