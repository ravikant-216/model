import React from 'react'
import { Story, Meta } from '@storybook/react'
import { BrowserRouter as Router } from 'react-router-dom'
import ModalBox, { ModalBoxProps } from '.'

export default {
  title: 'Organisms/ModalBox',
  component: ModalBox,
  tags: ['autodocs'],
} as Meta

const Template: Story<ModalBoxProps> = (args) => (
  <Router>
    <ModalBox {...args} />
  </Router>
)

export const Default = Template.bind({})
