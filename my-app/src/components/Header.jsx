import Nav from './Nav'

function Header(props) {
    return <div className="header">
        <img src={props.src} />
        <Nav/>
    </div> 
}


export default Header