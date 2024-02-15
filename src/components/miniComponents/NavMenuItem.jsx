import { NavLink } from "react-router-dom";

const NavMenuItem = (props) => {
  const {icon, linkText, linkTo} = props.data;

  return (
    <li className="sidenav-item">
        <NavLink to={linkTo} className={({isActive}) => {
            return isActive ? "active" : ""
        }}>
            <i className={`fa ${icon} me-2`}></i>
            <span className="rm-sm-screen">{linkText}</span>
        </NavLink>
    </li>
  )
}

export default NavMenuItem
