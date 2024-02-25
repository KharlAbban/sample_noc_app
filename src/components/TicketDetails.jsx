import React from 'react';
import clientPieImg from "../assets/media/PieChart.png"

const TicketDetails = () => {
  return (
    <div className='tt-detail-card d-flex gap-lg-2 p-0 rounded-2 mb-4'>
      {/* All info section for ticket detail */}
      <div className='tt-detail-info-section px-2'>
        {/* Header section with client info */}
        <header className='d-flex gap-3 p-2 tt-detail-client-info custom-light-shadow mb-2'>
          <img src={clientPieImg} className='client-info-profile border border-black' alt="" />
          <div className='client-info-content'>
            <h3 className='mb-0'>Big Client Corporation</h3>
            <p className='fw-normal mb-0'>Ticket Owner: <span className='fw-bold'>Staff Name</span></p>
            <p className='quick-status-check small fw-light ps-1'>OPEN for <span>3 hours</span> now</p>
          </div>
        </header>
        {/* Ticket Details Section */}
        <section className="d-flex gap-3 mb-3">
          <div className='w-50 custom-light-shadow'>
            <h5 className='text-decoration-underline'>January 1, 2024</h5>
            <p className='mb-0'>Time Opened - <span className="fw-semibold">11:30</span></p>
            <p className='mb-0'>Time Closed - <span className="fw-semibold">15:03</span></p>
            <p className='mb-0'>Duration - <span className="fw-semibold">3hrs 33mins</span></p>
          </div>
          <div className='w-50 custom-light-shadow'>
            <h5 className="text-decoration-underline">Ticket Info</h5>
            <p className='mb-0'>Outage Type: <span className="fw-semibold">ON-NET</span></p>
            <p className='mb-0'>Service Impacting: <span className="fw-semibold">YES</span></p>
            <p className='mb-0'>Current status: <span className="fw-semibold">OPEN</span></p>
            {/* type, status, service impacting, opened by, closed by */}
          </div>
        </section>
        <div className='my-3 custom-light-shadow'>
          <p className='mb-0'>Opened by: <span className='fw-bold'>Staff1 Name</span></p>
          <p className='mb-0'>Closed by: <span className='fw-bold'>Staff2 Name</span></p>
        </div>
        {/* Ticket Cause Section */}
        <section className="d-flex custom-light-shadow">
          <div className=''>
            <h5 className='text-decoration-underline text-uppercase'>Cause:</h5>
            <blockquote className='fw-normal'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, nulla. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, laudantium.</blockquote>
          </div>
        </section>
        {/* Ticket Journey */}
        <section className="d-flex mt-3 custom-light-shadow">
          <div className=''>
            <h5 className='text-decoration-underline'>Ticket Journey:</h5>
            The entire journey depicted in graphics
          </div>
        </section>
      </div>

      {/* Updates Section for ticket detail */}
      <div className='tt-detail-update-section custom-light-shadow p-3 position-relative'>
        <h4 className='mb-0'>Ticket Updates Section</h4>
        <hr className='my-2' />
        <div className='updates h-75 overflow-y-auto'>
          <div className="update mb-2">
            <p className="mb-0 fw-bold text-decoration-underline">12:56</p>
            <cite className='mb-0'>Took this accion here</cite>
          </div>
          <div className="update mb-2">
            <p className="mb-0 fw-bold text-decoration-underline">12:56</p>
            <cite className='mb-0'>Took this accion here</cite>
          </div>
          <div className="update mb-2">
            <p className="mb-0 fw-bold text-decoration-underline">12:56</p>
            <cite className='mb-0'>Took this accion here</cite>
          </div>
          <div className="update mb-2">
            <p className="mb-0 fw-bold text-decoration-underline">12:56</p>
            <cite className='mb-0'>Took this accion here</cite>
          </div>
          <div className="update mb-2">
            <p className="mb-0 fw-bold text-decoration-underline">12:56</p>
            <cite className='mb-0'>Took this accion here</cite>
          </div>
          <div className="update mb-2">
            <p className="mb-0 fw-bold text-decoration-underline">12:56</p>
            <cite className='mb-0'>Took this accion here</cite>
          </div>
          <div className="update mb-2">
            <p className="mb-0 fw-bold text-decoration-underline">12:56</p>
            <cite className='mb-0'>Took this accion here</cite>
          </div>
          <div className="update mb-2">
            <p className="mb-0 fw-bold text-decoration-underline">12:56</p>
            <cite className='mb-0'>Took this accion here</cite>
          </div>
        </div>
        <div className="tt-detail-buttons end-0 bottom-0 position-absolute me-3 mb-2 d-flex gap-3">
          <button className="tt-detail-changeStatus btn btn-warning">Edit Ticket</button>
          <button className="tt-detail-changeStatus btn btn-success">Close Ticket</button>
          <button className="tt-detail-changeStatus btn btn-outline-danger">Delete Ticket</button>
        </div>
      </div>
    </div>
  )
}

export default TicketDetails
