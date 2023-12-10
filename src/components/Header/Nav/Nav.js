import "./Nav.css";
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div className="nav">
            <div className="buttons">
                <Link to ="/" className="btn">
                    <span>Home</span>
                </Link>
                <Link to ="/approvedcourse" className="btn">
                    <span>Approved Courses</span>
                </Link>
                <Link to ="/blog" className="btn">
                    <span>Blogs</span>
                </Link>
            </div>
        </div>
    )
}

export default Nav;