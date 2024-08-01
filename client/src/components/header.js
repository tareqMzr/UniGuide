import "../Styles/Header.css";
import { Link } from "react-router-dom";
function Header(){
    return(
        <header className="header-Style">
            <div className="title-Style">
                <Link to="/"><p>UniGuide</p></Link>
            </div>
            <ul className="ul-Style">
                <li>Courses</li>
                <li>Community</li>
                <li>About</li>
                <li>News</li>
            </ul>
            <ul className="register-Style">
                <Link to="/Login"><li>Login </li></Link>
                <Link to="/SignUp"> <li className="signup-Style">Sign Up</li></Link>
            </ul>
        </header>
    );
}
export default Header;