import './css/ProjectsStyles.css'
import SideMenuComponent from './SideMenuComponent'
import ProjectsCardViewComponent from './ProjectsCardViewComponent'

function ProjectsComponent(){

    const project_types = {
        personal: "Personal Project",
        professional: "Professional Project"
    }

    const card_view_data = [
        {
            project_title: "ENGINE REST API", 
            project_type: project_types.personal,
            stack: ["Java", "Spring Boot Framework", "MySQL"],
            img: "src/assets/images/spring_boot_image.png",
            project_desc: "Engine Rest API is a Java and Spring Boot Framework application. This project takes information from the client and stores it in a MySQL database. The data goes through an encryption process before being stored, so once it is in the database, it is already encrypted thanks to an algorithm implemented on the project. This small project was designed and developed based on Domain Driven Design, and it follows all its principles, for example, capturing the domain model in domain terms or protecting the domain knowledge from corruption by implementing the single responsibility principle. Furthermore, this project implements Specification interface for dynamic queries.",
            github_repo_link: "https://github.com/EMIT2019/Engine-REST-API"
        },
        {
            project_title: "CONSTRUTEX", 
            project_type: project_types.professional,
            stack: ["HTML", "CSS", "JavaScript", "BOOTSTRAP"],
            img: "src/assets/images/construtex_image.png",
            project_desc: "Construtex website is a small landing page where the actual ConstruTex company is offering construction and remodeling services. This small project was developed with vanilla technologies like HTML, CSS and JavaScript following the Single Page Application architecture, all the content its contained in a single HTML index file. However it is hoped a new web page for this company using more actual technologies.",
            github_repo_link: "https://github.com/EMIT2019/ConstruTex.git"
        },
        {
            project_title: "PASSWORD MANAGER API", 
            project_type: project_types.personal,
            stack: ["Java", "Spring Boot Framework", "MySQL"],
            img: "src/assets/images/spring_boot_image.png",
            project_desc: "Password Manager API is a Java and Spring Boot Framework application. This project takes information from the client and stores it in a MySQL database. The data goes through an encryption process before being stored, so once it is in the database, it is already encrypted thanks to an algorithm implemented on the project. This small project was designed and developed based on Domain Driven Design, and it follows all its principles, for example, capturing the domain model in domain terms or protecting the domain knowledge from corruption by implementing the single responsibility principle. This project was created with the idea of being consumed by a client side application to work as an actual personal password manager.",
            github_repo_link: "https://github.com/EMIT2019/password_manager_api"
        }
    ]

    return(
        <>
        <div className="global_container">
            <div className="side_menu_container">
                <SideMenuComponent/>
            </div>
            <div className="projects_container">
                <ul className="projects_list">
                    {card_view_data.map((item, index) => (
                        <li key={index}>
                            <ProjectsCardViewComponent key={index} project={item}/>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        </>
    )
}

export default ProjectsComponent