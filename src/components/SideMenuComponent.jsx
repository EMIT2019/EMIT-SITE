import './css/SideMenuStyles.css'
import ProfileCardComponent from './ProfileCardComponent'
import MenuComponent from './MenuComponent'
import SocialMediaComponent from './SocialMediaComponent'
import { BrowserRouter } from 'react-router-dom'

function SideMenuComponent() {

    return(
        <>
        <div className="side_menu">
            <ProfileCardComponent/>
            <MenuComponent/>
            <SocialMediaComponent/>
        </div>
        </>
    )
}

export default SideMenuComponent