import Register from "./page/Register";
import React,{useState,useContext} from "react"
import Login from "./page/Login";
import Home from "./page/Home";
import UserContext from "./Components/Context";
import Resume from "./page/Resume";
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom"
function MainRouter(){

    const [isLoged,setIsLoged]=useState(false)
    const [nameDisplay,setNameDisplay]=useState("")
    return(
        <>
        <UserContext.Provider value={{isLoged,setIsLoged,nameDisplay,setNameDisplay}} >
        <Router>
            <Routes>
                <Route path='/' exact element={<Login/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/resume/:id" element={<Resume/>}/>
            </Routes>
        </Router>
        </UserContext.Provider>
        </>
    )
}
export default MainRouter;