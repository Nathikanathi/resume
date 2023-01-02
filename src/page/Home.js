import React, { useEffect,useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../Components/Context";
import ResumeForm from "./ResumeFome";
function Home(){
    const value=useContext(UserContext);
    const log=localStorage.getItem('log');
    let navigate = useNavigate();

    useEffect(()=>{
            if(!value.isLoged && log=="false") navigate('/')
    },
    [value.isLoged]
    )
    return(
        <>
             <nav className="navbar navbar-expand-lg pad navbar navbar-dark bg-primary container-fluid">
            <div className="container">
                
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">About</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Contact</a>
                    </li>
                </ul>
                <form className="d-flex">
                    <button className="btn btn-success" type="button" onClick={()=>{value.setIsLoged(false);localStorage.setItem("log",false);navigate('/')}}>logout</button>
                </form>
                </div>
            </div>
            </nav>
            <div>
                <ResumeForm/>
            </div>
        </>
    )
}
export default Home; 