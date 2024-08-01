import {useState,useEffect,useRef} from "react";
import "../../Styles/loginBody.css"
import AuthinticationApi from "../../API/AuthinticationApi";
function RegisterFrom(){
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const emailRef = useRef();
    const errorRef=useRef();
    const AuthAPI=new AuthinticationApi();

    const [signInfo,setSignInfo]=useState(
        {
            Email:"",
            UserName:"",
            Password:"",
            ConfirmPassword:""
        }
    );
    const [isValid,setValid]=useState(
        {
            isValidEmail:false,
            isValidUserName:false,
            isValidPassword:false,
            isValidMatch:false
        }
    );
    const [isFocus,setFocus]=useState(
        {
            isFocusEmail:false,
            isFocusUserName:false,
            isFocusPassword:false,
            isFocusMatch:false
        }
    );
    const [errMSG,setErrMSG]=useState("");
    const [success,setSuccess]=useState(false);

    function onChange(event){
        const {name,value}=event.target
        setSignInfo((old)=>{
            return{
                ...old,
                [name]:value
            }
        });
    }
    async function handleSumbtion(event){
        event.preventDefault();
        if(!isValid.isValidEmail ||!isValid.isValidUserName||!isValid.isValidPassword||!isValid.isValidMatch){
            setErrMSG("Invalid Inputs");
            return;
        }
        try{
            const result=await AuthAPI.SiginApi(signInfo);
            setSuccess(result.data.message);
        }
        catch(err){
            console.log("err",err);
            setErrMSG(err.response.data.message);
        }
    }

    useEffect(() => {
        emailRef.current.focus();
    },[]);

    useEffect(()=>{
        const result=emailRegex.test(signInfo.Email);
        setValid((old)=>{
            return{
                ...old,
                isValidEmail:result
            }
        });
    },[signInfo.Email]);

    useEffect(()=>{
        const result=usernameRegex.test(signInfo.UserName);
        setValid((old)=>{
            return{
                ...old,
                isValidUserName:result
            }
        });
    },[signInfo.UserName]);

    useEffect(()=>{
        const result=passwordRegex.test(signInfo.Password);
        setValid((old)=>{
            return{
                ...old,
                isValidPassword:result
            }
        });
        const isMatch=signInfo.Password===signInfo.ConfirmPassword;
        setValid((old)=>{
            return{
                ...old,
                isValidMatch:isMatch
            }
        });
    },[signInfo.Password,signInfo.ConfirmPassword]);

    useEffect(()=>{
        setErrMSG('');
    },[signInfo.Email,signInfo.UserName,signInfo.Password]);

    return(
        <>
        {success ? (
            <section className="loginForm-Style">
                <div className="subLoginForm-Style"> 
                <h1>Success</h1>
                <p>
                    <a href="/Login">Sign In</a>
                </p>
                </div>
            </section>):(
            <div className="loginForm-Style">
                <div className="subLoginForm-Style">
                    <p style={{fontSize:"34px"}}>Get Started Now</p>
                    <form className="submitionFrom-Style">
                        <label style={{textAlign:"start"} } htmlFor="Email" className={!isValid.isValidEmail && signInfo.Email ?"display":null}>Email</label>
                        <input 
                        id="Email" 
                        ref={emailRef} 
                        type="text" 
                        placeholder="Enter Your Email" 
                        aria-invalid={isValid.isValidEmail ? "false":"true"} 
                        aria-describedby="eminote" 
                        className="registerInput-Style" 
                        name="Email"
                        onChange={onChange} required 
                        onFocus={() => setFocus((old) => ({ ...old, isFocusEmail: true }))}
                        onBlur={() => setFocus((old) => ({ ...old, isFocusEmail: false }))}/>
    
                        <p id="eminote" ref={errorRef} className={!isValid.isValidEmail&&isFocus.isFocusEmail &&signInfo.Email ?"display":"hidden"}>Start with letters <br/>Follow this with an @ symbol<br/>After the @, include more letters, numbers, dots (.), or hyphens (-) for the domain name.<br/>End with a dot (.) and at least two letters (like .com, .net, .org).</p>
                        <br/>
                        <label htmlFor="UserName" style={{textAlign:"start"} } className={!isValid.isValidUserName && signInfo.UserName ?"display":null}>User Name</label>
                        <input 
                        id="UserName" 
                        type="text" 
                        placeholder="Enter Your Name" 
                        name="UserName" 
                        className="registerInput-Style" 
                        onChange={onChange} 
                        required
                        aria-invalid={isValid.isValidUserName ? "false":"true"} 
                        aria-describedby="usrnote" 
                        onFocus={() => setFocus((old) => ({ ...old, isFocusUserName: true }))}
                        onBlur={() => setFocus((old) => ({ ...old, isFocusUserName: false }))}
                        />
                        <p id="usrnote" className={!isValid.isValidUserName && signInfo.UserName&& isFocus.isFocusUserName ?"display":"hidden"}>UserName should at least have 3 Charactes</p>
                        <br/>
    
                        <label htmlFor="Password" className={!isValid.isValidPassword && signInfo.Password ?"display":null}>Password</label>
                        <input 
                        type="password" 
                        id="Password"
                        placeholder="Enter Your Password" 
                        name="Password"
                        className="registerInput-Style" 
                        onChange={onChange} 
                        aria-invalid={isValid.isValidPassword ? "false":"true"} 
                        aria-describedby="pwdnote" 
                        onFocus={() => setFocus((old) => ({ ...old, isFocusPassword: true }))}
                        onBlur={() => setFocus((old) => ({ ...old, isFocusPassword: false }))}
                        required/>
                        <p id="pwdnote" className={!isValid.isValidPassword &&isFocus.isFocusPassword && signInfo.Password ?"display":"hidden"}>at least 8 Characters <br/> start with letter <br/>Should contain uppercase letter with character and number</p>
                        <br/>
                        <label htmlFor="ConfirmPassword" style={{textAlign:"start"}} className={!isValid.isValidMatch ?"display":null}>Confirm Password</label>
                        <input 
                        id="ConfirmPassword" 
                        type="password" 
                        placeholder="Enter Confirm Password" 
                        name="ConfirmPassword" 
                        className="registerInput-Style" 
                        onChange={onChange} 
                        aria-invalid={isValid.isValidMatch ? "false":"true"} 
                        aria-describedby="cpwdnote" 
                        required/>
                        <p id="cpwdnote" className={!isValid.isValidMatch  ?"display":"hidden"}>Wrong Confirm Password</p>
                        <br/>
                        <p className={errMSG?"display":"hidden"}>{errMSG}</p>
                        <input type="submit" value="SingUp" className="btnsubmitFrom-Style" disabled={!isValid.isValidEmail || !isValid.isValidUserName||!isValid.isValidPassword||!isValid.isValidMatch?true:false} onClick={handleSumbtion}/> 
                    </form>
                </div>
            </div>
            )}
            </>
    );
}
export default RegisterFrom;