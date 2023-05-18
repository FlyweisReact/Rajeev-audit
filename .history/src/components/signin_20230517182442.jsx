import React, {useState} from "react";
import img from "../Images/d-1.png";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const Signin = ()=>{
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const url = "https://63munf68y8.execute-api.ap-south-1.amazonaws.com/dev/api/v1/adminLogin/login";

    const handleClick = async(e)=>{
        e.preventDefault();
        try{
            const res = await axios.post(url,
                {email, password}   
            )
            localStorage.setItem("token", res?.data?.Token);
            localStorage.setItem("email", res?.data?.email);
            localStorage.setItem("adminId", res?.data?._id);
           // console.log(res?.email);
            navigate("/welcome");
        }catch(err){
            alert("Admin with this credentials is not matching")
        }
    }
    return (
        <>
        <div className="signin_cont">
            <div className="signin_left">
                <img src={img} alt="" />
            </div>
            <div className="signin_right">
            <div className="rightDiv"></div>
                <h1>Welcome Back, Admin</h1>
                <p>welcome back! Please enter your details</p>
                <div className="signcont">
                    <form onSubmit={handleClick}>
                    <select>
                        <option value="">Select Role</option>
                        <option value="Admin">Admin</option>
                    </select>
                    <input type="email" placeholder="example@gmail.com" required
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                        onChange={(e)=>setEmail(e.target.value)}
                        
                    />
                    <input type="password" placeholder="password" 
                        onChange={(e)=>setPassword(e.target.value)}
                        required
                    />
                    <p>forget password</p>
                    <button >Sign IN</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Signin;