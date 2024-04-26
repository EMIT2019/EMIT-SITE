import './css/MenuStyles.css'
import { Link } from 'react-router-dom'

function MenuComponent(){

    return(
        <>
        <div className="menu_container">
            <nav className='menu_nav_container'>
                <ul className="menu_nav_list">
                    <li>
                        <Link to="/"><h4>HOME</h4></Link>
                    </li>
                    <li>
                        <Link to="/skills"><h4>SKILLS</h4></Link>
                    </li>
                    <li>
                        <Link to="/experience"><h4>EXPERIENCE</h4></Link>
                    </li>
                    <li>
                        <Link to="/projects"><h4>PROJECTS</h4></Link>
                    </li>
                    <li>
                        <Link to="/contact"><h4>CONTACT</h4></Link>
                    </li>
                </ul>
            </nav>
        </div>
        </>
    )
}

export default MenuComponent