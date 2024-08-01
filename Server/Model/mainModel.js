import  pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const db=new pg.Client({
    user:process.env.POSTGRES_USER,
    host:process.env.POSTGRES_HOST,
    database:process.env.POSTGRES_DB,
    password:process.env.POSTGRES_PASSWORD,
    port:process.env.POSTGRES_PORT
});

db.connect();

class MainModel{
    async setStd(props){
        try{
            const {Email,UserName,Password}=props;
            const result=await db.query("INSERT INTO students (std_email, std_username, std_password) VALUES ($1,$2,$3);",[Email,UserName,Password]);
            return true
        }
        catch(err){
            console.log("db",err);
            throw (err);
        }
    }
    async getStd(props){
        try{
            const {Email,Password}=props;
            const result=await db.query("Select * from students where std_email=$1 and std_password=$2;",[Email,Password]);
            console.log(result);
            if(result.rowCount===0){
                throw ("Email or Passowrd are Wrong");
            }
            return true
        }
        catch(err){
            console.log("db",err);
            throw (err);
        }
    }
}

export default MainModel;