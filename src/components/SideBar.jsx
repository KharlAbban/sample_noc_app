import { useState } from "react";
import TransparentLogo from "../assets/media/fgblogo_icon-removebg-preview.png";
import { MdMenuOpen } from "react-icons/md";
import { NavLink } from "react-router-dom";
import {sideMenuItems} from "../utils/data/sidebarData";

const SideBar = () => {
    // State variables
  const [closeSidebar, setcloseSidebar] = useState(false);

  // Handler functions
  const handleSidebarClose = () => {
    setcloseSidebar(oldSidebarState => !oldSidebarState);
  }

  return (
    <aside id="sidebar" className={`contrast-color d-flex flex-column position-relative ${closeSidebar ? 'closed': ''}`}>
          <h1 className="app_logo bottom-0 position-absolute w-100 py-2 text-center mb-0">NOC TTApp</h1>
          <div className="mb-5 border-bottom d-flex justify-content-between py-2 align-items-center">
            <h3 className="customerLogo my-0 d-flex gap-2 align-items-center">
                <img src={TransparentLogo} className="img-fluid" alt="" />
                FG&B
            </h3>
              <MdMenuOpen title="Click to toggle sidebar" onClick={handleSidebarClose} fontSize={30} className={closeSidebar ? `w-100 mx-auto text-center` : `me-2`} />
          </div>
          <nav className="sidebarNav">
            <ul className="list-unstyled mx-0">
              {sideMenuItems.map(menuItem => (
                <li key={menuItem.id} className="mb-3 sidenav-item">
                  <NavLink title={menuItem.linkText.toLowerCase()} to={menuItem.linkTo} className="fs-5 d-flex gap-2 align-items-center">
                    {menuItem.icon}
                    <span className={closeSidebar ? "d-none" : "d-block"}>
                      {menuItem.linkText}
                    </span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
      </aside>
  )
}

export default SideBar
