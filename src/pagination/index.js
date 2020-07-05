import './styles.css'
import React from 'react'
import PropTypes from 'prop-types'

function Pagination({ activePage, totalPages }) {
  const remainingPage = totalPages - activePage

  Pagination.First = () => {
    if (activePage > 2) return <a className="pagination-item">1</a>
    if (activePage <= 2) return <a className="hidden" />
  }

  Pagination.FirstToPrevious = () => {
    if (activePage > 3) {
      if (activePage - 2 <= 2) {
        return <a className="pagination-item">{activePage - 2}</a>
      }
      if (activePage - 2 >= 3) {
        return <a className="pagination-ellipsis">...</a>
      }
    }
    if (activePage <= 3) {
      return <a className="hidden" />
    }
  }

  Pagination.Previous = () => {
    if (activePage >= 2) {
      return <a className="pagination-item">{activePage - 1}</a>
    }
    if (activePage < 2) {
      return <a className="hidden" />
    }
  }

  Pagination.Active = () => {
    return <a className="pagination-item-active">{activePage}</a>
  }

  Pagination.Next = () => {
    if (remainingPage >= 1) {
      return <a className="pagination-item">{activePage + 1}</a>
    }
    if (remainingPage < 1) {
      return <a className="hidden" />
    }
  }

  Pagination.NextToLast = () => {
    if (remainingPage > 2) {
      if (totalPages - (activePage + 1) <= 2) {
        return <a className="pagination-item">{activePage + 2}</a>
      }
      if (totalPages - (activePage + 1) >= 3) {
        return <a className="pagination-ellipsis">...</a>
      }
    }
    if (remainingPage <= 2) {
      return <a className="hidden" />
    }
  }

  Pagination.Last = () => {
    if (remainingPage > 1) {
      return <a className="pagination-item">{totalPages}</a>
    }
    if (remainingPage <= 1) {
      return <a className="hidden" />
    }
  }

  return (
    <div className="pagination">
      <Pagination.First />
      <Pagination.FirstToPrevious />
      <Pagination.Previous />
      <Pagination.Active />
      <Pagination.Next />
      <Pagination.NextToLast />
      <Pagination.Last />
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
