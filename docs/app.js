import React from 'react'
import {
  Container,
  Flex,
  Titlebar,
  Toolbar,
  Sidebar,
  Button,
  Pagination,
  Field,
  Select,
} from '../src'

function App() {
  return (
    <Container>
      <Titlebar abbr="Q-PHN">Quirino - Public Health and Nutrition</Titlebar>
      <Flex direction="row">
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
        <Flex fullwidth>
          <h1>Users</h1>
          <Toolbar direction="row">
            <Button variant="icon" icon="add" />
            <Button variant="icon" icon="filter" />
            <Button variant="icon" icon="refresh" />
          </Toolbar>
          <Field>
            <Field.Label>Municipal</Field.Label>
            <Select>
              <Select.Option>Cabarroguis</Select.Option>
              <Select.Option>Diffun</Select.Option>
              <Select.Option>Saguday</Select.Option>
            </Select>
          </Field>
          <Field>
            <Field.Label>Barangay</Field.Label>
            <Select>
              <Select.Option>Gundaway</Select.Option>
              <Select.Option>Zamora</Select.Option>
              <Select.Option>Villamor</Select.Option>
            </Select>
          </Field>
          <Pagination activePage={5} totalPages={10} />
        </Flex>
      </Flex>
    </Container>
  )
}

export default App
