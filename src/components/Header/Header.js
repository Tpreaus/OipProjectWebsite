import "./Header.css"
import Nav from "./Nav/Nav"
import logo from "./AUI-logo.png"

function Header() {
    return(
        <div className="header">
            <div className="headerimage">
                <img src={logo} alt="Logo" className="logoimage"/>
                <h1>Approved Classes and Blogs for Study Abroad</h1>
            </div>  
            <div className="navbar">
                <Nav/>
            </div>
        </div>
    )
}

export default Header;