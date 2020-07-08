import './styles.css'
import React from 'react'
import PropTypes from 'prop-types'

function Pagination({ activePage, totalPages }) {
  const remainingPage = totalPages - activePage

  Pagination.First = () => {
    if (activePage > 2) return <a className="item">1</a>
    if (activePage <= 2) return <div className="hidden"></div>
  }

  Pagination.FirstToPrevious = () => {
    if (activePage > 3) {
      if (activePage - 2 <= 2) {
        return <a className="item">{activePage - 2}</a>
      }
      if (activePage - 2 >= 3) {
        return <a className="ellipsis">...</a>
      }
    }
    if (activePage <= 3) {
      return <div className="hidden"></div>
    }
  }

  Pagination.Previous = () => {
    if (activePage >= 2) {
      return <a className="item">{activePage - 1}</a>
    }
    if (activePage < 2) {
      return <div className="hidden"></div>
    }
  }

  Pagination.Active = () => {
    return <a className="item active">{activePage}</a>
  }

  Pagination.Next = () => {
    if (remainingPage >= 1) {
      return <a className="item">{activePage + 1}</a>
    }
    if (remainingPage < 1) {
      return <div className="hidden"></div>
    }
  }

  Pagination.NextToLast = () => {
    if (remainingPage > 2) {
      if (totalPages - (activePage + 1) <= 2) {
        return <a className="item">{activePage + 2}</a>
      }
      if (totalPages - (activePage + 1) >= 3) {
        return <a className="ellipsis">...</a>
      }
    }
    if (remainingPage <= 2) {
      return <div className="hidden"></div>
    }
  }

  Pagination.Last = () => {
    if (remainingPage > 1) {
      return <a className="item">{totalPages}</a>
    }
    if (remainingPage <= 1) {
      return <div className="hidden"></div>
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
