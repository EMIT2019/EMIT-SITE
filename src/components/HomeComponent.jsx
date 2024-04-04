import { Link } from "react-router-dom"
import SideMenuComponent from "./SideMenuComponent"
import './css/HomeStyles.css'

function HomeComponent(){
    return(
        <>
        <div className="global_container">
            <div className="side_menu_container">
                <SideMenuComponent/>
            </div>
            <div className="home_container">
                <div className="home_content_container">
                    <div className="presentation_header_container">
                        <p>HELLO,</p>
                    </div>
                    <div className="presentation_paragraph_container">
                        <p>I am Emiliano Urbina, a junior developer from El Salvador, but I've been living most of my life in Nicaragua. I have experience building and designing web projects, like landing pages, applications, or even a full website. Besides, I'm good with REST API development with Java and the Spring Boot Framework and database management.</p>
                    </div>
                    <div className="buttons_container">
                        <Link to='/projects'>
                            <button className="btn_portfolio">PORTFOLIO</button>
                        </Link>
                        <Link to='/skills'>
                            <button className="btn_view_more">VIEW MORE</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default HomeComponent