import Footer from "./components/footer";
import Header from "./components/header";
import RegisterBody from "./components/Register/Body";
import { useState,useEffect } from "react";
function Authintication(){
    const currentUrl = window.location.href;
    const [data,setData]=useState(false);
    useEffect(()=>{
        function URL(){
            if(currentUrl==="http://localhost:3000/SignUp"){
                setData(true);
            }
            else{
                setData(false);
            }
        }
        URL();
    },[currentUrl]);
    
    return (
        <div>
            <Header/>
            <RegisterBody isSignUp={data}/>
            <Footer/>
        </div>
    );
}
export default Authintication;