import './styles.css'
import React from 'react'
import PropTypes from 'prop-types'

function Table(props) {
  return (
    <table className={`table ${props.className}`.trim()}>
      {props.children}
    </table>
  )
}

Table.Header = (props) => (
  <thead className={`table-header ${props.className}`.trim()}>
    {props.children}
  </thead>
)

Table.Body = (props) => (
  <tbody className={`table-body ${props.className}`.trim()}>
    {props.children}
  </tbody>
)

Table.HeaderCell = (props) => (
  <th className={`table-headercell ${props.className}`.trim()}>
    {props.children}
  </th>
)

Table.Row = (props) => (
  <tr className={`table-row ${props.className}`.trim()}>{props.children}</tr>
)

Table.Cell = (props) => (
  <td className={`table-cell ${props.className}`.trim()}>{props.children}</td>
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
