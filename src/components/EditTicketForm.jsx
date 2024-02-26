import React from 'react';
import clientPieImg from "../assets/media/PieChart.png"

const EditTicketForm = () => {
  return (
    <div className='tt-detail-card d-flex gap-lg-2 p-0 rounded-2 mb-4'>
      {/* All info section for ticket detail */}
      <div className='tt-detail-info-section px-2'>
        {/* Header section with client info */}
        <header className='position-relative d-flex gap-3 p-2 tt-detail-client-info custom-light-shadow mb-2'>
          <img src={clientPieImg} className='client-info-profile border border-black' alt="" />
          <div className='client-info-content'>
            <h3 className='mb-0'>Big Client Corporation</h3>
            <p className='fw-normal mb-0'>ID: <span className='fw-bold'>24JAN0321</span></p>
            <p className='quick-status-check small fw-light'>Owner: <span>Staff Name</span></p>
          </div>
          <span class="badge text-bg-warning position-absolute end-0 me-2 py-2 d-flex align-items-center">
            OPEN
            <span class="badge text-bg-primary ms-2 py-1">1 hr</span>
        </span>
        </header>
        {/* Ticket Details Section */}
        <section className="d-flex gap-3 mb-3">
          <div className='w-50 custom-light-shadow'>
            <h5 className="text-decoration-underline">General Info</h5>
            <div className="mb-3">
                <div className="input-group p-0">
                    <span className="input-group-text" id="inputGroupPrepend2">Start Date:</span>
                    <input type="date" className="form-control" value="1st Jan, 2024" required="" />
                </div>
                <div className="valid-feedback">
                    Looks good!
                </div>
            </div>
            <div className="mb-3">
                <div className="input-group p-0">
                    <span className="input-group-text" id="inputGroupPrepend2">Start Time:</span>
                    <input type="time" className="form-control" value="1st Jan, 2024" required="" />
                </div>
                <div className="valid-feedback">
                    Looks good!
                </div>
            </div>
            <div className="mb-3">
                <div className="input-group p-0">
                    <span className="input-group-text" id="inputGroupPrepend2">End Date:</span>
                    <input type="date" className="form-control" value="1st Jan, 2024" required="" />
                </div>
                <div className="valid-feedback">
                    Looks good!
                </div>
            </div>
            <div className="mb-3">
                <div className="input-group p-0">
                    <span className="input-group-text" id="inputGroupPrepend2">End Time:</span>
                    <input type="time" className="form-control" value="1st Jan, 2024" required="" />
                </div>
                <div className="valid-feedback">
                    Looks good!
                </div>
            </div>
          </div>
          <div className='w-50 custom-light-shadow'>
            <h5 className="text-decoration-underline">Outage Info</h5>
            <div className="mb-3">
                <label htmlFor="validationCustom01" className="form-label mb-1">Outage Type</label>
                <select className="form-select" id="validationDefault04" required="">
                    <option selected>ON-NET</option>
                    <option>OFF-NET</option>
                </select>
                <div className="valid-feedback">
                    Looks good!
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="validationCustom01" className="form-label mb-1">Service Impacting?</label>
                <select className="form-select" id="validationDefault04" required="">
                    <option selected>YES</option>
                    <option>NO</option>
                </select>
                <div className="valid-feedback">
                    Looks good!
                </div>
            </div>
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">IS RESOLVED</label>
            </div>
          </div>
        </section>
        {/* Ticket Cause Section */}
        <section className="d-flex custom-light-shadow">
          <div className=''>
            <h5 className='text-decoration-underline text-uppercase'>Cause:</h5>
            <textarea className='fw-normal form-control w-100' rows={6} cols={80}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, nulla. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, laudantium.
            </textarea>
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
          <button className="tt-detail-changeStatus btn btn-warning">Update</button>
          <button className="tt-detail-changeStatus btn btn-success">Close Ticket</button>
          <button className="tt-detail-changeStatus btn btn-outline-danger" onClick={() => confirm("Delete ticket?")}>Delete Ticket</button>
        </div>
      </div>
    </div>
  )
}

export default EditTicketForm
