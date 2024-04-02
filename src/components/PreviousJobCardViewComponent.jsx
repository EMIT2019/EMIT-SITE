import { useEffect, useState } from 'react';
import './css/CardViewParagraphStyles.css'
import './css/CardViewTitleStyles.css'
import './css/PreviousJobCardViewStyles.css'

function PreviousJobCardViewComponent(data){

    const job_title = data.card_view_info.job_title;
    const date = data.card_view_info.date_range;
    const location = data.card_view_info.location;
    const company = data.card_view_info.company_name;
    const job_desc = data.card_view_info.job_description;
    const references = data.card_view_info.references;

    const [buttonText, setButtonText] = useState("SEE REFERENCES")
    const [newClass, setNewClass] = useState("references_container")

    const handleChange = () => {
        setButtonText(buttonText == "SEE REFERENCES" ? "HIDE" : "SEE REFERENCES")
        setNewClass(newClass == "references_container" ? "references_container_animation" : "references_container")
    }

    return(
        <>
        <div className="previous_job_container">
            <div className='heading_info_container'>
                <div className='title_date_container'>
                    <div className="title_container">
                        <h2>{job_title}</h2>
                    </div>
                    <div className='date_range_container'>
                        <p>{date}</p>
                    </div>
                </div>
                <div className='marker_maps_container'>
                    <a href='#'>
                        <img src='src\assets\icons\address-icon.png' alt='marker_icon' />
                    </a>
                </div>
            </div>
            <div className='body_content_container'>
                <div className="company_name_container">
                    <h2>{company}</h2>
                </div>
                <div className="card_description">
                    <p>{job_desc}</p>
                </div>
                <div className={newClass}>
                    <div className='references_title'>
                        <h4>REFERNCES</h4>
                    </div>
                    <div className='references_content'>
                        <ul className='references_list'>
                            <li>
                                <div className='ref_list'>
                                    {references.map((item) => (
                                        <div>
                                            <p>{item.ref_info}</p>
                                            <img src='src\assets\icons\Digital_Glyph_White.png' alt='whatsapp_icon'/>
                                        </div>
                                    ))}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="button_container">
                <button onClick={handleChange} type="button">{buttonText}</button>
            </div>
        </div>
        </>
    )
}

export default PreviousJobCardViewComponent