import CardViewTitleComponent from "./CardViewTitleComponent"
import ProgressBarComponent from "./ProgressBarComponent"
import './css/SkillCardViewStyles.css'

function SkillCardViewComponent(data){

    const card_title = data.card_view_info.title;
    const card_skill_levels = data.card_view_info.skills_levels; 
    const card_description = data.card_view_info.description;

    return(
        <>
        <div className="skill_card_view_container">
            <CardViewTitleComponent title={card_title}/>
            <div className="levels_section">
                {card_skill_levels.map((item, index) => (
                    <ProgressBarComponent key={index} title={item.technology} progress={item.level}/>
                ))}
            </div>
            <div className="card_description">
                <p>{card_description}</p>
            </div>
        </div>
        </>
    )
}

export default SkillCardViewComponent