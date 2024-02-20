import React from 'react'

const AllTickets = () => {
  return (
    <main className='bg-success mx-lg-3'>
      All deez tickets

      <section>
        <h3>2024</h3>
        <div className="month-tickets">
            <h5>January</h5>
            <div style={{maxWidth: '250px'}} className="card card-body">
                Ticket ID
                <p>Status: Closed</p>
            </div>
        </div>
        <div className="month-tickets">
            <h5>February</h5>
            <div style={{maxWidth: '250px'}} className="card card-body">
                Ticket ID
                <p>Status: Closed</p>
            </div>
        </div>
        <div className="month-tickets">
            <h5>March</h5>
            <div style={{maxWidth: '250px'}} className="card card-body">
                Ticket ID
                <p>Status: Closed</p>
            </div>
        </div>
      </section>
    </main>
  )
}

export default AllTickets
