import "./Blog.css"
import Header from "../Home/Header/Header"
import BlogDisp from "./BlogDisp/BlogDisp"

export default function Blog() {
    return (
        <div className="Blog">
            <div className="blog_top_wrapper">
                <Header/>
            </div>
            <div className="blog_main_wrapper">
                <BlogDisp/>
            </div>
        </div>
    )
}