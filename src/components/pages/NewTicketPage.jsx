import React from 'react'
import { BsCalendar2Fill } from 'react-icons/bs'
import TicketForm from '../TicketForm'

const NewTicketPage = () => {
  return (
    <>
      <h1 className="fw-bold mb-0">New Ticket Form</h1>
      <p className="fw-normal">
        <span className="greeting">Good afternoon</span>
        <span className="date float-end d-flex align-items-center">
            {new Date(Date.now()).toDateString()}<BsCalendar2Fill className="ms-2" />
        </span>
      </p>

      <TicketForm />
    </>
  )
}

export default NewTicketPage
