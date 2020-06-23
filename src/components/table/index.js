import './styles.css'
import React from 'react'
import PropTypes from 'prop-types'

function Table(props) {
  return (
    <table className={`app__table ${props.className}`}>{props.children}</table>
  )
}

Table.Header = (props) => (
  <thead className={`table__header ${props.className}`}>{props.children}</thead>
)

Table.Body = (props) => (
  <tbody className={`table__body ${props.className}`}>{props.children}</tbody>
)

Table.HeaderCell = (props) => (
  <th className={`table__headercell ${props.className}`}>{props.children}</th>
)

Table.Row = (props) => (
  <tr className={`table__row ${props.className}`}>{props.children}</tr>
)

Table.Cell = (props) => (
  <td className={`table__cell ${props.className}`}>{props.children}</td>
)

Table.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

Table.Header.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

Table.Body.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

Table.HeaderCell.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

Table.Row.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

Table.Cell.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

Table.defaultProps = {
  className: '',
}

Table.Header.defaultProps = {
  className: '',
}

Table.Body.defaultProps = {
  className: '',
}

Table.HeaderCell.defaultProps = {
  className: '',
}

Table.Row.defaultProps = {
  className: '',
}

Table.Cell.defaultProps = {
  className: '',
}

export default Table
