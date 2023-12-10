import "./AprovedCourse.css"
import Header from "../../components/Header/Header"
import CourseDisp from "../../components/CourseDisp/CourseDisp"
import CourseSearch from "../../components/CourseDisp/CourseSearch/CourseSearch"

export default function ApprovedCourse() {
    return(
    <div className="approvedcourse">
        <div className="approved_top_wrapper">
            <Header/>
        </div>
        <div className="approved_main_wrapper">
            <CourseSearch/>
            <CourseDisp/>
        </div>
    </div>
    )
}