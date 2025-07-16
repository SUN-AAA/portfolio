import "../styles/header.css";

function header() {
    return(
        <div>
            <div class="topLeftBox">
                <p><a href="https://github.com/SUN-AAA" class="topLeftBoxItem"><b>Github</b></a></p>
            </div>
            <div class="homebutton">
                <p><a href="#home" class="topLeftBoxItem"><b>HOME</b></a></p>
            </div>
            <div>
                <h1>PORTFOLIO</h1>
                <hr></hr>
            </div>
        </div> 
    )
}

export default header;