import { useState,useEffect } from "react"
import axios from "axios";
import {Link } from "react-router-dom";

function GetUserDetails(){
    const [userDetail,setUserDetail]=useState("")

    useEffect(()=>{
        getdata();
        // localStorage.setItem(isLoged)
     })

    let getdata=async()=>{
        let {data}=await axios.get('http://karka.academy/api/action.php?request=get_user_react_resume&&user=meena')
        const nn=data.data;
        setUserDetail(nn);
        }
    
    let deleteItem=async(id)=>{
        let {data}=await axios.get(`http://karka.academy/api/action.php?request=delete_react_user_resume&user=meena&id=${id}`) 
    }
    return(
        <>
        <table className="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col ">Name</th>
                <th scope="col">Delete</th>
                <th scope="col">View</th>
                </tr>
            </thead>
            <tbody>
        
        {
           userDetail && userDetail.map((items,index)=>{
            return(
                   <tr>
                        <th scope="row">{index+1}</th>
                        <td><b className="text-success">{JSON.parse(items.data).f_name}</b></td>
                        <td><button className="px-3 py-2 rounded btn btn-danger" type="button" onClick={()=>deleteItem(items.id)}>delete</button></td>
                        <td><Link to={`/resume/${items.id}`}>Show</Link></td>
                    </tr>
                    ) 
                }
            )
        }
         </tbody>
        </table>
        </>
    )
}
export default GetUserDetails;