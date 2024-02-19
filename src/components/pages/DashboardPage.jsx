import { useLoaderData } from "react-router-dom";
import { BsCalendar2Fill } from "react-icons/bs";
import DashboardCards from "../DashboardCards";
import QuickTicket from "../QuickTicket";
import OpenTickets from "../OpenTickets";


const DashboardPage = () => {
    const {User} = useLoaderData();

    return (
    <>
      <h2 className="fw-bold mb-0">Ticket Dashboard</h2>
      <p className="fw-normal">
        <span className="greeting">Good afternoon, {User.replaceAll(`\"`, '')}</span>
        <span className="date float-end d-flex align-items-center">
            {new Date(Date.now()).toDateString()}<BsCalendar2Fill className="ms-2" />
        </span>
      </p>

      {/* Cards Section with Summarised Stats */}
        <DashboardCards />

      {/* Two column section with tickets and quick ticket */}
      <main className="d-flex gap-1 w-100">
        {/* Tickets Section */}
        <div className="w-70 py-2 bg-success">
            <OpenTickets />
        </div>
        {/* Quick Ticket Section */}
        <div className="w-30 py-2 shadow-lg bg-white rounded-3">
            <QuickTicket />
        </div>
      </main>
    </>
  )
}

export default DashboardPage;