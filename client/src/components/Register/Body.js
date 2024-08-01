import "../../Styles/loginBody.css"
import RegisterFrom from "../subComponents/RegisterForm";
import LoginForm from "../subComponents/LoginForm";
function RegisterBody(props){
    return(
        <div className="loginContainer-Style">
            {props.isSignUp ? <RegisterFrom/>:<LoginForm/>}
            <div className="loginImgContainer-Style">
                <img src={`${process.env.PUBLIC_URL}/loginImage.jpg`} alt="img" className="loginImage-Style"/>
            </div>
        </div>
    );
}
export default RegisterBody;