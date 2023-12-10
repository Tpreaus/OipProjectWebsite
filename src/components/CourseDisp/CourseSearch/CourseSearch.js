import Blogdemo from "../../Intro/Blogdemo/Blogdemo"
import BasicSelect from "../../Select/BasicSelect"
import CountrySelect from "../../Select/CountrySelect"
import CreditSelect from "../../Select/CreditSelect"
import "./CourseSearch.css"

export default function CourseSearch() {
    return(
        <div className="coursesearch">
            <CreditSelect/>
            <CountrySelect/>
        </div>
    )
}