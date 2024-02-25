import React from 'react'
import { Form } from 'react-router-dom'

const QuickTicket = () => {
  return (
    <div className='px-1'>
      <h5 className='text-decoration-underline text-center'>Quick Ticket</h5>
      <Form className='quick-ticket-form'>
        <div className="mb-3 d-flex flex-column">
            <label htmlFor="" className="form-label mb-0 fw-normal">Client Affected</label>
            <select className="form-select" aria-label="Default select example">
                <option selected>Choose affected client</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </div>
        <div className="mb-3 d-flex flex-column">
            <label htmlFor="" className="form-label mb-0 fw-normal">Outage Type</label>
            <select className="form-select" aria-label="Default select example">
                <option value="ON-NET">ON-NET</option>
                <option value="OFF-NET">OFF-NET</option>
            </select>
        </div>
        <div className="mb-3 d-flex flex-column">
            <label htmlFor="" className="form-label mb-0 fw-normal">Service Impacting?</label>
            <select className="form-select" aria-label="Default select example">
                <option value="YES">YES</option>
                <option value="NO">NO</option>
            </select>
        </div>
        <div className="mb-3 d-flex flex-column">
            <label htmlFor="" className="form-label mb-0 fw-normal">Outage Cause</label>
            <input type="text" className="form-control" id="" placeholder="Cause of outage" />
        </div>
        <div className="mb-3 d-flex flex-column">
            <label htmlFor="" className="form-label mb-0 fw-normal">Time</label>
            <input type="datetime-local" className="form-control" id="" placeholder="" />
        </div>
        <button type="submit" className='btn w-100 quick-ticket-btn'>Add Ticket</button>
      </Form>
    </div>
  )
}

export default QuickTicket
