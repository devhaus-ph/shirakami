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

Table.Row = props => {
  const className = ['row', props.className].join(' ').trim()

  return (
    <tr
      className={className}
      onClick={props.onClick}
      onDoubleClick={props.onDoubleClick}>
      {props.children}
    </tr>
  )
}

Table.Cell = props => {
  const minWidth = props.minWidth && 'min-width'
  const textRight = props.textRight && 'right'
  const capitalize = props.capitalize && 'capitalize'
  let className = ['cell', minWidth, textRight, capitalize, props.className]
  className = className.join(' ').trim()
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
  textRight: PropTypes.bool,
  title: PropTypes.string,
}

Table.Row.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  onDoubleClick: PropTypes.func,
}

Table.Cell.propTypes = {
  capitalize: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  minWidth: PropTypes.bool,
  textRight: PropTypes.bool,
}

export default Table
