import './css/SocialMediaStyles.css'

function SocialMediaComponent(){
    return(
        <>
        <div className='social_media_container'>
            <nav className='social_media_nav_container'>
                <ul className="social_media_list">
                    <li>
                        <a href="#">
                            <img src="src\assets\icons\email-icon.png" alt="email_icon" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="src\assets\icons\github-icon.png" alt="github_icon" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="src\assets\icons\linkedin-icon.png" alt="linkedin_icon" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="src\assets\icons\Digital_Glyph_White.png" alt="whatsapp_icon" />
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
        </>
    )
}

export default SocialMediaComponent