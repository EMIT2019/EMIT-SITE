import './css/ProgressBarStyles.css'

function ProgressBarComponent(data){
    return(
        <>
        <div className="progress_bar_container">
            <div className="progress_title">
                <h4>{data.title}</h4>
            </div>
            <div className="progress_bar_inner_container">
                <progress id="file" value={data.progress} max="100"></progress>
            </div>
        </div>
        </>
    )
}

export default ProgressBarComponent