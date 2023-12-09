import "./Header.css"
import Nav from "./Nav/Nav"
import logo from "./AUI-logo.png"

function Header() {
    return(
        <div className="header">
            <div className="image">
                <img src={logo} className="logoimage"/>
                <h1>Approved Class and Blog for Study Abroad</h1>
            </div>  
            <div className="navbar">
                <Nav/>
            </div>
        </div>
    )
}

export default Header;