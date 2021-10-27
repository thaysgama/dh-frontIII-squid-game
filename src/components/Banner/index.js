import './style.css'
import gif from "./img/squid-game-gong-yoo.gif";

const Banner = ({children}) => {
    return (
        <div id="banner">

            <div id="container-button">
                                
                    <a id="btn-link" href="https://www.youtube.com/watch?v=oqxAJKy0ii4">
                        <button>
                            {children}
                        </button>
                    </a>
                    <img id="gif" src={gif} alt="gif"/>
                
            </div>
            
           

        </div>
    )

}

export default Banner;