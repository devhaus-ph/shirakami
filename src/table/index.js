import './styles.css'
import React from 'react'
import PropTypes from 'prop-types'

function Table(props) {
  // Initialize listHeaderCell as a list of TH element
  // Loop through the headerCells prop
  const listHeaderCell = props.headerCells.map((headerCell, index) => {
    // Initialize CSS classes from properties of headerCell
    const capitalize = headerCell.capitalize && 'sk-table-th-capitalize'
    const minWidth = headerCell.minWidth && 'sk-table-th-min-width'
    const textRight = headerCell.textRight && 'sk-table-th-right'

    // Initialize main CSS class for TH element
    // Compile all CSS classes in array and concatenate
    const classHeaderCell = 'sk-table-header-cell'
    let className = [classHeaderCell, capitalize, minWidth, textRight]
    className = className.join(' ').trim()

    // Render a TH element
    return (
      <th key={index} className={className} title={headerCell.title}>
        {headerCell.name}
      </th>
    )
  })

  // Render a table element
  return (
    <div className="sk-table-container">
      <table className="sk-table">
        <thead className="sk-table-header">
          <tr className="sk-table-row">{listHeaderCell}</tr>
        </thead>
        <tbody className="sk-table-body">{props.children}</tbody>
      </table>
    </div>
  )
}

/*--------------------
    Sub Components
--------------------*/
Table.Row = props => {
  // Initialize main CSS class
  // Concatenate className prop
  const className = ['sk-table-row', props.className].join(' ').trim()

  // Render a TR element
  return (
    <tr {...props} className={className}>
      {props.children}
    </tr>
  )
}

Table.Cell = props => {
  // Initialize CSS classes from props
  const textRight = props.textRight && 'sk-table-th-right'
  const minWidth = props.minWidth && 'sk-table-th-min-width'
  const capitalize = props.capitalize && 'sk-table-th-capitalize'

  // Initialize main CSS class for TD element
  // Compile all CSS classes in array and concatenate
  const classCell = 'sk-table-cell'
  let className = [classCell, minWidth, textRight, capitalize, props.className]
  className = className.join(' ').trim()

  // Render a TD element
  return <td className={className}>{props.children}</td>
}

/*----------------
    Prop Types
----------------*/
Table.propTypes = {
  children: PropTypes.node,
  headerCell: PropTypes.array,
}

Table.Row.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

Table.Cell.propTypes = {
  capitalize: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  minWidth: PropTypes.bool,
  textRight: PropTypes.bool,
}

export default Table
