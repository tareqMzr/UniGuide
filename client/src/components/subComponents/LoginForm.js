import {useState,useEffect,useRef} from "react";
import "../../Styles/loginBody.css"
import AuthinticationApi from "../../API/AuthinticationApi";

function LoginForm(){
    const emailRef=useRef();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const [loginInfo,setLoginInfo]=useState(
        {
            Email:"",
            Password:""
        }
    );
    const [isValidInfo,setValidInfo]=useState(
        {
            isValidEmail:false,
            isValidPassword:false
        }
    );
    const [isFocus,setFocus]=useState(
        {
            isFocusEmail:false,
            isFocusPassword:false
        }
    );
    const [errMSG,setErrMSG]=useState("");
    const [success,setSuccess]=useState(false);
    const AuthAPI=new AuthinticationApi();

    function onChange(event){
        const {name,value}=event.target
        setLoginInfo((old)=>{
            return{
                ...old,
                [name]:value
            }
        });
    }
    async function handleSumbtion(event){
        event.preventDefault();
        if(!isValidInfo.isValidEmail ||!isValidInfo.isValidPassword){
            setErrMSG("Invalid Inputs");
            return;
        }
        try{
            const result=await AuthAPI.LoginApi(loginInfo);
            setErrMSG("");
            setSuccess(result.data.message);
        }
        catch(err){
            console.log("err",err);
            setErrMSG(err.response.data.message);
        }
    }

    useEffect(()=>{
        emailRef.current.focus();
    },[]);

    useEffect(()=>{
        const result=emailRegex.test(loginInfo.Email);
        setValidInfo((old)=>{
            return{
                ...old,
                isValidEmail:result
            }
        });
    },[loginInfo.Email]);

    useEffect(()=>{
        const result=passwordRegex.test(loginInfo.Password);
        setValidInfo((old)=>{
            return{
                ...old,
                isValidPassword:result
            }
        });
        
    },[loginInfo.Password]);


    useEffect(()=>{

    },[loginInfo.Password]);

    return(
        <div className="loginForm-Style">
            <div className="subLoginForm-Style">
                <p style={{fontSize:"34px"}}>Get Started Now</p>
                <form className="submitionFrom-Style">
                        <label style={{textAlign:"start"} } htmlFor="Email" className={!isValidInfo.isValidEmail && loginInfo.Email ?"display":null}>Email</label>
                        <input 
                        id="Email" 
                        ref={emailRef} 
                        type="text" 
                        placeholder="Enter Your Email" 
                        aria-invalid={isValidInfo.isValidEmail ? "false":"true"} 
                        aria-describedby="eminote" 
                        className="registerInput-Style" 
                        name="Email"
                        onChange={onChange} required 
                        onFocus={() => setFocus((old) => ({ ...old, isFocusEmail: true }))}
                        onBlur={() => setFocus((old) => ({ ...old, isFocusEmail: false }))}/>
    
                        <p id="eminote"  className={!isValidInfo.isValidEmail&&isFocus.isFocusEmail &&loginInfo.Email ?"display":"hidden"}>Start with letters <br/>Follow this with an @ symbol<br/>After the @, include more letters, numbers, dots (.), or hyphens (-) for the domain name.<br/>End with a dot (.) and at least two letters (like .com, .net, .org).</p>
                        <br/>
                        <label htmlFor="Password" className={!isValidInfo.isValidPassword && loginInfo.Password ?"display":null}>Password</label>
                        <input 
                        type="password" 
                        id="Password"
                        placeholder="Enter Your Password" 
                        name="Password"
                        className="registerInput-Style" 
                        onChange={onChange} 
                        aria-invalid={isValidInfo.isValidPassword ? "false":"true"} 
                        aria-describedby="pwdnote" 
                        onFocus={() => setFocus((old) => ({ ...old, isFocusPassword: true }))}
                        onBlur={() => setFocus((old) => ({ ...old, isFocusPassword: false }))}
                        required/>
                        <p id="pwdnote" className={!isValidInfo.isValidPassword &&isFocus.isFocusPassword && loginInfo.Password ?"display":"hidden"}>at least 8 Characters <br/> start with letter <br/>Should contain uppercase letter with character and number</p>
                        <br/>
                        <p className={errMSG?"display":"hidden"}>{errMSG}</p>
                        <input type="submit" value="SingUp" className="btnsubmitFrom-Style" disabled={!isValidInfo.isValidEmail ||!isValidInfo.isValidPassword?true:false} onClick={handleSumbtion}/> 
                    </form>
            </div>
        </div>
    );
}
export default LoginForm;