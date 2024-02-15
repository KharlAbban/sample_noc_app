import { useState } from "react";
import TransparentLogo from "../assets/media/fgblogo_icon-removebg-preview.png"
import navMenuData from "../utils/sidebarData";
import NavMenuItem from "./miniComponents/NavMenuItem";

const SideBar = () => {
    const navMenuElements = navMenuData.map(menuItem => {
        return <NavMenuItem key={menuItem.key} data={menuItem} />
    });

    // State variables
  const [closeSidebar, setcloseSidebar] = useState(false);

  // Handler functions
  const handleSidebarClose = () => {
    setcloseSidebar(oldSidebarState => !oldSidebarState);
  }

  return (
    <aside id="sidebar" className={`contrast-color d-flex flex-column position-relative ${closeSidebar ? 'closed': ''}`}>
          <h1 className="app_logo bottom-0 position-absolute w-100 py-2 text-center mb-0">NOC TTApp</h1>
          <h3 title="Click to toggle sidebar" onClick={handleSidebarClose} className="customerLogo d-flex justify-content-center align-items-center gap-2 py-2 text-center">
            <img src={TransparentLogo} className="img-fluid" alt="" />
            <div className="logo-toggle-div">
                FG&B
                <p className="m-0 p-0 logo-toggle-text">(Click logo to toggle sidebar)</p>
            </div>
          </h3>
          <nav className="sidebarNav">
            <ul className="list-unstyled mx-0">
              {navMenuElements}
            </ul>
          </nav>
      </aside>
  )
}

export default SideBar
