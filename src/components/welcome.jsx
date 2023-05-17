import React from "react";
import {useNavigate} from "react-router-dom";
import img from "../Images/d-1.png";

const Welcome = ()=>{
    const navigate = useNavigate();
    setTimeout(()=>{
        navigate("/dashboard");
    }, 1000)
    return (
        <>
            <div className="welcomecont">
                <img src={img} alt="" />
                <h1>Welcome Back !</h1>
            </div>
        </>
    )
}

export default Welcome;