import './css/SkillsStyles.css'
import SkillCardViewComponent from './SkillCardViewComponent'
import SideMenuComponent from './SideMenuComponent'
import { useEffect } from 'react'

function SkillsComponent(){

    useEffect(() => {
        console.log("it works");
    })

    const cards_view_data = {
        web_dev: {
            title: "WEB DEVELOPMENT", 
            skills_levels: [
                {
                    technology: "HTML", 
                    level: 100
                }, 
                {
                    technology: "CSS", 
                    level: 98
                }, 
                {
                    technology: "JavaScript", 
                    level: 96
                }, 
                {
                    technology: "React JS", 
                    level: 30
                }, 
                {
                    technology: "Bootstrap", 
                    level: 75
                }
            ],
            description: "I have knowledge about front-end development technologies such as, HTML, CSS (Styles and responsive), JavaScript, React JS and Bootstrap. "
        },
        api_dev: {
            title: "API DEVELOPMENT",
            skills_levels: [
                {
                    technology: "JAVA", 
                    level: 90
                }, 
                {
                    technology: "Spring Boot Framework", 
                    level: 80
                }
            ],
            description: "For backend side, I've gotten knowledge about Java and Spring Boot Framework for API development for multitier architecture software and data transfer."
        },
        android_dev: {
            title: "ANDROID APP DEVELOPMENT",
            skills_levels: [
                {
                    technology: "Kotlin", 
                    level: 20
                }, 
                {
                    technology: "Jetpack Compose Framework", 
                    level: 5
                }
            ],
            description: "I have basic knowledge about Android development. I’m trying to improve."
        },
        db_management : {
            title: "DATABASE MANAGEMENT",
            skills_levels: [
                {
                    technology: "SQL Server", 
                    level: 75
                }, 
                {
                    technology: "MySQL", 
                    level: 75
                }, 
                {
                    technology: "PostgreSQL", 
                    level: 40
                }
            ],
            description: "These are the database technologies I have worked with. I do have knowledge about maintaining the database and its data integrity."
        },
        languages : {
            title: "LANGUAGES",
            skills_levels: [
                {
                    technology: "Spanish (Native speaker)", 
                    level: 100
                }, 
                {
                    technology: "English", 
                    level: 89
                }, 
                {
                    technology: "Dutch", 
                    level: 10
                }
            ],
            description: "HOLA!, GREETINGS!, HALLO!"
        },
    }

    return(
        <>
        <div className='global_container'>
            <div className='side_menu_container'>
                <SideMenuComponent/>
            </div>
            <div className="skills_main_container">
                <ul className="skills_list">
                    <li>
                        <SkillCardViewComponent card_view_info={cards_view_data.web_dev}/>
                    </li>
                    <li>
                        <SkillCardViewComponent card_view_info={cards_view_data.api_dev}/>
                        <SkillCardViewComponent card_view_info={cards_view_data.android_dev}/>
                    </li>
                    <li>
                        <SkillCardViewComponent card_view_info={cards_view_data.db_management}/>
                        <SkillCardViewComponent card_view_info={cards_view_data.languages}/>
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default SkillsComponent