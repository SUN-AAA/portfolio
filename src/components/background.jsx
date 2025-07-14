import img from '../assets/background.jpg'
import "../styles/background.css" 

function background() {
    return(
        <img src={img} alt = "background" className="background"></img>
    )
}

export default background;