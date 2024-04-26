import './css/FormStyles.css'

function FormComponent(){
    return(
        <>
        <div className="form_container">
            <div className="info_section">
                <ul className="info_list">
                    <li>
                        <div className="info_item">
                            <div className="icon">
                                <img src='src\assets\icons\markdown_stroke.png' alt='address_icon' />
                            </div>
                            <div className="info_text">
                                <div className="heading_section">
                                    <h4>Address</h4>
                                </div>
                                <div className="info_content_section">
                                    <p>Ciudad Sandino, Managua, Nicaragua</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="info_item">
                            <div className="icon">
                                <img src='src\assets\icons\phone_stroke.png' alt='address_icon' />
                            </div>
                            <div className="info_text">
                                <div className="heading_section">
                                    <h4>Let's talk</h4>
                                </div>
                                <div className="info_content_section">
                                    <a href='https://wa.me/+50578552666'>+505 78552666</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="info_item">
                            <div className="icon">
                                <img src='src\assets\icons\email_stroke.png' alt='address_icon' />
                            </div>
                            <div className="info_text">
                                <div className="heading_section">
                                    <h4>You can also email me</h4>
                                </div>
                                <div className="info_content_section">
                                    <a href='mailto:emilianoandreurbinazavala@gmail.com'>emilianoandreurbinazavala@gmail.com</a>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="form_section">
                <div className="form_heading">
                    <h4>SEND ME YOUR INFO</h4>
                </div>
                <div className="form_content">
                    <form action="">
                        <input type="text" placeholder='Name' />
                        <input type="text" placeholder='Lastname' />
                        <input type="text" placeholder='Email' />
                        <textarea name="" id="" cols="30" rows="5" placeholder='Tell me more...' ></textarea>
                        <button type="submit">SEND</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default FormComponent;