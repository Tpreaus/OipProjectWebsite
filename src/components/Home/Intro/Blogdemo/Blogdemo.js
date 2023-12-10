import BasicRating from "../../../BasicRating"
import HoverRating from "../../../HoverRating"
import "./Blogdemo.css"
import blog1 from "./blog1.png"
import blog2 from "./blog2.png"
import blog3 from "./blog3.png"

function Blogdemo() {
    return(
        <div className="blogdemo">
            <div className="blogsquarecontainer">
                <div className="blogsquare">
                    <img src={blog1} className="blogimage"/>
                    <BasicRating/>
                    <h2>My Time in Ifrane</h2>
                    <p>While exploring the wonders of Aui ...</p>
                </div>
                <div className="blogsquare">
                    <img src={blog2} className="blogimage"/>
                    <BasicRating/>
                    <h2>Exploring The Blue City of Morocco</h2>
                    <p>This city really was something else ...</p>
                </div>
                <div className="blogsquare">
                    <img src={blog3} className="blogimage"/>
                    <BasicRating/>
                    <h2>The Dessert</h2>
                    <p>I have sand everywhere ...</p>
                </div>
            </div>
        </div>
    )
}

export default Blogdemo;