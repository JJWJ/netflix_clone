import { render, screen } from '@testing-library/react'
import Faq from '../components/display/FAQ/Faq'
import Faq_List_Item from '../components/display/FAQ/Faq_List_Item'
import Footer_card from '../components/display/Footer/Footer_card'
import Header from '../components/display/Header/Header'
import Hero_card from '../components/display/Hero/Hero_card'
import Story_card_enjoy from '../components/display/Story_Cards/Story_card_enjoy'
import Story_card_kids from '../components/display/Story_Cards/Story_card_kids'
import Story_card_watch from '../components/display/Story_Cards/Story_card_watch'
import Story_card_download from '../components/display/Story_Cards/Stroy_card_download'
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

  it('renders the footer', () => {
    render(<Footer_card />)

    const check_footer_phone_number = screen.getByText(/1-844-505-2993/)

    expect(check_footer_phone_number).toBeInTheDocument()
  })


  it('renders the faq', () => {
    render(<Faq />)

    const check_faq_question = screen.getByText(/What is Netflix/i)

    expect(check_faq_question).toBeInTheDocument()
  })

  it('renders the faq list item correctly', () => {
    render(<Faq_List_Item buttonText='Test Text' contentMain='Just one line' />)

    const check_faq_list_item_button = screen.getByRole('button', { name: 'Test Text' })
    const check_faq_list_item_content = screen.getByText(/Just one line/i)

    expect(check_faq_list_item_button).toBeInTheDocument()
    expect(check_faq_list_item_content).toBeInTheDocument()
  })

  it('renders the kids story card', () => {
    render(<Story_card_kids Header='Header Working' MainText='Main text here' />)

    const check_for_header_text = screen.getByText(/Header Working/i)
    const check_for_main_text = screen.getByText(/Main text here/i)

    expect(check_for_header_text).toBeInTheDocument()
    expect(check_for_main_text).toBeInTheDocument()
  })

  it('renders the watch story card', () => {
    render(<Story_card_watch Header='Watch everywhere' MainText='Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.' />)

    const check_for_header_text = screen.getByText(/Watch everywhere/i)
    const check_for_main_text = screen.getByText(/Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more./i)

    expect(check_for_header_text).toBeInTheDocument()
    expect(check_for_main_text).toBeInTheDocument()
  })

  it('renders the download story card', () => {
    render(<Story_card_download Header='Download your shows to watch offline.' MainText='Save your favorites easily and always have something to watch.' />)

    const check_for_header_text = screen.getByText(/Download your shows to watch offline./i)
    const check_for_main_text = screen.getByText(/Save your favorites easily and always have something to watch./i)

    expect(check_for_header_text).toBeInTheDocument()
    expect(check_for_main_text).toBeInTheDocument()
  })

  it('renders the enjoy story card', () => {
    render(<Story_card_enjoy Header='Enjoy on your TV.' MainText='Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.' />)

    const check_for_header_text = screen.getByText(/Enjoy on your TV./i)
    const check_for_main_text = screen.getByText(/Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more./i)

    expect(check_for_header_text).toBeInTheDocument()
    expect(check_for_main_text).toBeInTheDocument()
  })
})
