import { useState } from 'react'
import './css/ProjectsCardViewStyles.css'
import { Link } from 'react-router-dom';

function ProjectsCardViewComponent(data){

    let dataObject = data.project;

    const [newClass, setNewClass] = useState("project_description_container");
    const [buttonValue, setButtonValue] = useState("LEARN MORE");

    const handleClassChange = () => {
        setNewClass(newClass == "project_description_container" ? "show_project_description" : "project_description_container")
        setButtonValue(buttonValue == "LEARN MORE" ? "HIDE" : "LEARN MORE")
    }

    const handleRedirect = (url) => {
        window.location.href = ""+url+"";
    }

    return(
        <>
        <div className="project_cardview_container">
            <div className="heading_info_container">
                <div className="card_view_title_container">
                    <h2>{dataObject.project_title}</h2>
                </div>
                <div className='project_type_tag_container'>
                    <h4>{dataObject.project_type}</h4>
                </div>
            </div>
            <div className="tecnology_stack_container">
                <div className="stack_title">
                    <h4>STACK:</h4>
                </div>
                <div className="technology_stack_inner_container">
                    <ul className="technology_stack_list">
                        {dataObject.stack.map((item, index) => (
                            <li key={index}>
                                <div className="technology_item">
                                    <h4>{item}</h4>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="image_container">
                <img src={dataObject.img} alt="technology_concept_image" />
            </div>
            <div className={newClass}>
                <p>{dataObject.project_desc}</p>
            </div>
            <div className="buttons_section_container">
                <div>
                    <button type="button" onClick={handleClassChange}>{buttonValue}</button>
                </div>
                <div>
                    <button type="button" onClick={() => handleRedirect(dataObject.github_repo_link)}>SEE GITHUB REPOSITORY</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default ProjectsCardViewComponent