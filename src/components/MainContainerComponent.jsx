import './css/MainContainerStyles.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import SideMenuComponent from './SideMenuComponent'

function MainContainerComponent() {
    return(
        <>
        <div className = "main_container col-lg-12">
            <SideMenuComponent/>
        </div>
        </>
    );
}

export default MainContainerComponent;