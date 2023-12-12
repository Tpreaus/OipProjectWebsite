import { Link } from 'react-router-dom';
import BasicRating from "../../Rating/BasicRating"
import "./Blogdemo.css"
import blog1 from "./blog1.png"
import blog2 from "./blog2.png"
import blog3 from "./blog3.png"

function Blogdemo() {
    return(
        <div className="blogdemo">
            <div className="blogsquarecontainer">
                <Link to="/blog">
                    <div className="blogsquare">
                        <img src={blog1} alt="BlogPic" className="blogimage"/>
                        <p><BasicRating/></p>
                        <h2>My Time in Ifrane</h2>
                        <p>While exploring the wonders of Aui ...</p>
                    </div>
                </Link>
                <Link to="/blog">
                    <div className="blogsquare">
                        <img src={blog2} alt="BlogPic" className="blogimage"/>
                        <p><BasicRating/></p>
                        <h2>Exploring The Blue City of Morocco</h2>
                        <p>This city really was something else ...</p>
                    </div>
                </Link>
                <Link to="/blog">
                    <div className="blogsquare">
                        <img src={blog3} alt="BlogPic" className="blogimage"/>
                        <p><BasicRating/></p>
                        <h2>The Dessert</h2>
                        <p>I have sand everywhere ...</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}
export default Blogdemo;