import 'typeface-oxygen'
import './../src/styles.css'
import React from 'react'
import Button from './../src/button'
import Container from './../src/container'
import Field from './../src/field'
import Flex from './../src/flex'
import Input from './../src/input'
import Sidebar from './../src/sidebar'
import Titlebar from './../src/titlebar'

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
          <Field label="First Name">Cliemtor</Field>
          <Field label="Middle Name">Bungag</Field>
          <Field label="Last Name">Fabros</Field>
        </Flex>
      </Flex>
    </Container>
  )
}

export default App
