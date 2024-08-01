import "../Styles/Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import Container from './subComponents/Container'; 
function Footer(){
    return(
        <footer>
            <br/><br/><br/> 
            <hr className="footerline-Styled"></hr>
            <Container>
                <ul className="ul-Style" style={{width:"20%",color:"white",fontSize:"30px"}}>
                    <FaFacebookF/>
                    <FaInstagram/>
                    <RiTwitterXFill/>
                </ul>
                <ul className="ul-Style" style={{color:"white",fontSize:"19px"}}>
                    <li className="footerli-Styled">About us</li>
                    <li className="footerli-Styled">Contact us</li>
                </ul>
            </Container>
        </footer>
    );
}
export default Footer;