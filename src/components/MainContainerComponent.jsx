import './css/MainContainerStyles.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import SideMenuComponent from './SideMenuComponent'
import ContentSliderComponent from './ContentSliderComponent';

function MainContainerComponent() {
    return(
        <>
        <div className = "main_container col-lg-12">
            <SideMenuComponent/>
            <ContentSliderComponent/>
        </div>
        </>
    );
}

export default MainContainerComponent;