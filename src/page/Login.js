import { useNavigate,Link } from "react-router-dom";
import axios from "axios";
import UserContext from "../Components/Context";
import React, { useContext, useEffect, useState } from "react";
function Login(){

    const value=useContext(UserContext);
    const navigate = useNavigate();

    useEffect( ()=>{
        if(value.isLoged){
            navigate('/home')
        }
    },[value.isLoged])
    
    const [requestData,setRequestData]=useState({
        request:'candidate_login',
        email:"vijay@gmail.com",
        password:"pass@123"
    });
     
   

    const log=async()=>{
        const {data}= await axios.post('http://karka.academy/api/action.php', JSON.stringify(requestData))
        if(data.status=='success'){
            value.setIsLoged(true)
            localStorage.setItem("log",true)
            // value.setNameDisplay(data.data)
            navigate('/home')
        }
        else{
            value.setIsLoged(false)
        }
       console.log({data})
    }
   
    return(
        <>
            <h1 className="loginHeader text-center">Login Now</h1>
            <form className="container">
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                    <input type="email" className="form-control" id="inputEmail3"  onChange={(e)=>setRequestData({...requestData,email:e.target.value})}/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label" >Password</label>
                    <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputPassword3"   onChange={(e)=>setRequestData({...requestData,password:e.target.value})}/>
                    </div>
                </div>
                
                <button type="button" className="btn btn-primary " onClick={log}>Sign in</button>
                <p className="register_link text-center">New to our Website <Link to='/register'>Register now</Link></p>
            </form> 
        </>
    )
}

export default Login;