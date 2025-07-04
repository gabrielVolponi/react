import Nav from "./Nav";

function Header(props) {
  return (
    <div className="header">
      <div className="headerLogo">
        <img src={props.src} alt="Logo" />
        <span>Passeio de Trem</span>
      </div>
      <Nav />
    </div>
  );
}

export default Header;
