import './css/PreviousJobsStyles.css'
import PreviousJobCardViewComponent from './PreviousJobCardViewComponent'
import SideMenuComponent from './SideMenuComponent'

function PreviousJobsComponent() {

    const card_view_data = [
        {
            job_title: "SALES REPESENTATIVE", 
            date_range: "06/2022 - 12/2022", 
            location: {lat: 0, lng:0}, 
            company_name: "Lion Financing / Lendflow", 
            job_description: "My work at Lendflow was about making calls to potential clients to sell them financial products. I had to collect useful information about their business needs and use it as an advantage for selling those products.",
            references: [
                {
                    ref_info: "Heyling Briones  +505-89723498"
                },
                {
                    ref_info: "Martin Salinas  +505-56234588"
                }
            ]
        },
        {
            job_title: "ENGLISH TEACHER", 
            date_range: "01/2023 - 12/2023", 
            location: {lat: 0, lng:0}, 
            company_name: "Xolotlan Educative Center", 
            job_description: "Working in this educational center, I had to teach English lessons, but I had to adapt my way of teaching into a more flexible way because there were inclusive kids that learn in many different ways than just the traditional ways.",
            references: [
                {
                    ref_info: "Lic. Amalia Medina  +505-78562345"
                }
            ]
        }
    ]

    return(
        <>
        <div className="global_container">
            <div className="side_menu_container">
                <SideMenuComponent/>
            </div>
            <div className="previous_jobs_container">
                <ul className="previous_jobs_list">
                    {card_view_data.map((item, index) => (
                        <PreviousJobCardViewComponent key={index} card_view_info={item}/>
                    ))}
                </ul>
            </div>
        </div>
        
        </>
    )
}

export default PreviousJobsComponent