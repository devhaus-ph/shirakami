import React from 'react'
import {
  Container,
  Flex,
  Titlebar,
  Toolbar,
  Sidebar,
  Button,
  Pagination,
  Section,
} from '../src'

function App() {
  return (
    <Container>
      <Titlebar>Shirakami UI by DevHaus Innovations</Titlebar>
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
          <Section title="Personal Details">
            <Section.Field label="First Name">
              <p>Cliemtor</p>
            </Section.Field>
            <Section.Field label="Middle Name">
              <p>Bungag</p>
            </Section.Field>
            <Section.Field label="Last Name">
              <p>Fabros</p>
            </Section.Field>
          </Section>
          <Section title="Personal Details">
            <Section.Field label="First Name">
              <p>Cliemtor</p>
            </Section.Field>
            <Section.Field label="Middle Name">
              <p>Bungag</p>
            </Section.Field>
            <Section.Field label="Last Name">
              <p>Fabros</p>
            </Section.Field>
          </Section>
          <Pagination activePage={5} totalPages={10} />
        </Flex>
      </Flex>
    </Container>
  )
}

export default App
