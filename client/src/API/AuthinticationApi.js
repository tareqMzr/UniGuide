import axios from "axios";
class AuthinticationApi{
    async LoginApi(props){
        try{
            const result=await axios.post("/Login",JSON.stringify(props),{
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return result;
        }
        catch(err){
            throw err;
        }
    }
    async SiginApi(props){
        try{
            const result=await axios.post("/SignUp",JSON.stringify(props),{
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return result;
        }
        catch(err){
            throw err;
        }
    }   
}
export default AuthinticationApi;