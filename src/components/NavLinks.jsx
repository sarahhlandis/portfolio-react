import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

export function NavigationLinks() {
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    let activeNavStyle = {
      color: "white",
      fontStyle: "italic",
      backgroundColor: "black",
    };
  
    return (
      <>
        {/* <li>
          <NavLink
            to="/"
            style={({ isActive }) => isActive ? activeNavStyle : undefined}
          >
            home
          </NavLink>
        </li> */}
        <li
        className={
          isHomePage
            ? "hover:italic hover:translate-x-5 transition-transform duration-300"
            : ""
        }
        >
          <NavLink
            to="/about"
            style={({ isActive }) => isActive ? activeNavStyle : undefined}
          >
            about me
          </NavLink>
        </li>
        <li
        className={
          isHomePage
            ? "hover:italic hover:translate-x-5 transition-transform duration-300"
            : ""
        }
        >
          <NavLink
            to="/projects"
            style={({ isActive }) => isActive ? activeNavStyle : undefined}
          >
            projects
          </NavLink>
        </li>
        <li
        className={
          isHomePage
            ? "hover:italic hover:translate-x-5 transition-transform duration-300"
            : ""
        }
        >
          <NavLink
            to="/connect"
            style={({ isActive }) => isActive ? activeNavStyle : undefined}
          >
            say hi
          </NavLink>
        </li>
      </>
    );
}