import './css/ContactStyles.css'
import FormComponent from './FormComponent';
import SideMenuComponent from './SideMenuComponent';

function ContactComponent() {
    return(
        <>
        <div className="global_container">
            <div className="side_menu_container">
                <SideMenuComponent/>
            </div>
            <div className="contact_container">
                <FormComponent/>
            </div>
        </div>
        </>
    )
}

export default ContactComponent;