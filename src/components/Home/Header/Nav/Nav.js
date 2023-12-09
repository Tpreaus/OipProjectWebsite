import "./Nav.css";


function Nav() {
    return (
        <div className="nav">
            <div className="buttons">
                <button className="btn">
                    <span>Home</span>
                </button>
                <button className="btn">
                    <span>Approved Courses</span>
                </button>
                <button className="btn">
                    <span>Blogs</span>
                </button>
            </div>
        </div>
    )
}

export default Nav;