import React from 'react';
import IconRightImage from "../assets/media/Icon Right.svg";

const TicketForm = () => {
  return (
    <div className='mx-lg-5 p-3 rounded-2 ticket-form-container'>
      <section className='mb-lg-4'>
        <h3 className='text-decoration-underline fw-bold'>General Information</h3>
        <div className="container-fluid">
            <div className="row mb-3">
                <div className="col-4">
                    <label htmlFor="validationCustom01" className="form-label mb-1">TICKET ID</label>
                    <div className="input-group p-0">
                        <span className="input-group-text" id="inputGroupPrepend2">#</span>
                        <input type="text" className="form-control" readonly="" value="24JAN032" required="" />
                    </div>
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-4">
                    <label htmlFor="validationCustom01" className="form-label mb-1">OPENED BY</label>
                    <input type="text" className="form-control" id="validationCustom01" value="John Doe" readonly="" required="" />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-4">
                    <label htmlFor="validationCustom01" className="form-label mb-1">CLIENT AFFECTED</label>
                    <select className="form-select" id="validationDefault04" required="">
                        <option selected="" disabled="" value="">Choose...</option>
                        <option>Big Client 1</option>
                        <option>Big Client 3</option>
                        <option>Small Client 2</option>
                        <option>Small Client 3</option>
                        <option>Big Client 2</option>
                    </select>
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
            </div>
        </div>
      </section>
      <section className='mb-lg-4'>
        <h3 className='text-decoration-underline fw-bold mt-5'>Outage Information</h3>
        <div className="container-fluid">
            <div className="row mb-5">
                <div className="col-3">
                    <label htmlFor="validationCustom01" className="form-label mb-1">OUTAGE TYPE</label>
                    <select className="form-select" id="validationDefault04" required="">
                        <option selected="">ON-NET</option>
                        <option>OFF-NET</option>
                    </select>
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-3">
                    <label htmlFor="validationCustom01" className="form-label mb-1">SERVICE IMPACTING</label>
                    <select className="form-select" id="validationDefault04" required="">
                        <option selected="">YES</option>
                        <option>NO</option>
                    </select>
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="col-6">
                    <label htmlFor="validationCustom01" className="form-label mb-1">OUTAGE CAUSE</label>
                    <input type="text" className="form-control" id="validationCustom01" placeholder="State outage cause" required="" />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                {/* Date Section */}
                <div className="row subRow d-flex flex-column col-4">
                    <div className="col mt-2">
                        <label htmlFor="validationCustom01" className="form-label mb-1">DATE OPENED</label>
                        <input type="date" className="form-control" id="validationCustom01" value="2024-01-23" required="" />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col mt-2">
                        <label htmlFor="validationCustom01" className="form-label mb-1">TIME OPENED</label>
                        <input type="time" className="form-control" id="validationCustom01" value="16:09" required="" />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                </div>
                {/* Time Section */}
                <div className="row subRow d-flex flex-column col-4">
                    <div className="col mt-2">
                        <label htmlFor="validationCustom01" className="form-label mb-1">DATE CLOSED</label>
                        <input type="date" className="form-control" value="2024-01-23" />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col mt-2">
                        <label htmlFor="validationCustom01" className="form-label mb-1">TIME CLOSED</label>
                        <input type="time" className="form-control" value="16:12" />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                </div>
                {/* Duration */}
                <div className="row subRow d-flex flex-column col-4">
                    <div className="col mt-2">
                        <label htmlFor="validationCustom01" className="form-label mb-1">DURATION</label>
                        <input type="text" className="form-control" id="validationCustom01" value="3 minutes" readonly="" />
                    </div>
                </div>
            </div>
        </div>
      </section>
      <section>
        <h3 className='text-decoration-underline fw-bold'>Updates</h3>
        <div className="container-fluid">
            <div className="row mt-4 mb-2">
                <h4 className="text-decoration-underline">Updates Section</h4>
                <div className="col-8">
                    <label htmlFor="validationCustom01" className="form-label mb-1">TIMELY UPDATES</label>
                    <textarea className="form-control" rows="10" required=""></textarea>
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div className="row subRow d-flex flex-column col-4">
                    <div className="col mt-2">
                        <label htmlFor="validationCustom01" className="form-label mb-1">TICKET STATUS</label>
                        <select className="form-select" id="validationDefault04" required="">
                            <option selected="" disabled="" value="">Choose...</option>
                            <option>OPEN</option>
                            <option>IN PROGRESS</option>
                            <option>CLOSED</option>
                        </select>
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col mt-2">
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">IS RESOLVED</label>
                        </div>
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">I have rechecked for errors and assume responsibility for this entry from here on out.</label>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <div className="mt-lg-5 text-end">
            <button type="submit" className="btn btn-warning text-dark newTTBtn newTTBtn2 me-3">
                ADD NEW TICKET
                <img src={IconRightImage} alt="" />
            </button>
            <button type="submit" className="btn btn-outline-danger newTTBtn">
                CLOSE TICKET
                <img src={IconRightImage} alt="" />
            </button>
        </div>
    </div>
  )
}

export default TicketForm
