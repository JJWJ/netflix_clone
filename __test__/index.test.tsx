import { render, screen } from '@testing-library/react'
import Header from '../components/display/Header'
import Home from '../pages/index'

describe('Home', () => {
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


})
