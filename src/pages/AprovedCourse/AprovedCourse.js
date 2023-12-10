import "./AprovedCourse.css"
import Header from "../../components/Header/Header"
import CourseDisp from "../../components/CourseDisp/CourseDisp"

export default function ApprovedCourse() {
    return(
    <div className="approvedcourse">
        <div className="approved_top_wrapper">
            <Header/>
        </div>
        <div className="aproved_main_wrapper">
            <CourseDisp/>
        </div>
    </div>
    )
}