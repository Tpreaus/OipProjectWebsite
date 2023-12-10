/* 
*  Author : Theo Preaus
*
*  Create a basic website with 2 tabs Approved Class / Blogs and link to PostgreSQL database
*/
import "./Home.css";
import Header from "../Header/Header"
import Intro from "./Intro/Intro";

function Home() {
    return (
        <div className="Home">
            <div className="top_wrapper">
                <Header/>
            </div>
            <div className="main_wrapper">
                <Intro/>
            </div>
        </div>
    )
}
export default Home;