import React, { useState } from 'react'
import {
  Container,
  Content,
  Titlebar,
  Toolbar,
  Sidebar,
  Button,
  Table,
  Pagination,
} from '../src'

function App() {
  const [displayModal, setDisplayModal] = useState(false)

  function openFilterModal() {
    setDisplayModal(true)
  }
  function closeFilterModal() {
    setDisplayModal(false)
  }

  return (
    <Container>
      <Titlebar>Shirakami UI by DevHaus Innovations</Titlebar>
      <Content direction="row">
        <Sidebar>
          <Sidebar.Menu>
            <Sidebar.Item>Dashboard</Sidebar.Item>
            <Sidebar.Item>Users</Sidebar.Item>
            <Sidebar.Item>Profiles</Sidebar.Item>
            <Sidebar.Item>Location</Sidebar.Item>
          </Sidebar.Menu>

          <Sidebar.Menu>
            <Sidebar.Label>DRRM</Sidebar.Label>
            <Sidebar.Item>Health</Sidebar.Item>
          </Sidebar.Menu>
        </Sidebar>
        <Content width="full">
          <h1>Users</h1>
          <Toolbar direction="row">
            <Button variant="icon" icon="add" />
            <Button variant="icon" icon="filter" onClick={openFilterModal} />
            <Button variant="icon" icon="refresh" />
          </Toolbar>
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Role</Table.HeaderCell>
                <Table.HeaderCell>Status</Table.HeaderCell>
                <Table.HeaderCell>Updated</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Cliemtor Fabros</Table.Cell>
                <Table.Cell>Admin</Table.Cell>
                <Table.Cell>Active</Table.Cell>
                <Table.Cell right>2019-08-12</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Cliemtor Fabros</Table.Cell>
                <Table.Cell>Admin</Table.Cell>
                <Table.Cell>Active</Table.Cell>
                <Table.Cell right>2019-08-12</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Cliemtor Fabros</Table.Cell>
                <Table.Cell>Admin</Table.Cell>
                <Table.Cell>Active</Table.Cell>
                <Table.Cell right>2019-08-12</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Pagination activePage={2} totalPages={10} />
          <Button>Submit</Button>
          <p />
          <Button variant="outline">Submit</Button>
          <p />
          <Button variant="text">Submit</Button>
          <p />
          <Button variant="icon" icon="user" />
        </Content>
      </Content>
    </Container>
  )
}

export default App
