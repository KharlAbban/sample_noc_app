import React from 'react';
import { Link } from 'react-router-dom';

const OpenTickets = () => {
  return (
    <div className='m-0 p-0 w-100 h-100 bg-light'>
      <section className=''>
        <div className="container-fluid">
          <h4 className='ps-2 text-decoration-underline'>Open Tickets</h4>

          {/* Open Tickets Section */}
          {/* Header */}
          <header className="row fw-bold text-uppercase text-center mb-2 mx-1 border-bottom border-black">
            <div className="col-lg-1">#ID</div>
            <div className="col-lg-3">client AFFECTED</div>
            <div className="col-lg-3">outage cause</div>
            <div className="col-lg-2">date opened</div>
            <div className="col-lg-1">time</div>
            <div className="col-lg-2">duration</div>
          </header>

          {/* Tickets */}
          <div className="row text-center mb-2 mx-1 shadow-lg rounded-2 py-1 dash-open-tt-record">
            <div className="col-lg-1">24JAN203</div>
            <div className="col-lg-3">HugeCompany</div>
            <div className="col-lg-3">Some cause trimmed...</div>
            <div className="col-lg-2">20/02/24</div>
            <div className="col-lg-1">12:34</div>
            <div className="col-lg-2">30mins</div>
          </div>
          <div className="row text-center mb-2 mx-1 shadow-lg rounded-2 py-1 dash-open-tt-record">
            <div className="col-lg-1">24JAN203</div>
            <div className="col-lg-3">HugeCompany</div>
            <div className="col-lg-3">Some cause trimmed...</div>
            <div className="col-lg-2">20/02/24</div>
            <div className="col-lg-1">12:34</div>
            <div className="col-lg-2">30mins</div>
          </div>
          <div className="row text-center mb-2 mx-1 shadow-lg rounded-2 py-1 dash-open-tt-record">
            <div className="col-lg-1">24JAN203</div>
            <div className="col-lg-3">HugeCompany</div>
            <div className="col-lg-3">Some cause trimmed...</div>
            <div className="col-lg-2">20/02/24</div>
            <div className="col-lg-1">12:34</div>
            <div className="col-lg-2">30mins</div>
          </div>
          <div className="row text-center mb-2 mx-1 shadow-lg rounded-2 py-1 dash-open-tt-record">
            <div className="col-lg-1">24JAN203</div>
            <div className="col-lg-3">HugeCompany</div>
            <div className="col-lg-3">Some cause trimmed...</div>
            <div className="col-lg-2">20/02/24</div>
            <div className="col-lg-1">12:34</div>
            <div className="col-lg-2">30mins</div>
          </div>
        </div>
      </section>
      <section className='mt-5'>
        <div className="container-fluid">
          <h4 className='ps-2 text-decoration-underline'>Recently Closed</h4>

          {/* Open Tickets Section */}
          {/* Header */}
          <header className="row fw-bold text-uppercase text-center mb-2 mx-1 border-bottom border-black">
            <div className="col-lg-1">#ID</div>
            <div className="col-lg-3">client AFFECTED</div>
            <div className="col-lg-3">outage cause</div>
            <div className="col-lg-2">date opened</div>
            <div className="col-lg-1">time</div>
            <div className="col-lg-2">duration</div>
          </header>

          {/* Tickets */}
          <Link className="row text text-center mb-2 mx-1 shadow-lg rounded-2 py-1 dash-recent-tt-record">
            <div className="col-lg-1">24JAN203</div>
            <div className="col-lg-3">HugeCompany</div>
            <div className="col-lg-3">Some cause trimmed...</div>
            <div className="col-lg-2">20/02/24</div>
            <div className="col-lg-1">12:34</div>
            <div className="col-lg-2">30mins</div>
          </Link>
          <Link className="row text-center mb-2 mx-1 shadow-lg rounded-2 py-1 dash-recent-tt-record">
            <div className="col-lg-1">24JAN203</div>
            <div className="col-lg-3">HugeCompany</div>
            <div className="col-lg-3">Some cause trimmed...</div>
            <div className="col-lg-2">20/02/24</div>
            <div className="col-lg-1">12:34</div>
            <div className="col-lg-2">30mins</div>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default OpenTickets
