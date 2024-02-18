import { Outlet, useLoaderData } from "react-router-dom"
import "../assets/styles/homeLayout.css";
import SideBar from "../components/SideBar";
import {DashboardHeaderWithSearch, SearchResultsPage} from "../components";
import { useState } from "react";

const HomeLayout = () => {
  // Loader data
  const {searchPhrase} = useLoaderData();

  // State variables
  const [searchTerm, setsearchTerm] = useState(searchPhrase || "");

  // Effects
  
  
  return (
    <div className="d-flex w-100 h-100">
      <SideBar />
      <main className="homeOutlet w-100 ps-3 pe-2">
        <DashboardHeaderWithSearch searchTerm={searchTerm} setSearchTerm={setsearchTerm} />
        {(searchPhrase !== null) ? <SearchResultsPage searchTerm={searchTerm} /> : <Outlet />}
      </main>
    </div>
  )
}

export default HomeLayout;
