import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import GetUserDetails from "./getUserDetails";
import UserContext from "../Components/Context";
import {useNavigate } from "react-router-dom";
function ResumeForm(){
    const value=useContext(UserContext);
    const navigate=useNavigate();
    const log=localStorage.getItem('log');
    const [resume,setResume]=useState({
        
        f_name:"",
        email:"",
        phone:"",
        skill:[],
        education:[],
        certificate:[],
        project:[],
        experience:[],
        gender:"",
        dob:"",
        age:"",
        marrital_status:"",
        father:"",
        mother:"",
        address:"",
        nationality:"",
        language:[]
    })
    
    useEffect(()=>{
        if(value.isLoged || log=="true")
            navigate('/home')
        

        },[value.isLoged])

    const userResume={
        request:'create_react_resume',
        user:'meena',
        resume:resume
    }
     
    const [skilldetail,setSkillDetail]=useState("")
    const [education,setEducation]= useState("")
    const [certificate,setCertificate]=useState("")
    const [project,setProject] =useState("")
    const [experience,setExperience]=useState("")
    const [language,setLanguage]=useState("")
   // let title;
    const getResume=(key,value,title)=>{
        //let title=title;
        if(title=="education"){
            let list={...education,[key]:value}
            setEducation(list)
        }
        else if(title=="certification"){
            let list={...certificate,[key]:value}
            setCertificate(list)
        }
        else if(title=="project"){
            let list={...project,[key]:value}
            setProject(list)
        }
        else if(title=="experience"){
            let list={...experience,[key]:value}
            setExperience(list)
        }
        else{
            let updateResume={...resume,[key]:value}
            setResume(updateResume)
            console.log(resume)
            } 
        }
        
    //add education list
    const add=(title,key)=>{
            let educationDetail=[...resume[title],key]
            setResume({...resume,[title]:educationDetail})
           }
    

    //delete resume detail
    const remove=(pointer,title) =>{
            let del_item=resume[title].filter((value,index)=>index!=pointer)
            setResume({...resume,[title]:del_item}) 
       }
    
    const submit=async()=>{
        let {data}=await axios.post(' http://karka.academy/api/action.php',JSON.stringify(userResume))
        console.log(data);
    }

    console.log(resume)
    return(
        <>
        <div className="container m-5 ">
        <form className="p-5 bg-warning rounded">
         <h2>Welcome {value.nameDisplay.name}</h2>   
        <label className="label h5 my-2 ">Name</label> <input className="form-control" onChange={(e)=>getResume("f_name",e.target.value)} type="text"/><br/><br/>
        <label className="label h5 my-2">email:</label><input className="form-control" onChange={(e)=>getResume("email",e.target.value)} type="email"/><br/><br/>
        <label className="label h5 my-2">mobile_no</label><input className="form-control" onChange={(e)=>getResume("phone",e.target.value)} type="number"/><br/><br/>
        <label className="label h5 my-2">skills </label><input className="form-control" value={skilldetail} onChange={(e)=>setSkillDetail(e.target.value)} type="text"/>
        <button type="button" className="px-3 py-2 m-3 rounded btn btn-danger" onClick={() => {add("skill",skilldetail);setSkillDetail("")}}>add</button>
            <ul>
                {
                resume.skill.map((skill,index)=>{
                        return(
                        <li className="list">
                        <div>
                        <span>{index+1}</span>
                       <span key={index}>{skill}</span>
                       
                       <button type="button"  className="px-3 py-2 m-3 rounded btn btn-danger" onClick={()=>remove(index,"skill")}>Delete</button>
                       </div>   
                       
                        </li>
                        ) 
                        })
                }
            </ul>
    
        <h4>education:</h4>
        <table>
            <thead>
                <tr>
                    
                    <td className="text-center">course</td>
                    <td className="text-center">years</td>
                    <td className="text-center">Institute</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    
                    <td><input className="form-control" type="text" value={education.course}  onChange={(e)=>getResume("course",e.target.value,"education")}/></td>
                    <td><input className="form-control" type="text" value={education.year}  onChange={(e)=>getResume("year",e.target.value,"education")}/></td>
                    <td><input className="form-control" type="text" value={education.institute} onChange={(e)=>getResume("institute",e.target.value,"education")}/></td>
                    <td><button type="button" className="px-3 m-3 rounded btn btn-danger" onClick={()=>{add("education",education);setEducation({...education,course:"",year:"",institute:""})}}>add</button></td>
                </tr>
            </tbody>
        </table>
                
        {
            resume.education.map((edu,index)=>{
                return(
                            <table className="table table-borderless">
                                <tbody>
                                    <tr>
                                        <td className="col t_div">{index+1}</td>
                                        <td className="col t_div">{edu.course}</td>
                                        <td className="col t_div">{edu.year}</td>
                                        <td className="col t_div">{edu.institute}</td>
                                        <td className="col t_div"><button type="button"  className="px-3 py-2 rounded btn btn-danger" onClick={()=>remove(index,"education")}>Remove</button></td>
                                    </tr>
                                </tbody>
                            </table>
                            )
                    })
                    }
    
        <h4>certification:</h4>
        <table>
            <thead>
                <tr>
                    <td className="text-center">course</td>
                    <td className="text-center">duration</td>
                    <td className="text-center">institute</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input className="form-control" type="text" value={certificate.course} onChange={(e)=>getResume("course",e.target.value,"certification")}/></td>
                    <td><input className="form-control" type="text" value={certificate.duration} onChange={(e)=>getResume("duration",e.target.value,"certification")}/></td>
                    <td><input className="form-control" type="text" value={certificate.institute} onChange={(e)=>getResume("institute",e.target.value,"certification")}/></td>
                    <td><button type="button" className="px-3 py-2 m-3 rounded btn btn-danger"  onClick={()=>{add("certificate",certificate);setCertificate({...certificate,course:"",duration:"",institute:""})}}>add</button></td>

                </tr>
            </tbody>
        </table>
        {
            resume.certificate.map((value,index)=>{
                return(
                            <table>
                                <tbody>
                                    <tr className="row">
                                        <td className="col t_div">{index+1}</td>
                                        <td className="col t_div">{value.course}</td>
                                        <td className="col t_div">{value.duration}</td>
                                        <td className="col t_div">{value.institute}</td>
                                        <td className="col t_div"><button type="button" className="px-3 py-2 m-3 rounded btn btn-danger" onClick={()=>remove(index,"certificate")}>Remove</button></td>
                                    </tr>
                                </tbody>
                            </table>
                            )
                    })
                    }
        <h4>Project :</h4>
        <table>
            <thead>
                <tr>
                    <td className="text-center">title</td>
                    <td className="text-center">duration</td>
                    <td className="text-center">abstract</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input className="form-control" type="text" value={project.title} onChange={(e)=>getResume("title",e.target.value,"project")}/></td>
                    <td><input className="form-control" type="text" value={project.duration} onChange={(e)=>getResume("duration",e.target.value,"project")}/></td>
                    <td><input className="form-control" type="text" value={project.abstract} onChange={(e)=>getResume("abstract",e.target.value,"project")}/></td>
                    <td><button type="button" className="px-3 py-2 m-3 rounded btn btn-danger" onClick={()=>{add("project",project);setProject({...project,title:"",duration:"",abstract:""})}}>add</button></td>
                </tr>
            </tbody>
        </table>
        {
            resume.project.map((value,index)=>{
                return(
                            <table>
                                <tbody>
                                    <tr className="row">
                                        <td className="col t_div">{index+1}</td>
                                        <td className="col t_div">{value.title}</td>
                                        <td className="col t_div">{value.duration}</td>
                                        <td className="col t_div">{value.abstract}</td>
                                        <td className="col t_div"><button type="button" className="px-3 py-2 m-3 rounded btn btn-danger" onClick={()=>remove(index,"project")}>Remove</button></td>
                                    </tr>
                                </tbody>
                            </table>
                            )
                    })
                    }
         <h4>Experience :</h4>
         <table>
             <thead>
                 <tr>
                     <td className="text-center">company</td>
                     <td className="text-center">role_of_working</td>
                     <td className="text-center">year of experience</td>
                 </tr>
             </thead>
             <tbody>
                 <tr>
                     <td><input className="form-control" type="text" value={experience.company} onChange={(e)=>getResume("company",e.target.value,"experience")}/></td>
                     <td><input className="form-control" type="text" value={experience.role} onChange={(e)=>getResume("role",e.target.value,"experience")}/></td>
                     <td><input className="form-control" type="text" value={experience.experience} onChange={(e)=>getResume("experience",e.target.value,"experience")}/></td>
                     <td><button type="button" className="px-3 py-2 m-3 rounded btn btn-danger"  onClick={()=>{add("experience",experience);setExperience({...experience,company:"",role:"",experience:""})}}>add</button></td>
                 </tr>
             </tbody>
         </table>
         {
            resume.experience.map((value,index)=>{
                return(
                            <table>
                                <tbody>
                                    <tr className="row">
                                        <td className="col t_div">{index+1}</td>
                                        <td className="col t_div">{value.company}</td>
                                        <td className="col t_div">{value.role}</td>
                                        <td className="col t_div">{value.experience}</td>
                                        <td className="col t_div"><button type="button" className="px-3 py-2 m-3 rounded btn btn-danger" onClick={()=>remove(index,"experience")}>Remove</button></td>
                                    </tr>
                                </tbody>
                            </table>
                            )
                    })
                    }
         <h4>Personal Details</h4>
         <label className="label h5 my-2" >Gender:</label><input className="form-control" onChange={(e) => getResume("gender",e.target.value)}/><br/><br/>
         <label className="label h5 my-2">DOB:</label><input className="form-control" onChange={(e) => getResume("dob",e.target.value)}/><br/><br/>
         <label className="label h5 my-2">age:</label><input className="form-control" onChange={(e) => getResume("age",e.target.value)}/><br/><br/>
         <label className="label h5 my-2">Marrital Status:</label><input className="form-control" onChange={(e) => getResume("marrital_status",e.target.value)}/><br/><br/>
         <label className="label h5 my-2">Father's Name :</label><input className="form-control" onChange={(e) => getResume("father",e.target.value)}/><br/><br/>
         <label className="label h5 my-2">Mother's Name</label><input className="form-control" onChange={(e) => getResume("mother",e.target.value)}/><br/><br/>
         <label className="label h5 my-2">Address</label><textarea className="form-control row-5" onChange={(e) => getResume("address",e.target.value)}/><br/><br/>
         <label className="label h5 my-2">Nationality</label><input className="form-control" onChange={(e) => getResume("nationality",e.target.value)}/><br/><br/>
         <h4>Language Known</h4>
                 <input value={language} className="form-control" type="text" onChange={(e) => setLanguage(e.target.value)}/>
                 <button type="button" className="px-3 py-2 m-3 rounded btn btn-danger" onClick={()=>{add("language",language);setLanguage("")}}>add</button><br/><br/>
                 <ul>
                {
                    resume.language.map((language,index)=>{
                        return(
                        <li className="list">
                        <div>
                        <span>{index+1}</span>
                        <span key={index}>{language}</span>
                        <button type="button" className="px-3 py-2 m-3 rounded btn btn-danger" onClick={()=>remove(index,"language")}>Delete</button>
                        </div>   
                        </li> )
                })
                }
            </ul>
            <button className="px-4 py-2 btn btn-success" type="button" onClick={submit}>submit</button>
       </form>
                
                <GetUserDetails/>
                
        
        </div>
        </>
    )
}
export default ResumeForm;