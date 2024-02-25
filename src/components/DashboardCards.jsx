import React from 'react';
import questionIcon from "../assets/media/ph_question-bold.svg"

const DashboardCards = () => {
  return (
    <div className='mb-1 w-100 d-flex gap-3 mb-3'>
        {/* Card */}
        <div className="card card-body dashStatsCard ps-3 pe-1 py-1">
            <div className="help text-end">
                <img src={questionIcon} alt="" className="" />
            </div>
            <div className="d-flex align-items-center gap-2">
                <span className="bullet bullet-completed"></span> Completed
            </div>
            <h3 className="display-6">2350</h3>
        </div>
        {/* Card */}
        <div className="card card-body dashStatsCard ps-3 pe-1 py-1">
            <div className="help text-end">
                <img src={questionIcon} alt="" className="img-fluid" />
            </div>
            <div className="d-flex align-items-center gap-2">
                <span className="bullet bullet-progress"></span> In Progress
            </div>
            <h3 className="display-6">3100</h3>
        </div>
        {/* Card */}
        <div className="card card-body dashStatsCard ps-3 pe-1 py-1">
            <div className="help text-end">
                <img src={questionIcon} alt="" className="img-fluid" />
            </div>
            <div className="d-flex align-items-center gap-2">
                <span className="bullet bullet-pending"></span> Pending
            </div>
            <h3 className="display-6">2350</h3>
        </div>
        {/* Card */}
        <div className="card card-body dashStatsCard ps-3 pe-1 py-1">
            <div className="help text-end">
                <img src={questionIcon} alt="" className="img-fluid" />
            </div>
            <div className="d-flex align-items-center gap-2">
                <span className="bullet bullet-cancelled"></span> Cancelled
            </div>
            <h3 className="display-6">124</h3>
        </div>
        {/* Card */}
        <div className="card card-body dashStatsCard ps-3 pe-1 py-1">
            <div className="help text-end">
                <img src={questionIcon} alt="" className="img-fluid" />
            </div>
            <div className="d-flex align-items-center gap-2">
                <span className="bullet bullet-total"></span> Total
            </div>
            <h3 className="display-6">5699</h3>
        </div>
    </div>
  )
}

export default DashboardCards
