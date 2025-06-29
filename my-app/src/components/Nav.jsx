function Nav(props) {
    return <nav>
        <ul>
            <li className={props.paginaAtualSobre}>Sobre</li>
            <li className={props.paginaAtualPrecos}>Preços</li>
            <li className={props.paginaAtualContato}>Contato</li>
        </ul>
    </nav>
}


export default Nav