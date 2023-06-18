import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

// NAV INDIVIDUAL LINKS

export function NavigationLinks() {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const notHomePage = location.pathname !== "/";

    const linkStyle = notHomePage
    ? "relative inline-block bg-gradient-to-t from-orange-300 from-35% to-transparent to-40% hover:bg-orange-300 transition duration-100 ease-in-out"
    : undefined;

    const homePageStyle = isHomePage
    ? "hover:italic hover:translate-x-4 transition-transform duration-700"
    : "hover:italic"
  
    return (
      <>
        <li className={homePageStyle}>
          <NavLink
            to="/about"
            className={linkStyle}
          >
            about me
          </NavLink>
        </li>

        <li className={homePageStyle}>
          <NavLink
            to="/projects"
            className={linkStyle}
          >
            projects
          </NavLink>
        </li>

        <li className={homePageStyle}>
          <NavLink
            to="/connect"
            className={linkStyle}
          >
            say hi
          </NavLink>
        </li>
      </>
    );
}