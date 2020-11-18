import React from 'react'
import { Masonry, Section } from '../'

export default {
  title: 'Layouts/Masonry',
  component: Section,
}

export const basic = () => (
  <Masonry>
    <Section title="Account Details">
      <Section.Item label="Name">Cliemtor Fabros</Section.Item>
      <Section.Item label="Office">DevHaus Technologies</Section.Item>
      <Section.Item label="Email">cliemtor@devhaus.ph</Section.Item>
      <Section.Item className="capitalize" label="Role">
        admin
      </Section.Item>
      <Section.Item className="capitalize" label="Status">
        active
      </Section.Item>
    </Section>
    <Section title="Record Details">
      <Section.Item label="Created">January 08, 2015</Section.Item>
      <Section.Item label="Updated">November 16, 2018</Section.Item>
    </Section>
  </Masonry>
)
