import "./Intro.css";
import Blogdemo from "./Blogdemo/Blogdemo"

function Intro() {
    return(
        <div className="intro">
            <h1>Welcome to the OIP Database!</h1>
            <p>This is a database project for a class and still has a 
                lot of things that need to be done before advancing to full deployment</p>
            <p>This is built using the PERN stack and the </p>
            <Blogdemo/>
        </div>
    )
}

export default Intro;