import { Outlet } from "react-router-dom"
import "../assets/styles/homeLayout.css";
// import SideBar from "../components/SideBar";

const HomeLayout = () => {
  
  return (
    <div className="d-flex w-100 h-100">
      {/* <SideBar /> */}
      <main className="homeOutlet w-100 ps-3 pe-2">
        <div className="w-100 bg-warning py-3">Top Header with search and icons</div>
        <Outlet />
      </main>
    </div>
  )
}

export default HomeLayout;
