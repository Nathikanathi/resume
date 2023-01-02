import { useState,useContext } from "react";
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import UserContext from "../Components/Context";
// import React, { useContext, useEffect, useState } from "react";
function Register(){
    const navigate = useNavigate();
    const value=useContext(UserContext);

    const [registerData,setRegisterData]=useState({
        request:"create_candidate",
        name:"",
        email:"",
        password:""
    })
     
    const getData=async()=>{
        const data= await axios.post('http://karka.academy/api/action.php', JSON.stringify(registerData))
        if(data){
            value.setNameDisplay(data.data)
            navigate('/')
        }
       console.log(data)
    }
    return(
        <>
        <div>
            <form>
                <label>Name</label>
                <input type="text" onChange={(e)=>setRegisterData({...registerData,name:e.target.value})}/><br/><br/>
                <label>email</label>
                <input type="email" onChange={(e)=>setRegisterData({...registerData,email:e.target.value})}/><br/><br/>
                <label>password</label>
                <input type="password" onChange={(e)=>setRegisterData({...registerData,password:e.target.value})}/><br/><br/>
               <button type="button" onClick={getData}>Register</button>
            </form>
        </div>
        </>
    )
}
export default Register;  