import ModalBox from '.'
import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { render, screen } from '@testing-library/react'

describe('ModalBox', () => {
  const defaultProps = {
    open: true,
    handleClick: jest.fn(),
    inputValue: '',
    setinputValue: jest.fn(),
    setOpen: jest.fn(),
    handleCreateClick: jest.fn(),
    setModel2: jest.fn(),
  }

  it('renders ModalBox with given props', () => {
    render(
      <Router>
        <ModalBox model2={true} {...defaultProps} />
      </Router>
    )
    expect(screen.getByText('Name your cash kick')).toBeInTheDocument()
    expect(
      screen.getByText('Add a name to identify your cash kick')
    ).toBeInTheDocument()
    expect(screen.getByText('Cash Kick name')).toBeInTheDocument()
    expect(screen.getByText('Cancel')).toBeInTheDocument()
    expect(screen.getByText('Create cash kick')).toBeInTheDocument()
  })

  it('renders second ModalBox with given props', () => {
    render(
      <Router>
        <ModalBox model2={false} {...defaultProps} />
      </Router>
    )
    expect(
      screen.getByText('Your cash kick is under review')
    ).toBeInTheDocument()
    expect(screen.getByText('Close')).toBeInTheDocument()
    expect(screen.getByText('View cash kicks')).toBeInTheDocument()
  })
})
