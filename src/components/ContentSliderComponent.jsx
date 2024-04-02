import './css/ContentSliderStyles.css'
import SkillsComponent from './SkillsComponent'

function ContentSliderComponent(){
    return(
        <>
        <div className="content_slider_main_container">
            <ul className="slider_list">
                <li>
                    <SkillsComponent/>
                </li>
                <li>a</li>
                <li>a</li>
                <li>a</li>
            </ul>
        </div>
        </>
    )
}

export default ContentSliderComponent