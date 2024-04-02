import './css/MenuStyles.css'

function MenuComponent(){
    return(
        <>
        <div className="menu_container">
            <nav className='menu_nav_container'>
                <ul className="menu_nav_list">
                    <li>
                        <h4>HOME</h4>
                    </li>
                    <li>
                        <h4>SKILLS</h4>
                    </li>
                    <li>
                        <h4>EXPERIENCE</h4>
                    </li>
                    <li>
                        <h4>PROJECTS</h4>
                    </li>
                    <li>
                        <h4>CONTACT</h4>
                    </li>
                </ul>
            </nav>
        </div>
        </>
    )
}

export default MenuComponent