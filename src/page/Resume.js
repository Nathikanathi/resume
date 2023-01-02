import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Resume(){
    let params=useParams();
    const [viewDetails,setViewDetails]=useState('')

    useEffect(()=>{
        viewUserDetails(params.id);
    },[params.id])
    
    const viewUserDetails=async()=>{
        let {data}=await axios.get(`http://karka.academy/api/action.php?request=get_react_resume_by_id&user=meena&id=${params.id}`)
        setViewDetails(data.data.data)
    }
   console.log(viewDetails)
    return(
        <>
        {viewDetails && <div className="container border border-5 rounded m-5">
        <div className=" p-4 ">
        <label className="label h5 my-2" >Name </label><label id="name">{JSON.parse(viewDetails).f_name}</label><br/>
            
       
        <label className="label h5 my-2">Email </label><label id="email">{JSON.parse(viewDetails).email}</label><br/>
        <label className="label h5 my-2">Mobile_no </label><label id="mobile_no">{JSON.parse(viewDetails).phone}</label><br/>
        <label className="label h5 my-2">Skills </label><label id="skill">{JSON.parse(viewDetails).skill.join(",")}</label><br/>
        <h3 className=" py-4 text-danger my-2">Education</h3>
        <table className="table table-danger  table-striped">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Qualification</th>
                <th scope="col">Year</th>
                <th scope="col">Institute</th>
            </tr>
            </thead>
            <tbody>
            {
                JSON.parse(viewDetails).education.map((value,index)=>{
                    return(
                        <tr>
                <th scope="row">{index+1}</th>
                <td>{value.course}</td>
                <td>{value.year}</td>
                <td>{value.institute}</td>
            </tr>
                    )
                })
            }
            
            </tbody>
        </table>
        <h3 className="py-4 text-danger">Certification</h3>
        <table className="table table-danger  table-striped">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">course</th>
                <th scope="col">Duration</th>
                <th scope="col">Institute</th>
                </tr>
            </thead>
            <tbody>
            {
                JSON.parse(viewDetails).certificate.map((value,index)=>{
                    return(
                <tr>
                    <th scope="row">{index+1}</th>
                        <td>{value.course}</td>
                        <td>{value.duration}</td>
                        <td>{value.institute}</td>
                </tr>
                    )
                })
            }
            </tbody>
            </table>
            <h3 className="py-4 text-danger">Project</h3>
        <table className="table table-danger  table-striped">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Duration</th>
                <th scope="col">Abstract</th>
                </tr>
            </thead>
            <tbody>
            {
                JSON.parse(viewDetails).project.map((value,index)=>{
                    return(
                <tr>
                    <th scope="row">{index+1}</th>
                        <td>{value.title}</td>
                        <td>{value.duration}</td>
                        <td>{value.abstract}</td>
                </tr>
                    )
                })
            }
            </tbody>
            </table>
            <h3 className="py-4 text-danger">Experience</h3>
        <table className="table table-danger  table-striped">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Company</th>
                <th scope="col">Role</th>
                <th scope="col">Year of Working</th>
                </tr>
            </thead>
            <tbody>
            {
                JSON.parse(viewDetails).experience.map((value,index)=>{
                    return(
                <tr>
                    <th scope="row">{index+1}</th>
                    <td>{value.company}</td>
                    <td>{value.role}</td>
                    <td>{value.experience}</td>
                </tr>
                    )
                })
            }
            </tbody>
            </table>
        <h3 className="py-4 text-danger text-danger">Personal Details</h3>
        <label className="label h5 my-2">Gender  </label><label>{JSON.parse(viewDetails).gender}</label><br/>
        <label className="label h5 my-2">DOB </label><label>{JSON.parse(viewDetails).dob}</label><br/>
        <label className="label h5 my-2">Age </label><label >{JSON.parse(viewDetails).age}</label><br/>
        <label className="label h5 my-2">Marrital Status </label><label>{JSON.parse(viewDetails).marrital_status}</label><br/>
        <label className="label h5 my-2">Father's Name </label><label>{JSON.parse(viewDetails).father}</label><br/>
        <label className="label h5 my-2">Mother's Name </label><label>{JSON.parse(viewDetails).mother}</label><br/>
        <label className="label h5 my-2">address </label><label>{JSON.parse(viewDetails).address}</label><br/>
        <label className="label h5 my-2">Nationality </label><label>{JSON.parse(viewDetails).nationality}</label><br/>
        <label className="label h5 my-2">Language </label><label>{JSON.parse(viewDetails).language.join(",")}</label><br/>
        </div>
        </div>}
        </>
    )
}
export default Resume;