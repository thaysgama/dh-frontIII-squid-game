import './style.css'
import foto from './img/squid-game-logo.png';
import Greeting from '../Greeting';

const Header = () =>{
    
    return(
        <>
        <header>
        <img id="logo" src={foto} className="logo" alt="logo" />
        <Greeting/>
        </header>
        </>
    )
}

export default Header;