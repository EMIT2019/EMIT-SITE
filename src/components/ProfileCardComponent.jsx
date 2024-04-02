import './css/ProfileCardStyles.css'

function ProfileCardComponent(){
    return(
        <>
        <div className="profile_card">
            <div className='picture_container'>
                <img src="src\assets\images\profile_picture.jpg" alt="profile_picture" />
            </div>
            <div className='name_container'>
                <h1>EMILIANO URBINA</h1>
            </div>
        </div>
        </>
    )
}

export default ProfileCardComponent