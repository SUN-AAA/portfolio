import img from '../assets/background.jpg'
import "../styles/background.css" 

function profile() {
    return(
        <div id="profile">
            <hr></hr>
            <h2>Profile</h2>
            <img src={img} alt = "background" className="background"></img>
            <h2>안녕하세요 저는 정선아 입니다!</h2>
        </div>
    )
}

export default profile;