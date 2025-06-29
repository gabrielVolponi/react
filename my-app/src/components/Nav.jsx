import { NavLink } from "react-router-dom";

function Nav() {
  const links = ["sobre", "precos", "contato"];

  return (
    <nav>
      <ul>
        {links.map((link) => (
          <li key={link}>
            <NavLink
              to={link === "sobre" ? "/" : `/${link}`}
              className={({ isActive }) => (isActive ? "paginaAtual" : "")}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;