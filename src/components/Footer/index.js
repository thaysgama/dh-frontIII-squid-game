import './style.css'

const Footer = ({company}) =>{
    return(
        <footer>
            <div>
                <p>Those competing in Squid Game are given the chance to win ₩45.6 billion if they successfully get through all six stages of the competition.</p>
                <p>{company.name} - {company.description} </p>
            </div>
        </footer>
    )
}

export default Footer;