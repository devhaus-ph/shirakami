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

/*--------------------
    Sub Components
--------------------*/
Table.Header = props => (
  <thead className={`header ${props.className}`.trim()}>{props.children}</thead>
)

Table.Body = props => (
  <tbody className={`body ${props.className}`.trim()}>{props.children}</tbody>
)

Table.HeaderCell = props => {
  const textRight = props.textRight && 'right'
  const className = ['headercell', textRight, props.className].join(' ').trim()

  return (
    <th className={className} title={props.title}>
      {props.children}
    </th>
  )
}

Table.Row = props => (
  <tr className={`row ${props.className}`.trim()}>{props.children}</tr>
)

Table.Cell = props => {
  const textRight = props.textRight && 'right'
  const className = ['cell', textRight, props.className].join(' ').trim()
  return <td className={className}>{props.children}</td>
}

/*----------------
    Prop Types
----------------*/
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
  textRight: PropTypes.string,
  title: PropTypes.string,
}

Table.Row.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

Table.Cell.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default Table
