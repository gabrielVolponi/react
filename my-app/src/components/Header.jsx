import Nav from './Nav'

function Header(props) {
    return <div className="header">
        <img src={props.src} />
        <Nav className=''/>
    </div> 
}


export default Header