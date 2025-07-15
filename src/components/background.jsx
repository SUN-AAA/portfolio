import img from '../assets/background.jpg'
import "../styles/background.css" 

function background() {
    return(
        <div id="profile">
            <hr></hr>
            <h2>Profile</h2>
            <img src={img} alt = "background" className="background"></img>
        </div>
    )
}

export default background;