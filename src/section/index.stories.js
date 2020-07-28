import React from 'react'
import { Section } from '../'

export default {
  title: 'Layouts/Section',
  component: Section,
}

export const basic = () => (
  <div>
    <Section title="Personal Details">
      <Section.Item label="First Name">Cliemtor</Section.Item>
      <Section.Item label="Middle Name">Bungag</Section.Item>
      <Section.Item label="Last Name">Fabros</Section.Item>
    </Section>
    <Section title="Account Details">
      <Section.Item label="Email">cliemtor@devhaus.ph</Section.Item>
      <Section.Item label="Role">Admin</Section.Item>
    </Section>
  </div>
)
