import "./Blog.css"
import Header from "../../components/Header/Header"
import BlogDisp from "../../components/BlogDisp/BlogDisp"
import Footer from "../../components/Footer/Footer"


export default function Blog() {
    return (
        <div className="Blog">
            <div className="blog_top_wrapper">
                <Header/>
            </div>
            <div className="blog_main_wrapper">
                <BlogDisp/>
            </div>
            <div className="blog_footer_wrapper">
                <Footer/>
            </div>
        </div>
    )
}