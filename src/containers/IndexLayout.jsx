import { Link, Outlet } from "react-router-dom";
import "../assets/styles/indexLayout.css";

const IndexLayout = () => {

  return (
    <>
      <div className="h-75 d-flex indexCustomBg">
        {/* Left Side of Layout */}
        <div className="w-50 d-none d-md-flex align-items-center ps-5">
          <main>
            <h1 className="mb-3 fw-semibold display-5">The only Ticket Management System You Need</h1>
            <p className="fw-normal"><i>NOCTTApp</i> has been designed with <span className="fw-bold">you and your team</span> in mind. Make trouble ticketing easy - because it is!</p>
            <p>Login to continue_ </p>
          </main>
        </div>
        {/* Right Side of Layout */}
        <div className="w-50">
          <h3 className="text-center display-5 fw-bold d-md-none">NOCTTApp</h3>
          <Outlet />
        </div>
      </div>
      {/* Bottom side of Layout */}
      <div className="bg-white h-25 d-none d-sm-flex">
        <div className="bg-danger b1section w-50"></div>
        <div className="w-50 ps-4 pt-4">
          <h5 className="fw-semibold b2heading position-relative">As simple as <span className="fw-bold">ABC</span></h5>
          <p className="fw-normal mb-0">
            <Link to="/register" className="text-decoration-none">Sign Up</Link>
          </p>
          <p className="fw-normal mb-0">Create a team</p>
          <p className="fw-normal mb-0">Start Ticketing!</p>
          <p className="fw-normal">A software so good it's almost addicting</p>
        </div>
      </div>
    </>
  )
}

export default IndexLayout
