import { NavLink } from "react-router-dom";

export function HomeNav() {
    let activeNavStyle = {
      color: "white",
      fontStyle: "italic",
      backgroundColor: "black",
    };
  
    return (
      <>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => isActive ? activeNavStyle : undefined}
          >
            home
          </NavLink>
        </li>
     </>
    );
}