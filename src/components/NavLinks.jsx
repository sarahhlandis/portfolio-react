import { NavLink } from "react-router-dom";

export function NavigationLinks() {
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
        <li>
          <NavLink
            to="/about"
            style={({ isActive }) => isActive ? activeNavStyle : undefined}
          >
            about me
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            style={({ isActive }) => isActive ? activeNavStyle : undefined}
          >
            projects
          </NavLink>
        </li>
        <li>
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