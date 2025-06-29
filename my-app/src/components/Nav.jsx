function Nav({ paginaAtual }) {
  const links = ["sobre", "precos", "contato"];

  return (
    <nav>
      <ul>
        {links.map((link) => (
          <li
            key={link}
            className={paginaAtual === link ? "paginaAtual" : ""}
          >
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;