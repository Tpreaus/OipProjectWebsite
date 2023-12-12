import "./AprovedCourse.css"
import Header from "../../components/Header/Header"
import CourseDisp from "../../components/CourseDisp/CourseDisp"
import Footer from "../../components/Footer/Footer"

export default function ApprovedCourse() {
    return(
    <div className="approvedcourse">
        <div className="approved_top_wrapper">
            <Header/>
        </div>
        <div className="approved_main_wrapper">
            <CourseDisp/>
        </div>
        <div className="approved_footer_wrapper">
            <Footer/>
        </div>
    </div>
    )
}