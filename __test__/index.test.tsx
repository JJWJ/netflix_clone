import { render, screen } from '@testing-library/react'
import Header from '../components/display/Header'
import Hero_card from '../components/display/Hero_card'
import Home from '../pages/index'

describe('Home existences', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /Unlimited movies, TV shows, and more./i
    })

    expect(heading).toBeInTheDocument()
  })

  it('renders the header', () => {
    render(<Header />)

    const check_header = screen.getByRole('option', {
      name: /English/i
    })
    expect(check_header).toBeInTheDocument()
  })

  it('renders the hero card sign up input', () => {
    render(<Hero_card />)

    const check_input_by_label = screen.getByLabelText('Email address')

    expect(check_input_by_label).toBeInTheDocument()
  })

  it('renders the hero sign up button', () => {
    render(<Hero_card />)

    const check_sign_up = screen.getByRole('button', {
      name: /Get Started/i
    })

    expect(check_sign_up).toBeInTheDocument()
  })

})
