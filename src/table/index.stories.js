import React from 'react'
import { Table } from '../'

export default {
  title: 'Elements/Table',
  component: Table,
}

export const basic = () => (
  <Table>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell title="Long long long title">Name</Table.HeaderCell>
        <Table.HeaderCell textRight>Age</Table.HeaderCell>
        <Table.HeaderCell>Sex</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Cell>Luffy</Table.Cell>
        <Table.Cell textRight>18</Table.Cell>
        <Table.Cell>Male</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Zoro</Table.Cell>
        <Table.Cell textRight>18</Table.Cell>
        <Table.Cell>Male</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Nami</Table.Cell>
        <Table.Cell textRight>18</Table.Cell>
        <Table.Cell>Female</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Ussop</Table.Cell>
        <Table.Cell textRight>18</Table.Cell>
        <Table.Cell>Male</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Sanji</Table.Cell>
        <Table.Cell textRight>18</Table.Cell>
        <Table.Cell>Male</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Chopper</Table.Cell>
        <Table.Cell textRight>6</Table.Cell>
        <Table.Cell>Male</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Robin</Table.Cell>
        <Table.Cell textRight>18</Table.Cell>
        <Table.Cell>Female</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)
