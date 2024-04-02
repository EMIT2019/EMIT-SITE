import './css/CardViewTitleStyles.css'

function CardViewTitleComponent(data){
    return(
        <>
        <div className="title_container">
            <h2>{data.title}</h2>
        </div>
        </>
    )
}

export default CardViewTitleComponent