import React from 'react'
import { Table } from '../'

export default {
  title: 'Elements/Table',
  component: Table,
}

export const basic = () => {
  return (
    <Table
      headerCells={[
        { name: 'Name', title: 'First Middle Last' },
        { name: 'Email', title: 'Email' },
        { name: 'Sex', title: 'Sex', capitalize: true },
        { name: 'Age', title: 'Age', textRight: true },
      ]}>
      <Table.Row>
        <Table.Cell>Luffy</Table.Cell>
        <Table.Cell>luffy@op.com</Table.Cell>
        <Table.Cell capitalize>male</Table.Cell>
        <Table.Cell textRight>18</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Zoro</Table.Cell>
        <Table.Cell>zoro@op.com</Table.Cell>
        <Table.Cell capitalize>male</Table.Cell>
        <Table.Cell textRight>18</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Sanji</Table.Cell>
        <Table.Cell>sanji@op.com</Table.Cell>
        <Table.Cell capitalize>female</Table.Cell>
        <Table.Cell textRight>18</Table.Cell>
      </Table.Row>
    </Table>
  )
}
