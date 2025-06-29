
import Nav from './Nav';

function Header(props) {
  return (
    <div className="header">
      <img src={props.src} alt="Logo" />
      <Nav paginaAtual={props.paginaAtual} />
    </div>
  );
}

export default Header;