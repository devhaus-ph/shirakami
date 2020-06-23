import './styles.css'
import React from 'react'
import PropTypes from 'prop-types'

function Pagination({ activePage, totalPages }) {
  const remainingPage = totalPages - activePage

  Pagination.First = () => {
    if (activePage > 2) return <li className="pagination__item">1</li>
    if (activePage <= 2) return <li className="hidden" />
  }

  Pagination.FirstToPrevious = () => {
    if (activePage > 3) {
      if (activePage - 2 <= 2) {
        return <li className="pagination__item">{activePage - 2}</li>
      }
      if (activePage - 2 >= 3) {
        return <li className="pagination__ellipsis">...</li>
      }
    }
    if (activePage <= 3) {
      return <li className="hidden" />
    }
  }

  Pagination.Previous = () => {
    if (activePage >= 2) {
      return <li className="pagination__item">{activePage - 1}</li>
    }
    if (activePage < 2) {
      return <li className="hidden" />
    }
  }

  Pagination.Active = () => {
    return <li className="pagination__item--active">{activePage}</li>
  }

  Pagination.Next = () => {
    if (remainingPage >= 1) {
      return <li className="pagination__item">{activePage + 1}</li>
    }
    if (remainingPage < 1) {
      return <li className="hidden" />
    }
  }

  Pagination.NextToLast = () => {
    if (remainingPage > 2) {
      if (totalPages - (activePage + 1) <= 2) {
        return <li className="pagination__item">{activePage + 2}</li>
      }
      if (totalPages - (activePage + 1) >= 3) {
        return <li className="pagination__ellipsis">...</li>
      }
    }
    if (remainingPage <= 2) {
      return <li className="hidden" />
    }
  }

  Pagination.Last = () => {
    if (remainingPage > 1) {
      return <li className="pagination__item">{totalPages}</li>
    }
    if (remainingPage <= 1) {
      return <li className="hidden" />
    }
  }

  return (
    <ul className="app__pagination">
      <Pagination.First />
      <Pagination.FirstToPrevious />
      <Pagination.Previous />
      <Pagination.Active />
      <Pagination.Next />
      <Pagination.NextToLast />
      <Pagination.Last />
    </ul>
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
